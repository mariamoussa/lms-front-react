import React from 'react';
import { useEffect, useState } from 'react';
import API from '../../../api';
import { Switch, Route, Link, useParams } from 'react-router-dom'

function Edit_Admin() {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    let { id } = useParams();
    const admin_id = id;
    // const [state, updateState] = useState({})
    const [admin, setAdmins] = useState({})

    const GetAdmin_id = async () => {
        const data = await API.get(`admin/${admin_id}`);
        setAdmins(data.data);
        console.log(data.data);
    }

    const setState = (nextState) => {
        setAdmins({
            ...admin,
            ...nextState
        })
    }

    const handleChange = e => {
        let { name, value } = e.target;
        setState({
            [name]: value
        })
    }

    useEffect(() => {
        GetAdmin_id()
    }, []);

    return (
        <div>
            <label htmlFor="firstname">First name: </label><input type="text"
                id="fname"
                placeholder="First name"
                name="fname"
                value={admin.fname}
                onChange={handleChange} /><br /><br />

            <label htmlFor="lastname">Last name: </label><input type="text"
                id="lname"
                placeholder="Last name"
                value={admin.lname}
                name="lname"
                onChange={handleChange}/><br /><br />

            <label htmlFor="username">Username: </label><input type="text"
                id="username"
                placeholder="Username"
                value={admin.username}
                name="username"
                onChange={handleChange} /><br /><br />

            <label htmlFor="password">Password: </label><input type="text"
                id="password"
                placeholder="Password"
                value={admin.password}
                name="password"
                onChange={handleChange} /><br /><br />


            <label htmlFor="phone">Phone Number: </label>
            <input type="text"
                id="phone"
                placeholder="Phone Number"
                value={admin.phone}
                name="phone"
                onChange={handleChange}
            /><br /><br />

            <label htmlFor="phone">Email: </label>
            <input type="email"
                id="email"
                placeholder="Email"
                value={admin.email}
                name="email"
                onChange={handleChange}
            />
            <br /><br />
            <button type="submit" onClick="">Save</button>

        </div>
    );
}

export default Edit_Admin;