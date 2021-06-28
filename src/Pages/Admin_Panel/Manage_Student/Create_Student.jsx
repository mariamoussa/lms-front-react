import React, { useState, useEffect } from 'react';
import Sections_Class from '../../../Components/Sections_Class';
import API from '../../../api';
import IN from '../../../Components/Input';
import BT from '../../../Components/Button';
import Classrooms_List from '../../../Components/Classrooms';
import Bloodtypes from '../../../Components/BloodType';
import Gender from '../../../Components/Gender';


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
    const [classroom_id, setClassroom_id] = useState("");

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
            <h1>Add Student </h1>
            <label>First Name:</label>
            <IN
                type="text"
                name="fname"
                value={fname}
                onChange={e => setFname(e.target.value)}
                placeholder="First Name"
            /> <br /><br />

            <label>Last Name:</label>
            <IN
                type="text"
                name="lname"
                value={lname}
                onChange={e => setLname(e.target.value)}
                placeholder="Last Name"
            /><br /><br />

            <label>Middle Name:</label>
            <IN
                type="text"
                name="middlename"
                value={middlename}
                onChange={e => setMiddlename(e.target.value)}
                placeholder="Middle Name"
            /><br /><br />

            <label>Mother Name:</label>
            <IN
                type="text"
                name="mothername"
                value={mothername}
                onChange={e => setMothername(e.target.value)}
                placeholder="Mother name"
            /><br /><br />

            <label>Birthdate:</label>
            <IN
                type="date"
                name="birthdate"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)}
                placeholder="Date Of Birth"
            /><br /><br />

            <label>Email:</label>
            <IN
                type="email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            /><br /><br />

            <label>Phone Number:</label>
            <IN
                type="integer"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone Number"
            /><br /><br />

            <label>Photo:</label>
            <IN
                type="text"
                name="photo"
                value={photo}
                onChange={e => setPhoto(e.target.value)}
                placeholder="Photo"
            /><br /><br />

            <label>Gender:</label>
            <Gender
                gender={e => setGender(e.target.value)}
            />
            <br /><br />

            {/* <label>Gender:</label>
            <IN
                type="text"
                name="gender"
                value={gender}
                onChange={e => setGender(e.target.value)}
                placeholder="Gender"
            /><br /><br /> */}

            <label>Blood Type:</label>
            <Bloodtypes
                bloodtype={e => setBloodtype(e.target.value)}
            />
            <br /><br />

            {/*<label>Blood Type:</label>
            <IN
                type="text"
                name="bloodtype"
                value={bloodtype}
                onChange={e => setBloodtype(e.target.value)}
                placeholder="Blood type"
            /><br /><br /> */}

            <label>Classroom:</label>
            <Classrooms_List
                mostafa={e => setClassroom_id(e.target.value)}
            /><br /><br />

            <label>Section:</label>
            <Sections_Class
                aymie={e => setSection_id(e.target.value)}
                idClass={classroom_id}
            />
            <br /><br />


            <BT description="save" onClick={handleSave} >Add</BT>
        </div>
    );
}
