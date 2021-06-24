import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';
import IN from '../../../Components/Input';

export default function Edit_Admin(props) {

    const [name, setName] = useState("");
    const [maxStudents, setMaxstudents] = useState("");
    const [classroom_id, setClassroom_id] = useState("");

    const getSection = async id => {
        await API.get(`section/${id}`)
            .then(res => {
                const result = res.data;
                setName(result.name);
                setMaxstudents(result.max_students);
                setClassroom_id(result.classroom_id);
            });
    }

    const handleSave = async () => {
        const id = props.match.params.id;

        let reqBody = {
            name: name,
            max_students: maxStudents,
            classroom_id: classroom_id
        };

        await API.put(`section/${id}`, (reqBody));
        await props.history.push(`/section/list`);
    }

    useEffect(() => {
        getSection(props.match.params.id);
    }, []);

    return (
        <div>
            <IN
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Name"
            />
            <IN
                type="text"
                name="maxStudents"
                value={maxStudents}
                onChange={e => setMaxstudents(e.target.value)}
                placeholder="Max Students"
            />
            
            <Link
                name="save"
                onClick={handleSave}
            > Save </Link>

            <Link
                name="cancel"
                onClick={() => props.history.push(`/admin/list`)}
            >Cancel</Link>
        </div>
    );
}