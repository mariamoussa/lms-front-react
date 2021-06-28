import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';

export default function List_Classroom(props) {

    const [classrooms, setClassrooms] = useState([]);

    const fetchdata = async () => {
        await API.get('classroom')
        .then(res=>{
            const result=res.data;
            setClassrooms(result);
        });
        // const result = await fetch(`http://127.0.0.1:8000/api/classroom`);
        // const data = await result.json();
        // setClassrooms(data);
    }

    const deleteClassroom = async id => {
        await API.delete(`classroom/${id}`);
        window.location.reload();

        // await fetch(`http://127.0.0.1:8000/api/classroom/${id}`,
        //     { method: "DELETE" }
        // );
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <table border="2px">
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
                    </tr>
                )}
            </table>
        </div>
    )
}