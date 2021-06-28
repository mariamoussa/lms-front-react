import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../../api';
import Input from '../../../Components/Input';

export default function Edit_Classroom(props) {
    
    const [name, setName] = useState("");

    const getClassroom = async id => {
        await API.get(`classroom/${id}`)
        .then(res=>{
            const result= res.data;
            setName(result.name);
        });
        // const result = await fetch(`http://127.0.0.1:8000/api/classroom/${id}`);
        // const data = await result.json();

        // setName(data.name);
    }

    const handleSave = async () => {
        const id = props.match.params.id;

        let reqBody = {
            name: name
        };

        await API.put(`classroom/${id}`, (reqBody));
        await props.history.push(`/classroom/list`);
    }
        // await fetch(`http://127.0.0.1:8000/api/classroom/${id}`, {
        //     method: "PUT",
        //     body: JSON.stringify(reqBody),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

   

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