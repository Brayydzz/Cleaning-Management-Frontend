import { useState, useContext, useEffect } from "react"
import { AuthFetchRequest } from "../helperFunctions"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain } from "../Styled"

const Employees = () => {

    const {token} = useContext(stateContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        AuthFetchRequest("/users", token).then(data => {
            setUsers(data)
        })
    }, [])

    return (
        <div>
            <h1>Employees</h1>
            <DashCardContain>
                {console.log(users.length)}
                    {users.length > 0 && 
                        users.map(({user}) => (
                            <DashCard>
                                <p>{`Name: ${user.contact_information.first_name} ${user.contact_information.last_name}`}</p>
                                <p>{`Email: ${user.contact_information.email}`}</p>
                                <p>{`Phone: ${user.contact_information.phone_number}`}</p>
                                <p>{`Address: ${user.address.street_number}, ${user.address.street_address}, ${user.address.suburb}, ${user.address.postcode}, ${user.address.state}`}</p>
                                <p>{`Is an Admin? ${user.user.is_admin}`}</p>
                                <button>Delete User! (IT NOT WORK YET)</button>
                            </DashCard>
                        ))}
            </DashCardContain>
        </div>
    )
}

export default Employees
