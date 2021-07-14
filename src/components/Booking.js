import { Form } from "../Styled"

const Booking = () => {
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
                    <option>SERVICE 1</option>
                    <option>SERVICE 2</option>
                    <option>SERVICE 3</option>
                </select>
                <button type="submit">Submit</button>
            </Form>   
        </>
    )
}

export default Booking
