import React from "react"
import { Button, Container, Form, FormGroup, Input } from "reactstrap"
const AddCoures=()=>{
    return(
        <div>
            <h1 className="text-center my-3">Fill course Details</h1>
            <Form>
                <FormGroup>
                    <label for ="userId">Course Id</label>
                    <Input type="text"
                     placeholder="Enter here" 
                     name="userId"
                     id="userId"
             />
                </FormGroup>
                <FormGroup>
                    <label for="title">course Title</label>
                    <Input type="text" placeholder="Enter title here" id="title" />
                </FormGroup>
                <FormGroup>
                    <label for ="description"> Course Description</label>
                    <Input type="text"
                     placeholder="Enter description here" 
                     id="description" 
                     />
                </FormGroup>
                <Container  className="text-center">
                    <Button  color="success">
                        AddCoures
                    </Button>
                    <Button color="warinig">
                        Clear
                    </Button>
                </Container>
            </Form>
        </div>
        
    );
};
export default AddCoures;

