import { useState, useContext } from "react";
import { AuthFetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import ContactForm from "./ContactForm";

const NewEmployee = ({setRoute}) => {

    const {token} = useContext(stateContext)
  const [employee, setEmployee] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    street_address: "",
    street_number: "",
    unit_number: "",
    suburb: "",
    state: "",
    postcode: "",
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault()
    AuthFetchRequest("/signup", token, "POST", employee)
    setRoute("employees")
    console.log("Post")
  }

  return (
    <>
        <h1>New Employee</h1>
      <ContactForm {...{handleChange, submit}}/>
    </>
  );
};

export default NewEmployee;

// email, street_address, street_number, unit_number ,suburb, state, postcode, first_name, last_name, phone_number
