import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import './ManageUser.css';

const ManageUser = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("/users")
            .then(res => {
                setUsers(res.data)
                setLoading(false)
            })
    }, [loading])
    const deleteHandler = id => {
        axios.delete(`/user/${id}`)
            .then(res => {
                setLoading(true)
            })

    }
    const adminHandler = id => {
        axios.put(`/user/${id}`)
            .then(res => {
                setLoading(true)
            })

    }
    if (loading) {
        return <div className='text-center d-flex align-items-center text-danger justify-content-center' style={{ height: '100vh' }}>  </div>
    }
    return (
        <div>
            <Table striped bordered hover className='text-center fw-bold w-100'>
                <thead>
                    <tr className='fs-md-3 fs-2 bg-info text-secondary'>
                        <th>Email</th>
                        <th>Role</th>

                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user => (
                            <tr key={user._id} className='table-danger'>
                                <td attr='Email'>{user.email}</td>
                                <td attr='Role'> {user.role ? user.role : 'User'}</td>
                                <td attr='Action'>
                                    <button onClick={() => deleteHandler(user._id)} className='btn btn-danger'>
                                    </button>
                                    <button onClick={() => adminHandler(user._id)} className='btn btn-info'>
                                        MakeAdmin
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>

            </Table>
        </div>
    );
};

export default ManageUser;