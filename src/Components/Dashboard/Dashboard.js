import React, { useEffect, useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const [user, setUser] = useState({})
    console.log(user)
    useEffect(() => {
        const token = `barer ${localStorage.getItem('token')}`
        if (token) {
            axios.get('/jwt-decoded', {
                headers: {
                    Authorization: token

                }
            })
                .then(res => {
                    setUser(res.data)
                })
        }
    }, [])
    return (
        <section className='d-flex h-100 align-items-stretch'>
            <div className='sidebar'>
                <NavLink className={({ isActive }) =>
                    isActive ? "link-active link" : "link"
                } to='/dashboard/'>My Profile</NavLink>
                {
                    user.role === 'admin' ? (
                        <>
                            <NavLink className={({ isActive }) =>
                                isActive ? "link-active link" : "link"
                            } to='/dashboard/review'>All Review</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "link-active link" : "link"
                            } to='/dashboard/manage-all-orders'>Manage All Orders</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "link-active link" : "link"
                            } to='/dashboard/additem' >Add A Product</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "link-active link" : "link"
                            } to='/dashboard/manage_inventory'>Manage Products</NavLink>
                            <NavLink className={({ isActive }) =>
                                isActive ? "link-active link" : "link"
                            } to='/dashboard/manageAllUser'>Manage All User</NavLink>

                        </>
                    )
                        : (
                            <>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "link-active link" : "link"
                                } to='/dashboard/my_items'>My Order</NavLink>

                            </>
                        )
                }



            </div>
            <div className='w-100'>
                <Outlet />
            </div>
        </section>
    );
};

export default Dashboard;