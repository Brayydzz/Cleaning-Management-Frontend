import EditForm from "./EditForm"
import { useContext } from "react"
import { stateContext } from "../stateReducer"
import { AuthFetchRequest } from "../helperFunctions"

const EditAccount = ({ formData, setRoute, setFormData, contactInfo}) => {
    const { token, currentUser, dispatch } = useContext(stateContext)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };    
    
      const submit = (e) => {
        e.preventDefault();
        AuthFetchRequest(`/users/${contactInfo.user.id}`, token, "PATCH", formData).then((data) => {
          console.log(data);
          setRoute("accountDetails");
        });
      };
    return (

        
        <>
            <h1>EDIT ACCOUNT</h1>
            <EditForm {...{ submit, formData, handleChange }} />
        </>
    )
}

export default EditAccount
