import { useContext } from "react";
import { AuthFetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import EditForm from "./EditForm";
import {FormContainer} from "../Styled"

const EditClient = ({ formData, setRoute, setFormData, contactInfo }) => {
  const { token } = useContext(stateContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    AuthFetchRequest(`/clients/${contactInfo.client.id}`, token, "PATCH", formData).then((data) => {
      setRoute("clients");
    });
  };

  return (
    <FormContainer>
      <h1>Edit Client!</h1>
      <EditForm {...{ submit, formData, handleChange }} />
    </FormContainer>
  );
};

export default EditClient;
