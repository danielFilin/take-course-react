import React from 'react';

import SingleCourse from './SingleCourse/SingleCourse';

const CourseList = (props) => {
    const coursesList = props.courseInfo.map((course, index) => {
        return <SingleCourse 
                    key={index} 
                    name={course.name}
                    id={course.id} 
                    description={course.description}
                    deleteCourse={props.onDelete}
                    editCourse={props.onEdit}
                    />
    })
    
    return (
        <div>
            <h3>List of availiable courses</h3>
            {coursesList}  
        </div>
    )
} 

export default CourseList; 