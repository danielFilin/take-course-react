import React from 'react';

import Aux from '../../../../hoc/Auxil';

const SingleCourse = (props) => {
    const doit = () => {
        console.log(1)
    }
    return (
        <Aux>
            <h5>{props.name}</h5>
            <p>{props.description}</p>
            <button onClick={() => props.deleteCourse(props.name)} className='btn btn-danger'>Delete Course</button>
            <button onClick={() => props.editCourse(props.id)} className='btn btn-info'>Edit</button>
            
        </Aux>
    )
}

export default SingleCourse;