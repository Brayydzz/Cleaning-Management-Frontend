import { useState, useContext, useEffect } from "react"
import { AuthFetchRequest } from "../helperFunctions"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain } from "../Styled"

const Employees = ({handleClick}) => {

    const {token, currentUser} = useContext(stateContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        AuthFetchRequest("/users", token).then(data => {
            setUsers(data)
        })
    }, [])

    const deleteUser = (user) => {
        let conf = window.confirm("Are you sure you want to delete?")
        
        if (conf) {
            AuthFetchRequest(`/users/${user.id}`, token, "DELETE")
            .then(method => {
            if (method) {
                // eslint-disable-next-line
                setUsers(users.filter(obj => obj.user_data.user.id != user.id))
            }
            })
        }
    }

    return (
        <div>
            <h1>Employees</h1>
            <button onClick={handleClick} id="newEmployee">New Employee</button>
            <DashCardContain>
                    {users.length > 0 && 
                        users.map(({user_data}) => (
                            <DashCard key={user_data.user.id}>
                                <p>{`Name: ${user_data.contact_information.first_name} ${user_data.contact_information.last_name}`}</p>
                                <p>{`Email: ${user_data.contact_information.email}`}</p>
                                <p>{`Phone: ${user_data.contact_information.phone_number}`}</p>
                                <p>{`Address: ${user_data.address.street_number}, ${user_data.address.street_address}, ${user_data.address.suburb}, ${user_data.address.postcode}, ${user_data.address.state}`}</p>
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
