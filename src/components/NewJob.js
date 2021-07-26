import { useState, useContext, useEffect } from "react";
import { AuthFetchRequest, checkAvailable, setTimeAvailable } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import { Form } from "../Styled";

const NewJob = ({setRoute}) => {
  const today = new Date()

  const { services, clients, employees, token, dispatch } = useContext(stateContext);
  const [clientOption, setClientOption] = useState(null);
  const [employeeOption, setEmployeeOption] = useState(null);
  const [serviceOption, setServiceOption] = useState(null);
  const [recurring, setRecurring] = useState(false);
  const [recurringType, setRecurringType] = useState("0");
  const [dateTime, setDateTime] = useState(today.toISOString());

  const [availableEmployees, setAvailableEmployees] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault()

    //Get client to grab address
    const address_id = clients.find(cli => cli.client_data.client.id.toString() === clientOption).client_data.address_object.id
    const currentEmployee = employees.find(emp => emp.user_data.user.id)
    let currAvailable = null

    // Set available
    currentEmployee.user_data.availables.forEach((available) => {
      let employeeDate = new Date(available.day).toDateString();
      let dateCompare = new Date(dateTime).toDateString();

      if (dateCompare === employeeDate) {
        currAvailable = available
      }
    });

    const availableData = {
      day: new Date(dateTime).toDateString()
    }
    const service = services.find(service => service.id.toString() === serviceOption)

    if (currAvailable){
      availableData.freedom = setTimeAvailable(currAvailable.freedom, new Date(dateTime), service.hours_needed)
      console.log("UPDATING AVAILABLE")
      AuthFetchRequest(`/availables/${currAvailable.id}`, token, "PATCH", availableData).then(data => console.log(data))
    }else{
      availableData.freedom = setTimeAvailable("", new Date(dateTime), service.hours_needed)
      console.log("CREATING NEW AVAILABLE")
      AuthFetchRequest(`/users/${employeeOption}/available`, token, "POST", availableData).then(data => console.log(data))
    }

    const jobData = {
      service_type_id: serviceOption,
      due_date: Date.parse(dateTime),
      client_id: clientOption,
      reoccuring: recurring,
      reoccuring_length: recurringType,
      user_id: employeeOption,
      address_id: address_id
    }

    AuthFetchRequest("/jobs", token, "POST", jobData).then(data =>{ dispatch({type: "addJob", job: data}); setRoute("allJobs"); dispatch({type: "setMessage", message: "Successfully created job!"})})
  }

  useEffect(() => {
    setClientOption(`${clients[0].client_data.client.id}`);
  }, [clients]);

  useEffect(() => {
    availableEmployees.length > 0 ? setEmployeeOption(`${availableEmployees[0].user_data.user.id}`) : setEmployeeOption(null);
  }, [availableEmployees]);

  useEffect(() => {
    setServiceOption(`${services[0].id}`);
  }, [services]);

  useEffect(() => {
    let tmpEmployees = [];

    const service = services.find(service => service.id.toString() === serviceOption)

    if (dateTime) {
      employees.forEach((employee) => {
        let dateCompare = new Date(dateTime).toDateString();
        let canWork = true;

        employee.user_data.availables.forEach((available) => {
          let employeeDate = new Date(available.day).toDateString();

          if (dateCompare === employeeDate) {
            if (!checkAvailable(available.freedom, new Date(dateTime), service.hours_needed)) {
              canWork = false;
            }
          }
        });

        if (canWork) {
          console.log("I can work!", employee);
          tmpEmployees.push(employee);
        }
      });
    }

    setAvailableEmployees(tmpEmployees);
  }, [dateTime, employees, serviceOption, services]);

  return (
    <div>
      <h1>Create Job</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="client">Client: </label>
        <select
          value={clientOption}
          onChange={(e) => setClientOption(e.target.value)}
          id="client"
        >
          {clients.map((client) => (
            <option
              key={client.client_data.client.id}
              value={client.client_data.client.id}
            >
              {`${client.client_data.contact_information.first_name} ${client.client_data.contact_information.last_name}`}
            </option>
          ))}
        </select>

            {navigator.userAgent.includes("Firefox") ?
        <label>Due Date (Please use chrome)</label> : <label>Due Date</label>
            }
        <input
          onChange={(e) => setDateTime(e.target.value)}
          type="datetime-local"
          id="meeting-time"
          name="meeting-time"
          value={dateTime}
        />

        <label htmlFor="employee">Employee: </label>
        <select
          value={employeeOption}
          onChange={(e) => setEmployeeOption(e.target.value)}
          id="employee"
        >
          {availableEmployees.length > 0 &&
            availableEmployees.map((employee) => (
              <option
                key={employee.user_data.user.id}
                value={employee.user_data.user.id}
              >
                {`${employee.user_data.contact_information.first_name} ${employee.user_data.contact_information.last_name}`}
              </option>
            ))}
        </select>
        <label htmlFor="services">Services: </label>
        <select
          value={serviceOption}
          onChange={(e) => setServiceOption(e.target.value)}
          id="services"
        >
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.name}
            </option>
          ))}
        </select>

        <label>Recurring Job</label>
        <input
          type="checkbox"
          onChange={(e) => {
            console.log(e.target.checked);
            setRecurring(e.target.checked);
          }}
        />
        {recurring && (
          <fieldset>
            <label htmlFor="weekly">Weekly</label>
            <input
              id="weekly"
              type="radio"
              name="foo"
              value="7"
              onChange={(e) => setRecurringType(e.target.value)}
            />

            <label htmlFor="fortnightly">Fortnightly</label>
            <input
              id="fortnightly"
              type="radio"
              name="foo"
              value="14"
              onChange={(e) => setRecurringType(e.target.value)}
            />

            <label htmlFor="monthly">Monthly</label>
            <input
              id="monthly"
              type="radio"
              name="foo"
              value="30"
              onChange={(e) => setRecurringType(e.target.value)}
            />
          </fieldset>
        )}

        <button type="submit">Submit</button>
      </Form>
    </div>
  );
};

export default NewJob;
