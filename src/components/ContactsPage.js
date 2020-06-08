import React from 'react';
import { Card } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderCard({student}) {
    return (
        <Card>
            <div>
                <h1>Contact Page</h1>
            </div>
            <div>
                <p>{`Name: ${student.name}`}</p>
                <br />
                <p>{`Phone Number: ${student.phoneNumber}`}</p>
            </div>
            <Link to="/"> Students Page </Link>
            <br />
            <a href="/"> Students Page (anchor tag) </a>
        </Card>
    );

}

export default RenderCard

/*function Contact(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/"> Home </Link></BreadcrumbItem>
                        <BreadcrumbItem active> Contact Us </BreadcrumbItem>
                    </Breadcrumb>
                    <h2> Contact Us </h2>
                    <hr />
                </div>
            </div>

            <div className="row row-content align-items-center">
                <div className="col-sm-4">
                    <h5>Our Address</h5>
                    <address>
                        1 Nucamp Way<br />
                        Seattle, WA 98001<br />
                        U.S.A.
                    </address>
                </div>
                <div className="col">
                    <a role="button" className="btn btn-link" href="tel:+12065551234"><i className="fa fa-phone"></i>{students.phoneNumber}</a>
                    <br />
                    <a role="button" className="btn btn-link" href="mailto:fakeemail@fakeemail.co"><i className="fa fa-envelope-o"></i> campsites@nucamp.co</a>
                </div>
            </div>
        </div>
    );
}

export default Contact*/