import React, { Component } from 'react';
import { STUDENTS } from '../shared/studentsarray';
import Home from './components/HomePage';

class StudentsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: STUDENTS
        };
    }

    render() {

    const HomePage= () => {
        return (
            <Home 
            students={this.state.students.filter(student => student.id)[0]}
            />
        );
    }

    return (
        <StudentInfo
            students={this.state.students.filter(student => student.id === +match.params.studentId)[0]}
        />
    );}
}


export default StudentsPage