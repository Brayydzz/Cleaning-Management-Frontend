import { useContext, useState } from "react";
import { AuthFetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import ContactForm from "./ContactForm";

const NewClient = ({ setRoute, setReloadClients }) => {
  const { token, dispatch } = useContext(stateContext);
  const [client, setClient] = useState({
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
    setClient({ ...client, [e.target.id]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    AuthFetchRequest("/clients", token, "POST", client)
      .then((data) => {
        setRoute("clients");
        dispatch({ type: "setMessage", message: "Client Added" });
        dispatch({ type: "addClient", client: data });
      })
      .catch((err) => dispatch({ type: "setError", error: err }));
  };

  return (
    <div>
      <h1>New Client!</h1>
      <ContactForm {...{ handleChange, submit }} employee={client} />
    </div>
  );
};

export default NewClient;
