import { Form } from "../Styled"
import { useContext } from "react"
import { stateContext } from "../stateReducer"


const Booking = () => {

    const { services } = useContext(stateContext)

    return (
        <>
            <h1>Booking Form</h1>

            <Form>
                <label>First Name: </label>
                <input type='text'></input>

                <label>Last Name: </label>
                <input type='text'></input>

                <label>Email: </label>
                <input type='text'></input>

                <label>Phone Number: </label>
                <input type='text'></input>

                <label>Description: </label>
                <textarea type='text'></textarea>

                <label>Service Type: </label>
                <select>
                    {services.map((service) => (
                        <option key={service.id} value={service.id}>{service.name}</option>
                    ))}
                </select>
                <button type="submit">Submit</button>
            </Form>   
        </>
    )
}

export default Booking
