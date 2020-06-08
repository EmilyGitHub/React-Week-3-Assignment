import React from 'react';
import { Card, CardBody, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderCard({students}) {
    return (
        <Card>
            <Link to={`/students/${students.id}`}>
                <CardBody>
                    <CardTitle>{students.name}</CardTitle>
                </CardBody>
            </Link>
        </Card>
    );
}


function Home({props}) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md m-1">
                        <RenderCard item={props.student.studentId} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.student.studentId} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.student.studentId} />
                    </div>
                    <div className="col-md m-1">
                        <RenderCard item={props.student.studentId} />
                    </div>
                    }
            </div>
        </div>   
    );
        }


export default Home;   