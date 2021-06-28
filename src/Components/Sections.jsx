// import React, { useState, useEffect } from 'react';

// export default function Section_List(props) {

//     const [sections, setSections] = useState([]);
    
//     const fetchdata = async () => {
//         const result = await fetch("http://127.0.0.1:8000/api/section");
//         const data = await result.json();
//         setSections(data);
//     }

//     useEffect(() => {
//         fetchdata();
//     }, []);
    
//     return (
//         <div id={props.id} >
//             <select id={props.id} onChange={props.onChange} className={props.className}>
//                 <option value={null}>Section</option>
//                 {sections.map(section => (
//                     <option selected={props.id == section.id}
//                         name={section.id}
//                         value={section.id}>
//                         {section.name}
//                     </option>
//                 ))}
//             </select>
//         </div>
//     );
// }