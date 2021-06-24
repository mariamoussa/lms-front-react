import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';

export default function List_Section(props) {

    const [sections, setSections] = useState([]);

    const fetchdata = async () => {
        await API.get(`section`)
            .then(res => {
                const result = res.data;
                setSections(result);
            });
    }

    const deleteSection = async id => {
        await API.delete(`section/${id}`);
        //to refresh the list without reloading the page
        let filter = [...sections].filter((sections) => sections.id !== id);
        setSections(filter);
        // window.location.reload();
    }

    useEffect(() => {
        fetchdata();
    }, []);

    return (
        <div>
            <table>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Max Students</td>
                    <td>Classroom</td>
                </tr>
                {sections.map(section =>
                    <tr>
                        <td>{section.id}</td>
                        <td>{section.name}</td>
                        <td>{section.max_students}</td>
                        <td>{section.classroom_id}</td>
                        <td><Link onClick={() => props.history.push(`/section/edit/${section.id}`)}>Edit</Link></td>
                        <td><Link onClick={() => deleteSection(section.id)}>Delete</Link></td>
                        <td></td>
                    </tr>
                )}
            </table>
        </div>
    )
}