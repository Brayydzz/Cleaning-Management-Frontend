import React, { useEffect, useState, useContext } from "react"
import { stateContext } from "../stateReducer"
import { AuthFetchRequest } from "../helperFunctions"
import { DashCard, DashCardContain } from "../Styled"

const IncomingBookings = () => {
  const { services, token } = useContext(stateContext)
  const [bookings, setBookings] = useState([])
  const { dispatch } = useContext(stateContext)

  const setModal = (data) => {
    dispatch({
      type: "setModalOpen",
      modalOpen: true,
      modalData: data,
      modalType: "bookings"
    })
  }


  const deletePost = (booking) => {
    let conf = window.confirm("Are you sure you want to delete?")

    if (conf) {
      AuthFetchRequest(`/bookings/${booking.id}`, token, "DELETE").then(
        (method) => {
          
            setBookings(bookings.filter((b) => b.id !== booking.id))
          
        }
      )
    }
  }

  useEffect(() => {
    AuthFetchRequest("/bookings", token).then((data) => setBookings(data)) 
  }, [token])
  return (
    <div>
      <h1>Incoming booking</h1>
      <DashCardContain>
        {bookings.length > 0 &&
          bookings.map((booking) => (
            <DashCard key={booking.id}>
              <h2>Name</h2>
              <p>{`${booking.first_name} ${booking.last_name}`}</p>
              <h2>Email</h2>
              <p>{booking.email}</p>
              <h2>Service</h2>
              <p>
                {
                  services.filter(
                    (service) => service.id === booking.service_type_id
                  )[0].name
                }
              </p>
              <button onClick={() => deletePost(booking)}>Delete</button>
              <button onClick={() => setModal(booking, "bookings", dispatch)}>View Booking</button>
            </DashCard>
          ))}
      </DashCardContain>
    </div>
  )
}

export default IncomingBookings
