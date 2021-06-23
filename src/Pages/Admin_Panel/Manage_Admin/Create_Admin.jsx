import React, { useState, useEffect } from 'react';
import BT from '../../../Components/Button';
import API from '../../../api';

export default function Create_Admin(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const onSubmit = () => {
        const data =
        {
            fname: fname,
            lname: lname,
            username: username,
            password: password,
            phone: phone,
            email: email,
        };

        API.post(`admin`, data);
        props.history.push('/admin');
    }

    return (
        <div>
            <label htmlFor="firstname">Enter your first name: </label>
            <input type="text"
                id="fname"
                placeholder="Enter your first name"
                value={fname}
                onChange={(e) => setFname(e.target.value)} 
            /><br />

            <label htmlFor="lastname">Enter your last name: </label><input type="text"
                id="lname"
                placeholder="Enter your last name"
                value={lname}
                onChange={(e) => setLname(e.target.value)} /><br />

            <label htmlFor="username">Enter your username: </label><input type="text"
                id="username"
                placeholder="Enter your username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} /><br />

            <label htmlFor="password">Enter your password: </label><input type="text"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} /><br />


            <label htmlFor="phone">Enter your phone: </label>
            <input type="text"
                id="phone"
                placeholder="Enter your phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />

            <input type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <BT
                type="button"
                onClick={onSubmit}
                description="Save"
            />
        </div>
    );
}