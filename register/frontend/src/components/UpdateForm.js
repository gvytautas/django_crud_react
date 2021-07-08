import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Update(id, code, color) {
  let username = "username";
  let password = "password";
  fetch(`api/register/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    },
    body: JSON.stringify({ code: code, color: color }),
  })
    .then(() => {
      alert("Success");
    })
    .catch((error) => {
      alert(error);
    });
}

export default function UpdateForm() {
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [color, setColor] = useState("");
  return (
    <Form>
      <Form.Group>
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => setId(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="XXX000"
          onChange={(event) => setCode(event.target.value)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Color</Form.Label>
        <Form.Control
          type="text"
          placeholder="white"
          onChange={(event) => setColor(event.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick={() => Update(id, code, color)}
      >
        Update
      </Button>
    </Form>
  );
}
