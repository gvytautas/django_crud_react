import React from "react";
import LoginForm from "./LoginForm";
import CreateForm from "./CreateForm";
import RetrieveForm from "./RetrieveForm";
import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";
import ListRetrieveForm from "./ListRetrieveForm";

export default function HomePage(props) {
  if (false) {
    return <LoginForm />;
  } else {
    return (
      <div>
        <CreateForm />
        <RetrieveForm />
        <UpdateForm />
        <DeleteForm />
        <ListRetrieveForm />
      </div>
    );
  }
}
