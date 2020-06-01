import React from 'react';

import Aux from '../../../hoc/Auxil'

const CourseCreate = (props) => {
    function addCourse () {
        const courseName = document.getElementById('courseName').value;
        const courseDescription = document.getElementById('courseDescription').value;
        let courseId = '';
        if (props.editMode) {
            courseId = props.courseData.id
        }
        return {
            name: courseName,
            description: courseDescription,
            id: courseId
        };
    }

    let addButton =<button onClick={() => props.click(addCourse())} className='btn btn-primary'>Send Data</button>
    if (props.editMode) {
        addButton =<button onClick={() => props.click(addCourse())} className='btn btn-primary'>Edit Data</button>
    }

    return (
        <Aux>
            <label>Course Name</label>
            <input id='courseName' defaultValue={props.courseData.name} className='form-control w-50' type='text'/>
            <label>Course Description</label>
            <input id='courseDescription' defaultValue={props.courseData.description}  className='form-control w-50' type='text'/>
            {addButton}
        </Aux> 
    )
}

export default CourseCreate;