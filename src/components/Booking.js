import { Form } from "../Styled"
import { useContext, useState, useEffect } from "react"
import { stateContext } from "../stateReducer"
import { FetchRequest } from "../helperFunctions"
import { useHistory } from "react-router"
import validator from "validator"

const Booking = () => {
  const { services, dispatch } = useContext(stateContext)
  const history = useHistory()
  const [booking, setBooking] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    service_type_id: "",
    body: "",
  })

  const setErrorMessage = (message) => {

    dispatch({ type: "setError", error: message })
  }

  const validateInputs = () => {
    if (validator.isEmpty(booking.first_name)) {
      setErrorMessage("First name can't be empty")
      return false
    }
    if (!validator.isEmail(booking.email)) {
      setErrorMessage("Invalid Email")
      return false
    }
    if (validator.isEmpty(booking.body)) {
      setErrorMessage("Body can't be empty")
      return false
    }
    return true
  }
  useEffect(() => {
    services.length > 0 &&
      setBooking({
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        body: "",
        service_type_id: services[0].id,
      })
  }, [services])

  const submit = async (event) => {

    event.preventDefault()
    if (validateInputs()) {
      FetchRequest("/bookings", "POST", booking)
      setErrorMessage("")
      dispatch({ type: "setMessage", message: "Form submitted, thanks!" })

      // Change this later to redirect to a Thank you page
      history.push("/")
    }
  }


  const handleChange = (e) => {
    // console.log([e.target.id])
    setBooking({ ...booking, [e.target.id]: e.target.value })
  }

  return (
    <>
      <h1>Booking Form</h1>

      <Form id="bookingSubmit" onSubmit={submit}>
        <label htmlFor="first_name">First Name: </label>
        <input
          id="first_name"
          type="text"
          onChange={handleChange}
          value={booking.first_name}
        ></input>

        <label htmlFor="last_name">Last Name: </label>
        <input
          id="last_name"
          type="text"
          onChange={handleChange}
          value={booking.last_name}
        ></input>

        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          onChange={handleChange}
          value={booking.email}
        ></input>

        <label htmlFor="phone_number">Phone Number: </label>
        <input
          id="phone_number"
          type="text"
          onChange={handleChange}
          value={booking.phone_number}
        ></input>

        <label htmlFor="body">Description: </label>
        <textarea
          id="body"
          type="text"
          onChange={handleChange}
          value={booking.body}
        ></textarea>

        <label>Service Type: </label>
        <select
          id="service_select"
          onChange={(e) =>
            setBooking({ ...booking, service_type_id: e.target.value })
          }
          value={booking.service_type_id}
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>
        <button type="submit">Submit</button>
      </Form>
    </>
  )
}

export default Booking
