import { useEffect, useContext, useState } from "react"
import { stateContext } from "../stateReducer"
import { AuthFetchRequest } from "../helperFunctions"

const AccountDetails = () => {
  const { currentUser, token } = useContext(stateContext)
  const [user, setUser] = useState(null)

  useEffect(() => {
    AuthFetchRequest(`/users/${currentUser().id}`, token).then(data => setUser(data))
  }, [])


  return (
    <div>
      <h1>Account Details</h1>
      <button>Edit Details</button>
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
