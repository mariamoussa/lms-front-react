import React from 'react';
import { useEffect, useState } from 'react';
import API from '../../../api';
import { Switch, Route, Link } from 'react-router-dom'


function List_Admin() {
    const [admins, setAdmins] = useState([]);

    const getAdmins = async () => {
        const data = await API.get("/admin");
        setAdmins(data.data);
        console.log(data.data);
    }

    useEffect(() => {
        getAdmins()
    }, []);

    return (
        <div>
            <table>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                <th>Password</th>
                <th>Phone</th>
                <th>Email</th>

                <tbody>
                    {admins.map((admins) => {
                        return (
                            <tr key={admins.id}>
                                <td>{admins.fname}</td>
                                <td>{admins.lname}</td>
                                <td>{admins.username}</td>
                                <td>{admins.password}</td>
                                <td>{admins.phone}</td>
                                <td>{admins.email}</td>
                                <Link to={`admin/edit/${admins.id}`}>
                                    <button>
                                        Edit
                                    </button>
                                </Link>
                            </tr>


                        );
                    })}
                </tbody>

            </table>

        </div>
    );
}

export default List_Admin;