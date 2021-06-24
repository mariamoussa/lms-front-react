import React, { useState, useEffect } from 'react';

export default function Create_Classroom(props) {

    console.log(props);
    
    const [name, setName] = useState("");

    const handleSave = async () => {

        let reqBody = {
            name: name
        };

        await fetch("http://127.0.0.1:8000/api/classroom", {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        await props.history.push(`/classroom/list`);
    }

    return (
        <div>
            <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Classroom Name"
            />
            <button name="save" onClick={handleSave} >Add</button>
        </div>
    );
}