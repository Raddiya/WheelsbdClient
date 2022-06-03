import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import MyCard from '../MyCard/MyCard';

const MyItems = () => {
  const [services, setServices] = useState([]);
  const token = localStorage.getItem('token')
  useEffect(() => {
    axios.get("/myitems", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) =>setServices(res.data.result))
  }, [token]);
  return (
    <div className='container'>
      <div className="row row-cols-md-2 row-cols-lg-3 g-4">

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Address</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
          {
          Array.isArray(services) && services.map(
            (item, index) =>
            <tr key={item._id}>
              <td> {index+1} </td>
              <td>{item.productName}</td>
              <td>{item.address}</td>
              <td>{item.quantity}</td>
            </tr>
          )}
            
          </tbody>
        </Table>
        
      </div>
    </div>
  );
};

export default MyItems;
