import React from "react";
import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import DataTable from "react-data-table-component";

function Retrieve(setData) {
  let username = "username";
  let password = "password";
  fetch(`/api/register`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      //Authorization: `Basic ${base64.encode(`${username}:${password}`)}`,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      alert(error);
    });
}

export default function ListRetrieveForm() {
  const [data, setData] = useState([]);
  const columns = [
    { name: "ID", selector: "id", sortable: true },
    { name: "Code", selector: "code", sortable: true },
    { name: "Color", selector: "color", sortable: true },
    { name: "Create Date", selector: "create_date", sortable: true },
    { name: "Last Update", selector: "last_update", sortable: true },
  ];
  return (
    <Form>
      <Button variant="primary" type="button" onClick={() => Retrieve(setData)}>
        Retrieve All
      </Button>
      <DataTable title="Data" columns={columns} data={data} />
    </Form>
  );
}
