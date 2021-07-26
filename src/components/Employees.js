import { useContext } from "react";
import { stateContext } from "../stateReducer";
import { DashCard, DashCardContain, Button } from "../Styled";

const Employees = ({ handleClick }) => {

  const { employees } = useContext(stateContext);



  return (
    <div>
      <h1>Employees</h1>
      <Button onClick={handleClick} id="newEmployee">
        New Employee
      </Button>
      <DashCardContain>
        {employees.length > 0 &&
          employees.map(({ user_data }) => (
            <DashCard key={user_data.user.id}>
              <h2>Name: </h2>
              <p>{`${user_data.contact_information.first_name} ${user_data.contact_information.last_name}`}</p>
              <h2>Email: </h2>
              <p>{user_data.contact_information.email}</p>
              <h2>Phone: </h2>
              <p>{user_data.contact_information.phone_number}</p>

            </DashCard>
          ))}
      </DashCardContain>
    </div>
  );
};

export default Employees;
