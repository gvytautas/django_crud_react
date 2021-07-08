import React from "react";
import { Form, Button } from "react-bootstrap";

function Login(event) {
  let username = "username";
  let password = "password";
  fetch("/api-auth/login/", {
    method: "POST",
    headers: new Headers({
      Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    }),
  }).then((response) => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}

export default function LoginForm(props) {
  return (
    <Form>
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(event) => Login(event)}>
        Login
      </Button>
    </Form>
  );
}
