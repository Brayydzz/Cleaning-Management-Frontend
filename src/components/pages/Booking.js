import { Form } from "../../Styled"
import { useContext, useState, useEffect } from "react"
import { stateContext } from "../../stateReducer"
import { FetchRequest } from "../../helperFunctions"
import { useHistory } from "react-router"
import validator from "validator"
import { TextArea, BookingImg, BookingForm, InputText, Select } from "./pageStyling";
import { Button } from "../../Styled";
import Footer from "./Footer";

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
    if (validator.isAlpha(booking.phone_number))
    {
      setErrorMessage("Phone Number must not contain characters")
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
    setBooking({ ...booking, [e.target.id]: e.target.value })
  }

  return (
    <>
      <BookingForm>
      <BookingImg src={"images/booking.jpg"} alt="" />
        <Form id="bookingSubmit" onSubmit={submit}>
        <h1>Booking Form</h1>
          <span>
          <label htmlFor="first_name">First Name: </label>
          <InputText
            id="first_name"
            type="text"
            onChange={handleChange}
            value={booking.first_name}
          ></InputText>
          <label htmlFor="last_name">Last Name: </label>
          <InputText
            id="last_name"
            type="text"
            onChange={handleChange}
            value={booking.last_name}
            ></InputText>
          <label htmlFor="email">Email: </label>
          </span>
          <InputText
            id="email"
            type="text"
            onChange={handleChange}
            value={booking.email}
          ></InputText>
          <label htmlFor="phone_number">Phone Number: </label>
          <InputText
            id="phone_number"
            type="text"
            onChange={handleChange}
            value={booking.phone_number}
          ></InputText>
          <label htmlFor="body">Description: </label>
          <TextArea
            id="body"
            type="text"
            onChange={handleChange}
            value={booking.body}
          ></TextArea>
          <label>Service Type: </label>
          <Select
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
          </Select>
          <Button type="submit">Submit</Button>
        </Form>
      </BookingForm>
        <Footer />
    </>
  )
}

export default Booking
