import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';

export default function List_Admin(props) {

    const [admins, setAdmins] = useState([]);

    const fetchdata = async () => {
        await API.get(`admin`)
            .then(res => {
                const result = res.data;
                setAdmins(result);
            });
    }

    const deleteAdmin = async id => {
        await API.delete(`admin/${id}`);
        //to refresh the list without reloading the page
        let filter = [...admins].filter((admins) => admins.id !== id);
        setAdmins(filter);
        // window.location.reload();
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <table>
                <tr>
                    <td>ID</td>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Username</td>
                    <td>Password</td>
                    <td>Phone</td>
                    <td>Email</td>
                </tr>
                {admins.map(admin =>
                    <tr>
                        <td>{admin.id}</td>
                        <td>{admin.fname}</td>
                        <td>{admin.lname}</td>
                        <td>{admin.username}</td>
                        <td>{admin.password}</td>
                        <td>{admin.phone}</td>
                        <td>{admin.email}</td>
                        <td><Link onClick={() => props.history.push(`/admin/edit/${admin.id}`)}>Edit</Link></td>
                        <td><Link onClick={() => deleteAdmin(admin.id)}>Delete</Link></td>
                        <td></td>
                    </tr>
                )}
            </table>
        </div>
    )
}