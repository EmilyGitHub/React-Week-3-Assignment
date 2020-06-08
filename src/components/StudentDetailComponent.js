import React from 'react';
import { Card, Breadcrumb, BreadcrumbItem, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


function StudentDetail ({students}) {
    return (
       <div>
           <h2>User ID</h2>
       </div>
    );
}

function StudentDetail(props) {

    const directory = props.students.map((student) => {
        return (
            <div key={student.id} className="col-md-5 m-1">
                <RenderDirectoryItem student={student} />
            </div>
        );
    })

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Directory</BreadcrumbItem>
                    </Breadcrumb>
                    <h2>Directory</h2>
                    <hr />
                </div>
            </div>
            <div className="row">
                {directory}
            </div>
        </div>
    );
}

export default Directory;

/*class UserDetailComponent extends Component(props) {
        return (
            <div>
                {props.match.params.userId}
            </div>
        )
    }

export default UserDetailComponent*/


