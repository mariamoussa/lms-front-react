import React, { useState, useEffect } from 'react';
import API from '../../../api';
import Input from '../../../Components/Input';
import BT from '../../../Components/Button';

export default function Create_Classroom(props) {

    // console.log(props);
    
    const [name, setName] = useState("");

    const handleSave = async () => {

        let reqBody = {
            name: name
        };

        // await fetch("http://127.0.0.1:8000/api/classroom", {
        //     method: "POST",
        //     body: JSON.stringify(reqBody),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });

        await API.post('classroom', reqBody);
        await props.history.push(`/classroom/list`);
    }

    return (
        <div>
            <Input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Classroom Name"
            />
            <BT name="save" onClick={handleSave} >Add</BT>
        </div>
    );
}