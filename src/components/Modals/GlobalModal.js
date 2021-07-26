import Modal from "react-modal"
import { useContext } from "react"
import { stateContext } from "../../stateReducer"
import BookingModal from "./BookingModal"
import EmployeeModal from "./EmployeeModal"
import ClientModal from "./ClientModal"
import JobModal from "./JobModal"
import FlashMessage from "../FlashMessage";

const GlobalModal = () => {
  const { dispatch, modalOpen, modalType } = useContext(stateContext)
  
  const renderModal = () => {
    switch(modalType) {
        case "bookings": {
            return <BookingModal/>
        }
        case "employees": {
          return <EmployeeModal />
        }
        case "clients": {
          return <ClientModal />
        }
        case "jobs": {
          return <JobModal />
        }
        default: 
          <> </>
    }
  }

  return (
    <Modal
      isOpen={modalOpen}
      onRequestClose={() => dispatch({
        type: "setModalOpen",
        modalOpen: false,
      })}
      ariaHideApp={false}
    >
        {
          <FlashMessage />  
        }
        {renderModal()}
    </Modal>
  )
}

export default GlobalModal
