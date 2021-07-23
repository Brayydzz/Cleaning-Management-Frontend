import { useContext } from "react"
import { stateContext } from "../../stateReducer"

const BookingModal = () => {

    const {dispatch, modalData, services} = useContext(stateContext)
    return (
        <>
            <h2>Name</h2>
            <p>{`${modalData.first_name} ${modalData.last_name}`}</p>
            <h2>Email</h2>
            <p>{modalData.email}</p>
            <h2>Phone Number</h2>
            <p>{modalData.phone_number}</p>
            <h2>Description</h2>
            <p>{modalData.body}</p>
            <h2>Services: </h2>
            <p>
            {
                Object.keys(modalData).length > 0 && services.filter(
                (service) => service.id === modalData.service_type_id
                )[0].name
            }
            </p>
            <button onClick={() => dispatch({
                type: "setModalOpen",
                modalOpen: false
            })}>Close</button>
        </>
    )
}

export default BookingModal
