import React, { useState, useEffect } from 'react';
import Sections from '../../../Components/Sections_Class';
import API from '../../../api';
import IN from '../../../Components/Input';
import BT from '../../../Components/Button';


export default function Create_Student(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [mothername, setMothername] = useState("");
    const [photo, setPhoto] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [bloodtype, setBloodtype] = useState("");
    const [section_id, setSection_id] = useState("");

    const handleSave = async () => {
        let reqBody = {
            fname: fname,
            lname: lname,
            email: email,
            phone: phone,
            middlename: middlename,
            mothername: mothername,
            photo: photo,
            birthdate: birthdate,
            gender: gender,
            bloodtype: bloodtype,
            section_id: section_id,
        };

        await API.post('student', (reqBody));
        await props.history.push('/student/list');
    }

    //     await fetch("http://127.0.0.1:8000/api/student", {
    //         method: "POST",
    //         body: JSON.stringify(reqBody),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });

    //     await props.history.push(`/student/list`);
    // }

    return (
        <div>
            <IN
                type="text"
                name="fname"
                value={fname}
                onChange={e => setFname(e.target.value)}
                placeholder="First Name"
            /> <br />
            <IN
                type="text"
                name="lname"
                value={lname}
                onChange={e => setLname(e.target.value)}
                placeholder="Last Name"
            /><br />
            <IN
                type="text"
                name="middlename"
                value={middlename}
                onChange={e => setMiddlename(e.target.value)}
                placeholder="Middle Name"
            /><br />
            <IN
                type="text"
                name="mothername"
                value={mothername}
                onChange={e => setMothername(e.target.value)}
                placeholder="Mother name"
            /><br />
            <IN
                type="date"
                name="birthdate"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)}
                placeholder="Date Of Birth"
            /><br />
            <IN
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            /><br />

            <IN
                type="integer"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone Number"
            /><br />
            <IN
                type="text"
                name="photo"
                value={photo}
                onChange={e => setPhoto(e.target.value)}
                placeholder="Photo"
            /><br />
            <IN
                type="text"
                name="gender"
                value={gender}
                onChange={e => setGender(e.target.value)}
                placeholder="Gender"
            /><br />
            <IN
                type="text"
                name="bloodtype"
                value={bloodtype}
                onChange={e => setBloodtype(e.target.value)}
                placeholder="Blood type"
            /><br />
            <Sections
                onChange={e => setSection_id(e.target.value)}
            />

            <BT description="save" onClick={handleSave} >Add</BT>
        </div>
    );
}
