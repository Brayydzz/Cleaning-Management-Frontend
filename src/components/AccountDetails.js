import { useEffect, useContext, useState } from "react"
import { stateContext } from "../stateReducer"
import { AuthFetchRequest } from "../helperFunctions"

const AccountDetails = ({setRoute, setContactInfo}) => {
  const { currentUser, token } = useContext(stateContext)
  const [user, setUser] = useState(null)

  useEffect(() => {
    AuthFetchRequest(`/users/${currentUser().id}`, token).then(data => setUser(data))
  }, [currentUser, token])


  return (
    <div>
      <h1>Account Details</h1>
      <button onClick={() => {setContactInfo(user.user_data); setRoute("editAccount")}}>Edit Details</button>
      { user &&
      <>
        <h3>First Name: {user.user_data.contact_information.first_name}</h3>
        <h3>Last Name: {user.user_data.contact_information.last_name}</h3>
        <p>Email: {user.user_data.contact_information.email}</p>
        <p>Address: {user.user_data.address}</p>
      </>
      }
    </div>
  )
}

export default AccountDetails
