import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Input from '../../../Components/Input';

export default function Edit_AdminClassroom(props) {

    const [name, setName] = useState("");

    const getClassroom = async id => {
        const result = await fetch(`http://127.0.0.1:8000/api/classroom/${id}`);
        const data = await result.json();

        setName(data.name);
    }

    const handleSave = async () => {
        const id = props.match.params.id;

        let reqBody = {
            name: name
        };

        await fetch(`http://127.0.0.1:8000/api/classroom/${id}`, {
            method: "PUT",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        await props.history.push(`/classroom/list`);
    }

    useEffect(() => {
        getClassroom(props.match.params.id);
    }, []);

    return (
        <div>
            <Input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Classroom Name"
            />
            <Link name="save" onClick={handleSave} >Save</Link>
            <Link name="cancel" onClick={() => props.history.push(`/classroom/list`)}>Cancel</Link>
        </div>
    );
}