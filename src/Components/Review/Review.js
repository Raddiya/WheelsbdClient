import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

const Review = () => {
    const [reviews, setReviews] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("/review")
            .then(res => {
                setReviews(res.data)
                setLoading(false)
            })
    }, [loading])

    return (
        <div>
            <Table striped bordered hover className='text-center fw-bold w-100'>
                <thead>
                    <tr className='fs-md-3 fs-2 bg-info text-secondary'>
                        <th>Email</th>
                        <th>User Name</th>
                        <th>Review </th>


                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => (
                            <tr key={review._id} className='table-danger'>
                                <td attr='Email'>{review.email}</td>
                                <td attr='userName'> {review.userName}</td>
                                <td attr='Review'> {review.review}</td>

                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </div>
    );
};

export default Review;