import React, { useEffect, useState } from "react";
import { FetchRequest } from "../helperFunctions";

const IncomingBookings = () => {
  const [bookings, setBookings] = useState([]);
  useEffect(() => {
    FetchRequest("/bookings").then((data) => setBookings(data));
  }, []);
  return (
    <div>
      <h1>Incoming booking</h1>
      {bookings &&
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
            <p>{booking.service_type_id}</p>
          </div>
        ))}
    </div>
  );
};


export default IncomingBookings;
