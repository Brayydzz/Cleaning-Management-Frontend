import Modal from "react-modal"


const BookingModal = ({modalIsOpen, setModalIsOpen, cardData, services}) => {

    return (
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <h2>Name</h2>
              <p>{`${cardData.first_name} ${cardData.last_name}`}</p>
              <h2>Email</h2>
              <p>{cardData.email}</p>
              <h2>Phone Number</h2>
              <p>{cardData.phone_number}</p>
              <h2>Description</h2>
              <p>{cardData.body}</p>
              <h2>Services: </h2>
              <p>
                {
                  services.filter(
                    (service) => service.id == cardData.service_type_id
                  )[0].name
                }
              </p>
            <button onClick={() => setModalIsOpen(false)}>Close</button>
        </Modal>
    )
}

export default BookingModal
