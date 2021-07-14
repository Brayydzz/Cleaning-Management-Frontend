import React, { useContext } from 'react'
import { stateContext } from '../stateReducer';
import Login from './Login';

const IncomingBookings = () =>
{
  const { token } = useContext(stateContext);
  return (
    <div>
      {token ? <h1>Logged In</h1> : <Login />}
    </div>
  )
}



export default IncomingBookings
