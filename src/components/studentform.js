import React, { useState } from "react";
import './student.css';

export default function StudentApp() {


    const [values, setValues] = useState({
        studentid: '',
        studentname: '',
        location: '',
        coursename: '',
    });


    const handleInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            studentid: event.target.value,
        }));
    };
    const handlenameInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            studentname: event.target.value,
        }));
    };
    const handlelocationInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            location: event.target.value,
        }));
    };
    const handlecourseInputChange = (event) => {
        event.persist();
        setValues((values) => ({
            ...values,
            coursename: event.target.value,
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        this.handleSubmit(values)

    };

    return (
        <div class="form-container">
            <form class="register-form" onSubmit={handleSubmit}>
                <input
                    id="student-id"
                    class="form-field"
                    type="text"
                    placeholder="Student Id"
                    name="studentid"
                    value={values.studentid}
                    onChange={handleInputChange}
                />
                <input
                    id="student-name"
                    class="form-field"
                    type="text"
                    placeholder="Student Name"
                    name="studentname"
                    value={values.studentname}
                    onChange={handlenameInputChange}
                />
                <input
                    id="location-name"
                    class="form-field"
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={values.location}
                    onChange={handlelocationInputChange}
                />
                <input
                    id="course-name"
                    class="form-field"
                    type="text"
                    placeholder="Course Name"
                    name="coursename"
                    value={values.coursename}
                    onChange={handlecourseInputChange}
                />
                <button class="form-field" type="submit" >
                    Submit
                </button>
            </form>
        </div>
    );
}