import { useContext } from "react"
import { stateContext } from "../../stateReducer"


const JobModal = () => {

    const {dispatch, modalData, services} = useContext(stateContext)
    const {address, address_object, client, job, service_type, user} = modalData
    const date = new Date(parseFloat(job.due_data)).toString()

    return (
        <>
            <h2>Client Name:</h2>
            <p>{`${client.client_data.contact_information.first_name}`} {`${client.client_data.contact_information.last_name}`}</p>
            <h2>Address:</h2>
            <p>{address}</p>
            <h2>Service Type:</h2>
            <p>{service_type.name}</p>
            <h2>Employee</h2>
            <p>{user.user_data ? user.user_data.contact_information.first_name : user}</p>
            <h2>Time of Job</h2>
            <p>{date}</p>
            <button onClick={() => dispatch({
                type: "setModalOpen",
                modalOpen: false
            })}>Close</button>
        </>
    )
}

export default JobModal
