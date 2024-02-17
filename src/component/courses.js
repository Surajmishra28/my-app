import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
const Courses = (course) => {
  return (
    <Card>
      <CardBody>
        <CardSubtitle className="font-weight-bold">{course.title}</CardSubtitle>
        <CardText>{course.description}</CardText>
        <span className="d-block text-center fw-bolder">Java Course</span>
        <span className="d-block text-center pb-3">This is demo course</span>
        <Container className="text-center">
          <Button color="danger">Delete</Button>
          <Button color="warning ms-3">Update</Button>
        </Container>
      </CardBody>
    </Card>
  );
};

export default Courses;
