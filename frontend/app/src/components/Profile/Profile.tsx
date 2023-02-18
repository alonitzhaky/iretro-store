import React, { useEffect } from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getUserProfileAsync } from './profileSlice';
import { SERVER, webColor } from '../../env';

const Profile = () => {
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getUserProfileAsync())

    }, [])

    const { first_name, last_name, username, admin, email, image, address, phone_number } = useAppSelector((state) => state.profile)
    return (
        <div className='text-center'>
            <h1 style={{ color: webColor }}>
                User Profile
            </h1>
            <hr />
            <Card className='d-flex justify-content-center'>
                <Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <Row>
                                <Col xs={6}><strong>Name:</strong></Col>
                                <Col>{first_name} {last_name}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col xs={6}><strong>Username:</strong></Col>
                                <Col>{username}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col xs={6}><strong>Phone Number:</strong></Col>
                                <Col>{phone_number}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col xs={6}><strong>Email Address:</strong></Col>
                                <Col>{email}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col xs={6}><strong>Shipping Address:</strong></Col>
                                <Col>{address}</Col>
                            </Row>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Row>
                                <Col xs={6}><strong>Profile Picture:</strong></Col>
                                <Col>
                                    <img className='profile-image' style={{ maxWidth: "200px", maxHeight: "400px" }} src={SERVER + image} />
                                </Col>
                            </Row>
                        </ListGroup.Item>
                        {/* Present if the user has admin privileges. */}
                        <ListGroup.Item>
                            {admin === true &&
                                <Row>
                                    <Col xs={6}><strong>Administrator Privileges:</strong></Col>
                                    <Col>{String(admin)}</Col>
                                </Row>
                            }
                        </ListGroup.Item>
                        <br />
                        <div>
                            <Link to={'/profile/update'}>
                                <Button style={{ color: webColor }} variant="primary" type="submit" className='btn btn-light'>Click Here to Update Information</Button>
                            </Link>
                        </div>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Profile