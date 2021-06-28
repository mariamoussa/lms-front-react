import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';
import IN from '../../../Components/Input';

export default function Edit_Student(props) {

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [middlename, setMiddlename] = useState("");
    const [mothername, setMothername] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [gender, setGender] = useState("");
    const [bloodtype, setBloodtype] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    // const [photo, setPhoto] = useState("");
    const [classroom, setClassroom] = useState("");
    const [section, setSection] = useState("");

    const getStudent = async id => {
        await API.get(`stu-sec-class/${id}`).then(
            res=>{
                const result = res.data.data;
                setFname(result.fname);
                setLname(result.lname);
                setMiddlename(result.middlename);
                setMothername(result.mothername);
                setBirthdate(result.birthdate);
                setGender(result.gender);
                setEmail(result.email);
                setPhone(result.phone);
                setBloodtype(result.bloodtype);
                // setPhoto(result.photo);
                setClassroom(result.classroom_name);
                setSection(result.section_name);
            }
        )
    }

    const handleSave = async () => {
        const id = props.match.params.id;

        let reqBody = {
            fname: fname,
            lname: lname,
            mniddlename: middlename,
            mothername: mothername,
            birthdate: birthdate,
            gender:gender,
            email: email,
            bloodtype: bloodtype,
            phone: phone,
            section_name: section,
            classroom_name: classroom
        };

        await API.put(`student/${id}`, (reqBody));
        await props.history.push(`/student/list`);

        // await fetch(`http://127.0.0.1:8000/api/student/${id}`, {
        //     method: "PUT",
        //     body: JSON.stringify(reqBody),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
    }

    useEffect(() => {
        getStudent(props.match.params.id);
    }, []);

    return (
        <div>
            <IN
                type="text"
                name="fname"
                value={fname}
                onChange={e => setFname(e.target.value)}
                placeholder="First Name"
            />
            <br/>
            <IN
                type="text"
                name="lname"
                value={lname}
                onChange={e => setLname(e.target.value)}
                placeholder="Last Name"
            />
            <br/>
            <IN
                type="text"
                name="middlename"
                value={middlename}
                onChange={e => setMiddlename(e.target.value)}
                placeholder="Middle Name"
            />
            <br/>
            <IN
                type="text"
                name="motherName"
                value={mothername}
                onChange={e => setMothername(e.target.value)}
                placeholder="Mother Name"
            />
            <br/>
            <IN
                type="date"
                name="Birthdate"
                value={birthdate}
                onChange={e => setBirthdate(e.target.value)}
                placeholder="Birthdate"
            />
            <br/>
            <IN
                type="text"
                name="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            />
             <br/>
            <IN
                type="text"
                name="gender"
                value={gender}
                onChange={e => setGender(e.target.value)}
                placeholder="Gender"
            />
            <br/>
            <IN
                type="text"
                name="bloodtype"
                value={bloodtype}
                onChange={e => setBloodtype(e.target.value)}
                placeholder="Bloodtype"
            />
            <br/>
            <IN 
                type="text"
                name="phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                placeholder="Phone"
            />
            <br/>
            <IN
            readOnly
                type="text"
                name="classroom"
                value={classroom}
                // onChange={e => setClassroom(e.target.value)}
                placeholder="Classroom"
            />
            <br/>
            <IN
            readOnly
                type="text"
                name="section"
                value={section}
                // onChange={e => setSection(e.target.value)}
                placeholder="Section"
            />
            <br/>

            <Link name="save" onClick={handleSave} >Save</Link>
            <Link name="cancel" onClick={() => props.history.push(`/student/list`)}>Cancel</Link>
        </div>
    );
}