import EditForm from "./EditForm";
import { useContext } from "react";
import { stateContext } from "../stateReducer";
import { AuthFetchRequest } from "../helperFunctions";
import { DashCardContain } from "../Styled";

const EditAccount = ({ formData, setRoute, setFormData, contactInfo }) => {
  const { token } = useContext(stateContext);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    AuthFetchRequest(
      `/users/${contactInfo.user.id}`,
      token,
      "PATCH",
      formData
    ).then((data) => {
      setRoute("accountDetails");
    });
  };
  return (
    <div>
      <h1>EDIT ACCOUNT</h1>
      <DashCardContain>
        <EditForm {...{ submit, formData, handleChange }} />
      </DashCardContain>
    </div>
  );
};

export default EditAccount;
