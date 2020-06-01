import React, {Component} from 'react';

import Aux from '../../hoc/Auxil';
import CourseList from '../../components/Courses/CourseList/CourseList';
import CourseCreate from '../../components/Courses/CourseCreate/CourseCreate';

class CourseBuilder extends Component {
    state = {
        courses: [
            {name: 'Late History', description: 'very detailed and interesting', id: 'sasdas'},
            {name: 'Roman Republic', description: 'Rise and fall of the great empire', id: 'a3r5c'},
        ],
        courseToEdit: {
            name: '',
            description: '',
            editMode: false
        }
    }

    render () {
        const addCourse = (courseData) => {
            const newCourse = {
                name: courseData.name,
                description: courseData.description
            }
            const currentCourses = [...this.state.courses];
            if (courseData.id !== '') {
                let currentCourses = [...this.state.courses];
                this.state.courses.forEach((course, index) => {
                    if (course.id === courseData.id) {
                        currentCourses[index] = {
                            name: courseData.name,
                            description: courseData.description,
                            id: courseData.id
                        }
                        this.setState({courses: currentCourses, editMode: false});
                    }

                    
                })
            } else {
                currentCourses.push(newCourse);
                this.setState({courses: currentCourses});
            }
            
           
        }

        const deleteCourse = (courseName) => {
            const coursesList = [...this.state.courses];
            const newList = []
            coursesList.forEach(course => {
                if (course.name !== courseName) {
                    newList.push(course);
                }
            })
            this.setState({courses: newList});
        }
        const editCourse = (courseId) => {
            let courseToEdit = {
                name: '',
                description: ''
            }
            this.state.courses.forEach(course => {
                if (course.id === courseId) {
                    courseToEdit = {
                        name: course.name,
                        description: course.description,
                        id: courseId
                    }
                }
                this.setState({courseToEdit: courseToEdit, editMode: true})
            })
        }

        return (
           <Aux>
                <CourseCreate click={addCourse}
                              courseData={this.state.courseToEdit}
                              editMode={this.state.editMode}/>
                <CourseList courseInfo={this.state.courses}
                            onDelete={deleteCourse}
                            onEdit={editCourse}/>
                <div>Course Create</div>
           </Aux>
        );
    }
}

export default CourseBuilder;