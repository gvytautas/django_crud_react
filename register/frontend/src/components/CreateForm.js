import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Create(code, color) {
  let username = "username";
  let password = "password";
  fetch("/api/register", {
    method: "POST",
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

export default function CreateForm(props) {
  const [code, setCode] = useState("");
  const [color, setColor] = useState("");
  return (
    <Form>
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
        onClick={() => Create(code, color)}
      >
        Create
      </Button>
    </Form>
  );
}
