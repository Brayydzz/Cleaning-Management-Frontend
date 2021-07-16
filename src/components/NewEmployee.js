import { useState, useContext } from "react";
import { AuthFetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import ContactForm from "./ContactForm";

<<<<<<< HEAD
const NewEmployee = () => {
  const { token } = useContext(stateContext);
=======
const NewEmployee = ({setRoute}) => {

    const {token} = useContext(stateContext)
>>>>>>> 57cd92b8a4bfd4c9cf86bfabb1c252422b0cc941
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
<<<<<<< HEAD
    e.preventDefault();
    AuthFetchRequest("/signup", token, "POST", employee);
  };

  return (
    <>
      <h1>New Employee</h1>
      <ContactForm props={(handleChange, submit)} />
=======
    e.preventDefault()
    AuthFetchRequest("/signup", token, "POST", employee)
    setRoute("employees")
    console.log("Post")
  }

  return (
    <>
        <h1>New Employee</h1>
      <ContactForm {...{handleChange, submit}}/>
>>>>>>> 57cd92b8a4bfd4c9cf86bfabb1c252422b0cc941
    </>
  );
};

export default NewEmployee;

// email, street_address, street_number, unit_number ,suburb, state, postcode, first_name, last_name, phone_number
