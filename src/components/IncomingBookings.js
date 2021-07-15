import React, { useEffect, useState, useContext } from "react"
import { stateContext } from "../stateReducer"
import { AuthFetchRequest } from "../helperFunctions";

const IncomingBookings = () => {
  const {services, token} = useContext(stateContext)
  const [bookings, setBookings] = useState([]);


  const deletePost = (booking) => {

    let conf = window.confirm("Are you sure you want to delete?")
    
    if (conf) {
      setBookings(bookings.filter(b => b.id != booking.id))
      AuthFetchRequest(`/bookings/${booking.id}`, token, "DELETE")
    }
  }

  useEffect(() => {
    AuthFetchRequest("/bookings", token).then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h1>Incoming booking</h1>
      {bookings.length > 0 &&
        bookings.map((booking) => (
          <div style={{backgroundColor:"grey", border:"solid black 2px"}}>
            <h2>Name</h2>
            <p>{`${booking.first_name} ${booking.last_name}`}</p>
            <h2>Email</h2>
            <p>{booking.email}</p>
            <h2>Phone Number</h2>
            <p>{booking.phone_number}</p>
            <h2>Description</h2>
            <p>{booking.body}</p>
            <h2>Service</h2>
            <p>{services.filter(service => service.id == booking.service_type_id)[0].name}</p>
            <button onClick={() => deletePost(booking)}>Delete</button>
          </div>
        ))}
    </div>
  );
};

export default IncomingBookings;
