import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';

export default function List_Student(props) {

    const [students, setStudents] = useState([]);

    const fetchdata = async () => {
        await API.get('stu-sec-class')
        .then(res=>{
            const result=res.data;
            setStudents(result);
        })
    }

    const deleteStudent = async id => {
        await API.delete(`student/${id}`);
        await props.history.push(`/student/list`);
        window.location.reload();
    }

    // const deleteStudent = async id => {
    //     await fetch(`http://127.0.0.1:8000/api/student/${id}`,
    //         { method: "DELETE" }
    //     );
    //     window.location.reload();
    // }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <table border="2px">
                <tr>
                    <td>First Name</td>
                    <td>Middle Name</td>
                    <td>Last Name</td>
                    <td>Mother Name</td>
                    <td>Date of Birth</td>
                    <td>Gender</td>
                    <td>Blood Type</td>
                    <td>Email</td>
                    <td>Phone number</td>
                    <td>Classroom</td>
                    <td>section</td>
                </tr>

                {students.map(student =>
                    <tr>
                        <td>{student.fname}</td>
                        <td>{student.middlename}</td>
                        <td>{student.lname}</td>
                        <td>{student.mothername}</td>
                        <td>{student.birthdate}</td>
                        <td>{student.gender}</td>
                        <td>{student.bloodtype}</td>
                        <td>{student.email}</td>
                        <td>{student.phone}</td>
                        <td>{student.classroom_name}</td>
                        <td>{student.section_name}</td>
                        <td><Link onClick={() => props.history.push(`/student/edit/${student.id}`)}>Edit</Link></td>
                        <td><Link onClick={() => deleteStudent(student.id)}>Delete</Link></td>
                        <td><Link onClick={() => props.history.push(`/student/info/${student.id}`)}>View</Link></td>
                    </tr>
                )}
            </table>
        </div>
    )
}