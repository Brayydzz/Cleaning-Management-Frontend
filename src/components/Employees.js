import { useState, useContext, useEffect } from "react"
import { AuthFetchRequest } from "../helperFunctions"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain } from "../Styled"

const Employees = ({handleClick}) => {

    const {token, currentUser, dispatch, employees} = useContext(stateContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        AuthFetchRequest("/users", token).then(data => {
            // setUsers(data)
            dispatch({
                type: "setEmployees",
                employees: data
            })
        })
    }, [])

    const deleteUser = (user) => {
        let conf = window.confirm("Are you sure you want to delete?")
        
        if (conf) {
            AuthFetchRequest(`/users/${user.id}`, token, "DELETE")
            .then(method => {
            if (method) {
                dispatch({
                    type: 'setEmployees',
                    // eslint-disable-next-line
                    employees: employees.filter(obj => obj.user_data.user.id != user.id)
                })
            }
            })
        }
    }

    return (
        <div>
            <h1>Employees</h1>
            <button onClick={handleClick} id="newEmployee">New Employee</button>
            <DashCardContain>
                    {employees.length > 0 && 
                        employees.map(({user_data}) => (
                            <DashCard key={user_data.user.id}>
                                <p>{`Name: ${user_data.contact_information.first_name} ${user_data.contact_information.last_name}`}</p>
                                <p>{`Email: ${user_data.contact_information.email}`}</p>
                                <p>{`Phone: ${user_data.contact_information.phone_number}`}</p>
                                <p>{`Address: ${user_data.address}`}</p>
                                <p>{`Is an Admin? ${user_data.user.is_admin}`}</p>
                                { currentUser().user_id != user_data.user.id &&
                                    <button onClick={() => deleteUser(user_data.user)}>Delete User!</button>
                                }
                            </DashCard>
                        ))}
            </DashCardContain>
        </div>
    )
}

export default Employees
