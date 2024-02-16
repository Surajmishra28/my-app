import React from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
const AddCoures = () => {
  return (
    <div>
      <h1 className="text-center my-3">Fill course Details</h1>
      <Form>
        <FormGroup>
          <label htmlFor="userId">Course Id</label>
          <Input
            type="text"
            placeholder="Enter here"
            name="userId"
            id="userId"
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="title">course Title</label>
          <Input type="text" placeholder="Enter title here" id="title" />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description"> Course Description</label>
          <Input
            type="text"
            placeholder="Enter description here"
            id="description"
          />
        </FormGroup>
        <Container className="text-center">
          <Button color="success">AddCoures</Button>
          <Button color="warinig">Clear</Button>
        </Container>
      </Form>
    </div>
  );
};
export default AddCoures;
