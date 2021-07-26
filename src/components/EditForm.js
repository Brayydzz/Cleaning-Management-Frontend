import { Form } from "../Styled"
import validator from "validator"
import { useContext } from "react"
import { stateContext } from "../stateReducer"




const EditForm = ({submit, handleChange, formData}) => {

    const {dispatch} = useContext(stateContext)

    const setErrorMessage = (error) => {
        dispatch({type: "setError", error: error})
    }

    const validateInputs = (e) => {
        e.preventDefault()
        // First name
        if (validator.isEmpty(formData.first_name)){
            setErrorMessage("First name can't be blank")
            return false
        }
        if (!validator.isAlpha(formData.first_name)){
            setErrorMessage("First name must only contain alpha characters")
            return false
        }
        // Last name
        if (validator.isEmpty(formData.last_name)){
            setErrorMessage("Last name can't be blank")
            return false
        }
        if (!validator.isAlpha(formData.last_name)){
            setErrorMessage("Last name must only contain alpha characters")
            return false
        }
        // Email
        if (!validator.isEmail(formData.email)){
            setErrorMessage("Email must be a valid Email")
            return false
        }
        // Phone Number
        if (validator.isAlpha(formData.phone_number)){
            setErrorMessage("Phone number must only contain numbers")
            return false
        }
        if (validator.isEmpty(formData.phone_number)){
            setErrorMessage("Phone number must not be empty")
            return false
        }
        // Street Number
        if (validator.isAlpha(formData.street_number)){
            setErrorMessage("Street Number must be a number")
            return false
        }
        if (validator.isAlpha(formData.street_number)){
            setErrorMessage("Street Number must not be empty")
            return false
        }
        // Street Address
        if (validator.isEmpty(formData.street_address)){
            setErrorMessage("Street name must not be blank")
            return false
        }
        if (!validator.isAlpha(formData.street_address)){
            setErrorMessage("Street name must only contain alpha characters")
            return false
        }
        // Suburb
        if (validator.isEmpty(formData.suburb)){
            setErrorMessage("Suburb name must not be blank")
            return false
        }
        if (!validator.isAlpha(formData.suburb)){
            setErrorMessage("Suburb must only contain alpha characters")
            return false
        }
        // Post code
        if (validator.isAlpha(formData.postcode)){
            setErrorMessage("Postcode must be a number")
            return false
        }
        if (validator.isEmpty(formData.postcode)){
            setErrorMessage("Postcode must not be empty")
            return false
        }
        // State
        if (validator.isEmpty(formData.state)){
            setErrorMessage("State must not be blank")
            return false
        }
        if (!validator.isAlpha(formData.state)){
            setErrorMessage("State must only contain alpha characters")
            return false
        }

        return true

    }

    return (
        <Form onSubmit={(e) => {if (validateInputs(e)) submit(e)}}>
        <label htmlFor="first_name">First Name:</label>
        <input id="first_name" type="text" onChange={handleChange} value={formData.first_name}></input>

        <label htmlFor="last_name">Last Name:</label>
        <input id="last_name" type="text" onChange={handleChange} value={formData.last_name}></input>

        <label htmlFor="email">Email Address:</label>
        <input id="email" type="text" onChange={handleChange} value={formData.email}></input>

        <label htmlFor="phone_number">Phone Number:</label>
        <input id="phone_number" type="text" onChange={handleChange} value={formData.phone_number}></input>

        <label htmlFor="street_number">Street Number:</label>
        <input id="street_number" type="text" onChange={handleChange} value={formData.street_number}></input>
        
        <label htmlFor="unit_number">Unit Number:</label>
        <input id="unit_number" type="text" onChange={handleChange} value={formData.unit_number}></input>
        
        <label htmlFor="street_address">Street Name:</label>
        <input id="street_address" type="text" onChange={handleChange} value={formData.street_address}></input>

        <label htmlFor="suburb">Suburb: </label>
        <input id="suburb" type="text" onChange={handleChange} value={formData.suburb}></input>

        <label htmlFor="postcode">Postcode:</label>
        <input id="postcode" type="text" onChange={handleChange} value={formData.postcode}></input>

        <label htmlFor="state">State:</label>
        <input id="state" type="text" onChange={handleChange} value={formData.state}></input>

        <button type="submit">Submit</button>
  </Form>
    )
}

export default EditForm
