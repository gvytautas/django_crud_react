import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

function Retrieve(id, setCode, setColor, setCreateDate, setLastUpdate) {
  let username = "username";
  let password = "password";
  fetch(`/api/register/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setCode(data.code);
      setColor(data.color);
      setCreateDate(data.create_date);
      setLastUpdate(data.last_update);
    })
    .catch((error) => {
      alert(error);
    });
}

export default function RetrieveForm() {
  const [id, setId] = useState("");
  const [code, setCode] = useState("");
  const [color, setColor] = useState("");
  const [createDate, setCreateDate] = useState("");
  const [lastUpdate, setLastUpdate] = useState("");
  return (
    <Form>
      <Form.Group>
        <Form.Label>ID</Form.Label>
        <Form.Control
          type="text"
          onChange={(event) => setId(event.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        type="button"
        onClick={() =>
          Retrieve(id, setCode, setColor, setCreateDate, setLastUpdate)
        }
      >
        Retrieve
      </Button>
      <br></br>
      Code : {code}
      <br></br>
      Color : {color}
      <br></br>
      Create Date : {createDate}
      <br></br>
      Last Update : {lastUpdate}
    </Form>
  );
}
