import { useContext } from "react"
import { AuthFetchRequest } from "../helperFunctions"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain, Button } from "../Styled"

const AllClients = ({ handleClick, setRoute, setContactInfo }) => {
  const { token, clients, dispatch } = useContext(stateContext)

  const setModal = (data) => {
    dispatch({
      type: "setModalOpen",
      modalOpen: true,
      modalData: data,
      modalType: "clients",
    })
  }


  const deleteClient = (client) => {
    let conf = window.confirm("Are you sure you want to delete?")

    if (conf) {
      AuthFetchRequest(`/clients/${client.id}`, token, "DELETE").then(
        (method) => {
          if (method) {
            // eslint-disable-next-line
            dispatch({
              type: "setClients",
              clients: clients.filter(
                (obj) => obj.client_data.client.id !== client.id
              ),
            })
          }
        }
      )
    }
  }

  return (
    <div>
      <h1>All Clients</h1>
      <Button id="newClient" onClick={handleClick}>
        Add new Client
      </Button>
      <DashCardContain>
        {clients.length > 0 &&
          clients.map(({ client_data }) => (
            <DashCard key={client_data.client.id}>
              <h2>Name: </h2>
              <p>{`${client_data.contact_information.first_name} ${client_data.contact_information.last_name}`}</p>
              <h2>Email: </h2>
              <p>{client_data.contact_information.email}</p>
              <h2>Phone: </h2>
              <p>{client_data.contact_information.phone_number}</p>
              <Button onClick={() => deleteClient(client_data.client)}>
                Delete
              </Button>
              <Button
                onClick={() => {
                  setContactInfo(client_data)
                  setRoute("editClient")
                }}
              >
                Edit
              </Button>
              <Button onClick={() => setModal(client_data, "clients", dispatch)}>View Client</Button>
            </DashCard>
          ))}
      </DashCardContain>
    </div>
  )
}

export default AllClients
