import { useState, useContext } from "react";
import { AuthFetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import ContactForm from "./ContactForm";

const NewEmployee = ({ setRoute }) => {
  const { token, dispatch } = useContext(stateContext)
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
    AuthFetchRequest("/signup", token, "POST", employee).then((data) => {
        if (data.error) {   
            dispatch({
                type: "setError",
                error: "Email already exists"
            })
        } else {
            dispatch({
              type: "addEmployee",
              employee: data,
            })
            dispatch({
                type: "setMessage",
                message: "Employee Added"
            })
            setRoute("employees")
        }
    })
    .catch(err => dispatch({
        type: "setError",
        error: err
    }))
  }

  return (
    <div>
      <h1>New Employee</h1>
      <ContactForm {...{ handleChange, submit, employee }} />
    </div>
  );
};

export default NewEmployee;

// email, street_address, street_number, unit_number ,suburb, state, postcode, first_name, last_name, phone_number
