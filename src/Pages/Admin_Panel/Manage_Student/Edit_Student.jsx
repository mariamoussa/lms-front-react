import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Edit_Student(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [mname, setMname] = useState("");
    const [mothername, setMothername] = useState("");
    const [dateofbirth, setDate] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [pnumber, setNumber] = useState("");
    const [section_id, setSection] = useState("");

    const getStudent = async id => {
        const result = await fetch(`http://127.0.0.1:8000/api/student/${id}`);
        const data = await result.json();
        setFname(data.fname);
        setLname(data.lname);
        setMname(data.mname);
        setMothername(data.mothername);
        setDate(data.dateofbirth);
        setEmail(data.email);
        setAddress(data.address);
        setNumber(data.pnumber);
        setSection(data.section_id);
    }

    const handleSave = async () => {
        const id = props.match.params.id;

        let reqBody = {
            fname: fname,
            lname: lname,
            mname: mname,
            mothername: mothername,
            dateofbirth: dateofbirth,
            email: email,
            address: address,
            pnumber: pnumber,
            section_id: section_id
        };

        await fetch(`http://127.0.0.1:8000/api/student/${id}`, {
            method: "PUT",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        await props.history.push(`/student/list`);
    }

    useEffect(() => {
        getStudent(props.match.params.id);
    }, []);

    return (
        <div>
            <input
                type="text"
                name="fname"
                value={fname}
                onChange={e => setFname(e.target.value)}
                placeholder="First Name"
            />
            <br/>
            <input
                type="text"
                name="lname"
                value={lname}
                onChange={e => setLname(e.target.value)}
                placeholder="Last Name"
            />
            <br/>
            <input
                type="text"
                name="fatherName"
                value={mname}
                onChange={e => setMname(e.target.value)}
                placeholder="Father Name"
            />
            <br/>
            <input
                type="text"
                name="motherName"
                value={mothername}
                onChange={e => setMothername(e.target.value)}
                placeholder="Mother Name"
            />
            <br/>
            <input
                type="date"
                name="Birthdate"
                value={dateofbirth}
                onChange={e => setDate(e.target.value)}
                placeholder="Birthdate"
            />
            <br/>
            <input
                type="text"
                name="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            />
             <br/>
            <input
                type="text"
                name="address"
                value={address}
                onChange={e => setAddress(e.target.value)}
                placeholder="Address"
            />
            <br/>
            <input 
                type="text"
                name="phone"
                value={pnumber}
                onChange={e => setNumber(e.target.value)}
                placeholder="Phone"
            />
            <br/>
            <input
            readOnly
                type="text"
                name="section"
                value={section_id}
                onChange={e => setSection(e.target.value)}
                placeholder="Section"
            />
            <br/>

            <Link name="save" onClick={handleSave} >Save</Link>
            <Link name="cancel" onClick={() => props.history.push(`/student/list`)}>Cancel</Link>
        </div>
    );
}