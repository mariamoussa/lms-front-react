import { useState } from "react";
import API from "../../../api";
import IN from "../../../Components/Input";
import Classes from "../../../Components/Classrooms";

export default function Create_Section(props) {

    const [name, setName] = useState("");
    const [maxStudents, setMaxstudents] = useState("");
    const [classroom_id, setClassroom_id] = useState("");

    const handleSave = async () => {
        let reqBody = {
            name: name,
            max_students: maxStudents,
            classroom_id: classroom_id
        }
        console.log(reqBody);
        await API.post('section', reqBody);
        await props.history.push('/section/list');
    }

    return (
        <div>
            <IN
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Section name"
            />
            <br></br>

            <IN
                type="text"
                value={maxStudents}
                onChange={e => setMaxstudents(e.target.value)}
                placeholder="Max Students"
            />
            <br></br>

            <Classes mostafa={e => setClassroom_id(e.target.value)} />

            <button onClick={handleSave}>Save</button>
        </div>
    );
}