import { useContext, useEffect, useState } from "react";
import { AuthFetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import EditForm from "./EditForm";

const EditClient = ({ formData, setRoute, setFormData, contactInfo }) => {
  const { token, clients, dispatch } = useContext(stateContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    AuthFetchRequest(`/clients/${contactInfo.client.id}`, token, "PATCH", formData).then((data) => {
      console.log(data);
      setRoute("clients");
    });
  };

  return (
    <div>
      <h1>Edit Client!</h1>
      <EditForm {...{ submit, formData, handleChange }} />
    </div>
  );
};

export default EditClient;
