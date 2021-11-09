import React from "react";
import './student.css';

export const TableHeader = () => {
    return (
        <thead className="th">
            <tr>
                <th>Student Id</th>
                <th>Student Name</th>
                <th>Location</th>
                <th>Course Name</th>
            </tr>
        </thead>
    )
}
