import { Form } from "../Styled"


const EditForm = ({submit, handleChange, formData}) => {
    return (
        <Form onSubmit={submit}>
        <label htmlFor="first_name">First Name:</label>
        <input id="first_name" type="text" onChange={handleChange} value={formData.first_name}></input>

        <label htmlFor="last_name">Last Name:</label>
        <input id="last_name" type="text" onChange={handleChange} value={formData.last_name}></input>

        <label htmlFor="email">Email Address:</label>
        <input id="email" type="text" onChange={handleChange} value={formData.email}></input>

        <label htmlFor="phone_number">Phone Number:</label>
        <input id="phone_number" type="text" onChange={handleChange} value={formData.phone_number}></input>

        <label htmlFor="street_address">Street Name:</label>
        <input id="street_address" type="text" onChange={handleChange} value={formData.street_address}></input>

        <label htmlFor="street_number">Street Number:</label>
        <input id="street_number" type="text" onChange={handleChange} value={formData.street_number}></input>

        <label htmlFor="unit_number">Unit Number:</label>
        <input id="unit_number" type="text" onChange={handleChange} value={formData.unit_number}></input>

        <label htmlFor="suburb">Suburb: </label>
        <input id="suburb" type="text" onChange={handleChange} value={formData.suburb}></input>

        <label htmlFor="state">State:</label>
        <input id="state" type="text" onChange={handleChange} value={formData.state}></input>

        <label htmlFor="postcode">Postcode:</label>
        <input id="postcode" type="text" onChange={handleChange} value={formData.postcode}></input>

        <button type="submit">Submit</button>
  </Form>
    )
}

export default EditForm
