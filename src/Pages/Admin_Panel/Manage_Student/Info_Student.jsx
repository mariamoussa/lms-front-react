import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';

export default function Info_Student(props) {

    const id = props.match.params.id;

    const [state, updateState] = useState({
        fname: "",
        lname: "",
        middlename: "",
        mothername: "",
        birthdate: "",
        gender: "",
        bloodtype: "",
        email: "",
        phone: "",
        // photo: "",
        section_name: "",
        classroom_name: ""
    });

    const setState = (nextState) => {
        updateState(prevState => ({
            ...prevState,
            ...nextState
        }));
    }

    const fetchdata = async id => {

        // await API.get(`stu-sec-class`)
        //     .then(res => {
        //         const result = res.data;
        //         const data = result.find(student => student.id == id);
        //         setState(data);
        //     });

        await API.get(`stu-sec-class/${id}`)
            .then(res => {
                const result = res.data.data;
                setState(result);
                // console.log(res.data.data);
                // console.log(res.data);
            });
    }

    // const deleteStudent = async id => {
    //     await API.delete(`student/${id}`);
    //     await props.history.push(`/student/list`);
    // }

    useEffect(() => {
        fetchdata(props.match.params.id);
    }, []);

    return (
        <div>
            <p>{id}</p>
            {/* <img src={`http://localhost/codi/LMS/lms_laravel/storage/app/public/images/${state.image}`} alt="" /> */}
            <p>First Name : {state.fname}</p>
            <p>Middle Name : {state.middlename}</p>
            <p>Last Name : {state.lname}</p>
            <p>Mother Name : {state.mothername}</p>
            <p>Gender : {state.gender}</p>
            <p>Date of Birth : {state.birthdate}</p>
            <p>Email : {state.email}</p>
            <p>Phone Number : {state.phone}</p>
            <p>Address : {state.bloodtype}</p>
            <p>Classroom : {state.classroom_name}</p>
            <p>Section : {state.section_name}</p>
            <p><Link onClick={() => props.history.push(`/student/edit/${id}`)}> Edit </Link></p>
            {/* <p><Link onClick={() => deleteStudent(id)}>Delete</Link></p>  */}
        </div>
    );
}