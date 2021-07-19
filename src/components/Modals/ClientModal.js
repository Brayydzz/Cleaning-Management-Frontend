import { useContext } from "react"
import { stateContext } from "../../stateReducer"

const ClientModal = () => {

    const {dispatch, modalData} = useContext(stateContext)
    const {contact_information, address} = modalData

    return (
        <>
            <h2>Name: </h2>
            <p>{`${contact_information.first_name} ${contact_information.last_name}`}</p>
            <h2>Email: </h2>
            <p>{contact_information.email}</p>
            <h2>Phone: </h2>
            <p>{contact_information.phone_number}</p>
            <h2>Address: </h2>
            <p>{address}</p>
            <button onClick={() => dispatch({
                type: "setModalOpen",
                modalOpen: false
            })}>Close</button>
        </>
    )
}

export default ClientModal
