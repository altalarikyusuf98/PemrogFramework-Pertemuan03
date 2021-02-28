import React, { Component, Fragment } from 'react';
import {Container, Row, Col, Form, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./LoginForm.css" ;

class LoginForm extends Component{
    render(){
        return(
            <Fragment>
                <Container>
                    <Row>
                        <Col lg={6} md={6} sm={12} className="p-5 m-auto">
                            <div className="LoginBox p-5">
                                <h2 className ="text-center">Tugas Pertemuan ke-3</h2>
                            <Form className="mt-3">
                                <Form.Group>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Check type="checkbox" label="Remember Me" />
                                </Form.Group>

                                <Button className="btn-block" variant="success" type="submit">
                                    Login
                                </Button>
                                <Button className="btn-block" variant="danger" type="submit">
                                    Cancel
                                </Button>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default LoginForm;