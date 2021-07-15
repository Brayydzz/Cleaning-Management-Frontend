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
                    {users.length > 0 && 
                        users.map((user) => (
                            <DashCard>
                                {/* <p>{user.contact_information.first_name}</p> */}
                            </DashCard>
                        ))}
            </DashCardContain>
        </div>
    )
}

export default Employees
