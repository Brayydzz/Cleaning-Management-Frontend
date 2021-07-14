import React, { useContext } from 'react'
import { stateContext } from '../stateReducer';
import Login from './Login';

const IncomingBookings = () =>
{
  const { token, user } = useContext(stateContext);
  return (
    <div>
      {token ? <h1>Hello {user().first_name + " " + user().last_name}</h1> : <Login />}
    </div>
  )
}



export default IncomingBookings
