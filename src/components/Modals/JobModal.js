import { useContext, useState, useEffect } from "react"
import { AuthFetchRequest } from "../../helperFunctions"
import { stateContext } from "../../stateReducer"


const JobModal = () => {

    const {dispatch, modalData, services, token} = useContext(stateContext)
    const {address, address_object, client, job, service_type, user} = modalData
    const date = new Date(parseFloat(job.due_data)).toString()
    const [checkIn, setCheckIn] = useState("")
    const [checkOut, setCheckOut] = useState("")

    const handleCheckIn = () => {
        let currentDate = new Date(); 
        AuthFetchRequest(`/jobs/${job.id}/checkin`, token, "POST", {time_in: currentDate}).then(data => {
            dispatch({type: "update job", id: data.job_data.job.id, job_data: data.job_data})
            setCheckIn(currentDate)
        })
    }

    const handleCheckOut = () => {
        let currentDate = new Date();
        AuthFetchRequest(`/jobs/${job.id}/checkout`, token, "POST", {time_out: currentDate}).then(data => {
            dispatch({type: "update job", id: data.job_data.job.id, job_data: data.job_data})
            setCheckOut(currentDate)
        })
    }

    useEffect(() => {
        setCheckOut(job.time_out)
    }, [job])

    useEffect(() => {
        setCheckIn(job.time_in)
    }, [job])

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
            <br/>
            <button onClick={handleCheckIn}>Check In</button>
            {checkIn && <span>: {checkIn.toString()}</span>}
            <br/>
            <button onClick={handleCheckOut}>Check Out</button>
            {checkOut && <span>: {checkOut.toString()}</span>}
        </>
    )
}

export default JobModal
