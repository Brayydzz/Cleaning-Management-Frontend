import { useContext, useEffect, useState } from "react"
import { AuthFetchRequest } from "../helperFunctions"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain } from "../Styled"

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
                (obj) => obj.client_data.client.id != client.id
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
      <button id="newClient" onClick={handleClick}>
        Add new Client
      </button>
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
              <button onClick={() => deleteClient(client_data.client)}>
                DELETE CLIENT
              </button>
              <button
                onClick={() => {
                  setContactInfo(client_data)
                  setRoute("editClient")
                }}
              >
                EDIT CLIENT
              </button>
              <button onClick={() => setModal(client_data)}>View Client</button>
            </DashCard>
          ))}
      </DashCardContain>
    </div>
  )
}

export default AllClients
