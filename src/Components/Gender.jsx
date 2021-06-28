export default function Gender(props){


    return (
        <select onChange={props.gender}>
            <option value={null}>Gender</option>
            <option value="female">Female</option>
            <option value="male">Male</option>
        </select>
    );
}