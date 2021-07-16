import { useContext, useEffect, useState } from "react";
import { AuthFetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import { DashCard, DashCardContain } from "../Styled";

const AllClients = ({ handleClick, reloadClients }) => {
  const { token, clients, dispatch } = useContext(stateContext);

  useEffect(() => {
    AuthFetchRequest("/clients", token).then((data) => {
      dispatch({ type: "setClients", clients: data });
    });
  }, []);

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
              {console.log(client_data)}
              <p>{`Name: ${client_data.contact_information.first_name} ${client_data.contact_information.last_name}`}</p>
              <p>{`Email: ${client_data.contact_information.email}`}</p>
              <p>{`Phone: ${client_data.contact_information.phone_number}`}</p>
              <p>{`Address: ${client_data.address}`}</p>
              <button>DELETE CLIENT</button>
              <button>EDIT CLIENT</button>
            </DashCard>
          ))}
      </DashCardContain>
    </div>
  );
};

export default AllClients;
