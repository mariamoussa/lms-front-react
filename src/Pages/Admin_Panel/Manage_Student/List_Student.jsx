import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function List_Student(props) {

    const [students, setStudents] = useState([]);

    const fetchdata = async () => {
        const result = await fetch(`http://127.0.0.1:8000/api/student`);
        const data = await result.json();
        setStudents(data);
    }

    const deleteStudent = async id => {
        await fetch(`http://127.0.0.1:8000/api/student/${id}`,
            { method: "DELETE" }
        );

        window.location.reload();
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <table border="2px">
                <tr>
                    <td>First Name</td>
                    <td>Last Name</td>
                    <td>Father Name</td>
                    <td>Mother Name</td>
                    <td>dateofbirth</td>
                    <td>Email</td>
                    <td>Address</td>
                    <td>Phone number</td>
                    <td>section</td>
                </tr>

                {students.map(student =>
                    <tr>
                        <td>{student.fname}</td>
                        <td>{student.lname}</td>
                        <td>{student.mname}</td>
                        <td>{student.mothername}</td>
                        <td>{student.dateofbirth}</td>
                        <td>{student.email}</td>
                        <td>{student.address}</td>
                        <td>{student.pnumber}</td>
                        <td>{student.section_id}</td>
                        <td><Link onClick={() => props.history.push(`/student/edit/${student.id}`)}>Edit</Link></td>
                        <td><Link onClick={() => deleteStudent(student.id)}>Delete</Link></td>
                        <td></td>
                    </tr>
                )}
            </table>
        </div>
    )
}