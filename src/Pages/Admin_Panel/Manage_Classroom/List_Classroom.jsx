import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function List_Classroom(props) {

    const [classrooms, setClassrooms] = useState([]);

    const fetchdata = async () => {
        const result = await fetch(`http://127.0.0.1:8000/api/classroom`);
        const data = await result.json();
        setClassrooms(data);
    }

    const deleteClassroom = async id => {
        await fetch(`http://127.0.0.1:8000/api/classroom/${id}`,
            { method: "DELETE" }
        );

        window.location.reload();
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <table>
                <tr>
                    {/* <td>ID</td> */}
                    <td>Name</td>
                </tr>
                {classrooms.map(classroom =>
                    <tr>
                        {/* <td>{classroom.id}</td> */}
                        <td>{classroom.name}</td>
                        <td><Link onClick={() => props.history.push(`/classroom/edit/${classroom.id}`)}>Edit</Link></td>
                        <td><Link onClick={() => deleteClassroom(classroom.id)}>Delete</Link></td>
                        <td></td>
                    </tr>
                )}
            </table>
        </div>
    )
}