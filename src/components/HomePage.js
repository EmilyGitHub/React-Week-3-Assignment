import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';
import { STUDENTS } from '../shared/studentsarray';
function RenderCard(props) {
  return (
    <Card>
      <CardBody>
        <Link to={`/students/${props.student.id}`}>
          <CardTitle>{props.student.name}</CardTitle>
        </Link>
      </CardBody>
      <button onClick={() => props.delete(props.student.id)}>Delete </button>
    </Card>
  );
}
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      students: STUDENTS,
    };
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent(id) {
    this.setState({
      students: this.state.students.filter((student) => student.id !== id),
    });
  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          {this.state.students.map((student) => {
            return <RenderCard student={student} delete={this.deleteStudent} />;
          })}
        </div>
      </div>
    );
  }
}
export default Home;