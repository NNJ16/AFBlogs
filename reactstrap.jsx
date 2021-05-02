import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

export default function () {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleName">Name :</Label>
        <Input type="text" name="name" placeholder="Enter your name" />
      </FormGroup>
      <FormGroup>
        <Label for="exampleEmail">Email :</Label>
        <Input type="email" name="email" placeholder="Enter your email" />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password :</Label>
        <Input type="password" name="password" placeholder="Enter a password" />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  );
}
