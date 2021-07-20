import { useState, useContext, useEffect } from "react"
import { AuthFetchRequest } from "../helperFunctions"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain } from "../Styled"

const Employees = ({ handleClick }) => {
  const [users, setUsers] = useState([])

  const { token, currentUser, dispatch, employees } = useContext(stateContext)

  const setModal = (data) => {
    dispatch({
      type: "setModalOpen",
      modalOpen: true,
      modalData: data,
      modalType: "employees",
    })
  }

  

  const deleteUser = (user) => {
    let conf = window.confirm("Are you sure you want to delete?")

    if (conf) {
      AuthFetchRequest(`/users/${user.id}`, token, "DELETE").then((method) => {
        if (method) {
          dispatch({
            type: "setEmployees",
            // eslint-disable-next-line
            employees: employees.filter(
              (obj) => obj.user_data.user.id != user.id
            ),
          })
        }
      })
    }
  }

  return (
    <div>
      <h1>Employees</h1>
      <button onClick={handleClick} id="newEmployee">
        New Employee
      </button>
      <DashCardContain>
        {employees.length > 0 &&
          employees.map(({ user_data }) => (
            <DashCard key={user_data.user.id}>
              <h2>Name: </h2>
              <p>{`${user_data.contact_information.first_name} ${user_data.contact_information.last_name}`}</p>
              <h2>Email: </h2>
              <p>{user_data.contact_information.email}</p>
              <h2>Phone: </h2>
              <p>{user_data.contact_information.phone_number}</p>
              {currentUser().user_id != user_data.user.id && (
                <button onClick={() => deleteUser(user_data.user)}>
                  Delete User!
                </button>
              )}
              <button onClick={() => setModal(user_data)}>View Employee</button>
            </DashCard>
          ))}
      </DashCardContain>
    </div>
  )
}

export default Employees
