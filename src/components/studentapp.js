import React, { useState } from "react";
import data from "./data.json"

const Dataserve = () => {

    const [students, setStudents] = useState(data);
    const [addStudentData, setAddStudentData ] = useState({
        studentId:'',
        studentName:'',
        address:'',
        courseName:'',
    })

    const handleAddStudentChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newStudentData = { ...addStudentData};
        newStudentData[fieldName] = fieldValue;

        setAddStudentData(newStudentData);

    }

    const handleAddStudentSubmit = (event) => {
        event.preventDefault();

        const newStudent = {
            studentId : addStudentData.studentId,
            studentName : addStudentData.studentName,
            address : addStudentData.address,
            courseName : addStudentData.courseName,

            
        };

        const newStudents = [ ...students, newStudent];
        setStudents(newStudents);

    };

    return (<div className="class-container">
        <table>
            <thead>
                <tr>
                    <th>Student-Id</th>
                    <th>Student-Name</th>
                    <th>Address</th>
                    <th>Course-Name</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <tr>
                    <td>{student.studentId}</td>
                    <td>{student.studentName}</td>
                    <td>{student.address}</td>
                    <td>{student.courseName}</td>
                </tr>
                ))}
                
            </tbody>
        </table>
        <h2>New student details</h2>
        <form onSubmit={handleAddStudentSubmit}>
            <input 
             type="number" 
             name="studentId" 
             required="required" 
             placeholder="Enter the Id"
             onChange={handleAddStudentChange} 
            />
            <input 
             type="text" 
             name="studentName" 
             required="required" 
             placeholder="Enter the Studentname"
             onChange={handleAddStudentChange}  
            />
            <input 
             type="text" 
             name="address" 
             required="required" 
             placeholder="Enter the address"
             onChange={handleAddStudentChange}
             />
             <input 
             type="text" 
             name="courseName" 
             required="required" 
             placeholder="Enter the coursename"
             onChange={handleAddStudentChange} 
            />
            <button type="submit">Add</button>
        </form>
    </div>
    );
};

export default Dataserve;