import React from "react";
import { Form, Button } from "react-bootstrap";

function Create(event) {

    fetch('/api/register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

export default function CForm(props) {
    return (
        <Form>
          <Form.Group>
            <Form.Label>Code</Form.Label>
            <Form.Control type="text" placeholder="XXX000" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Color</Form.Label>
            <Form.Control type="text" placeholder="white" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(event) => Create(event)}>
            Create
          </Button>
        </Form>
    );
}