import React, { useState, useEffect } from 'react';
import BT from '../../../Components/Button';

export default function Create_Admin() {

    const [fname, setFname] = useState("");
    const [lname,setLname]= useState("");
    const[username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const [phone, setPhone]=useState();

    const [name, setName]=useState("test");

    const save = () => {
        setName("MARIA");
    }

    return (
        <div>
            <BT
                type="button"
                onClick={save}
                description={name}
            />
        </div>
    );
}