import { useContext, useEffect, useState } from "react";
import { AuthFetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import { DashCard, DashCardContain } from "../Styled";

const AllClients = ({ handleClick, setRoute, setContactInfo }) => {
  const { token, clients, dispatch } = useContext(stateContext);

  useEffect(() => {
          AuthFetchRequest("/clients", token).then((data) => {
            dispatch({ type: "setClients", clients: data });
          });

  }, []);

  const deleteClient = (client) => {
    let conf = window.confirm("Are you sure you want to delete?");

    if (conf) {
      AuthFetchRequest(`/clients/${client.id}`, token, "DELETE").then(
        (method) => {
          if (method) {
            // eslint-disable-next-line
            dispatch({
              type: "setClients",
              clients: clients.filter((obj) => obj.client_data.client.id != client.id)
            })
          }
        }
      );
    }
  };

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
              <p>{`Name: ${client_data.contact_information.first_name} ${client_data.contact_information.last_name}`}</p>
              <p>{`Email: ${client_data.contact_information.email}`}</p>
              <p>{`Phone: ${client_data.contact_information.phone_number}`}</p>
              <p>{`Address: ${client_data.address}`}</p>
              <button onClick={() => deleteClient(client_data.client)}>DELETE CLIENT</button>
              <button onClick={() => {setContactInfo(client_data); setRoute("editClient")}}>EDIT CLIENT</button>
            </DashCard>
          ))}
      </DashCardContain>
    </div>
  );
};

export default AllClients;
