import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Delete(id) {
  let username = "username";
  let password = "password";
  fetch(`/api/register/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    },
  }).catch((error) => {
    alert(error);
  });
}

export default function DeleteForm() {
  const [id, setId] = useState("");
  return (
    <Form>
      <Form.Group>
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => setId(event.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={() => Delete(id)}>
        Delete
      </Button>
    </Form>
  );
}
