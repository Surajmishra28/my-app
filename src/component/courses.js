import React from 'react';
import {
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    CardFooter,
    Button,
    Container,
}
    from "reactstrap";
const courses=(course)=>{
    return (
        <Card>
            <CardBody>
                <CardSubtitle className='font-weight-bold'>
                {course.title}
                </CardSubtitle>
                <CardText>{course.description}</CardText>
                <Container className="text-centere">
                    <Button color="danger">Delete</Button>
                    <Button color='waring ml-3'>Update</Button>
                </Container>
            </CardBody>
        </Card>
    )

}

export default courses;