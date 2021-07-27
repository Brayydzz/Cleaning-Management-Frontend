import { useState, useContext, useEffect } from "react";
import { AuthFetchRequest, checkAvailable, setTimeAvailable } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import { Form } from "../Styled";
import Select from 'react-select';

const NewJob = ({setRoute}) => {
  const today = new Date()

  const { services, clients, employees, token, dispatch } = useContext(stateContext);
  const [clientOption, setClientOption] = useState("");
  const [employeeOption, setEmployeeOption] = useState("");
  const [serviceOption, setServiceOption] = useState("");
  const [recurring, setRecurring] = useState(false);
  const [recurringType, setRecurringType] = useState("0");
  const [dateTime, setDateTime] = useState(today.toISOString());

  const [availableEmployees, setAvailableEmployees] = useState([]);
  const [clientOptionsRef, setClientOptionsRef] = useState([])
  const [employeeOptionsRef, setEmployeeOptionsRef] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    //Get client to grab address
    const address_id = clients.find(cli => cli.client_data.client.id.toString() === clientOption.toString()).client_data.address_object.id
    const currentEmployee = employees.find(emp => emp.user_data.user.id.toString() === employeeOption.toString())
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
      AuthFetchRequest(`/availables/${currAvailable.id}`, token, "PATCH", availableData).then(data => data)
    }else{
      availableData.freedom = setTimeAvailable("", new Date(dateTime), service.hours_needed)
      AuthFetchRequest(`/users/${employeeOption}/available`, token, "POST", availableData).then(data => data)
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
    availableEmployees.length > 0 ? setEmployeeOption(`${availableEmployees[0].user_data.user.id}`) : setEmployeeOption("");
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
          tmpEmployees.push(employee);
        }
      });
    }

    setAvailableEmployees(tmpEmployees);
  }, [dateTime, employees, serviceOption, services]);

  useEffect(() => {
    setEmployeeOptionsRef(availableEmployees.map(emp => {
      return {value: emp.user_data.user.id,
     label: `${emp.user_data.contact_information.first_name} ${emp.user_data.contact_information.last_name}`}
   }))
  }, [availableEmployees])

  useEffect(() => {
    setClientOptionsRef(clients.map(cli => {
       return {value: cli.client_data.client.id,
      label: `${cli.client_data.contact_information.first_name} ${cli.client_data.contact_information.last_name}`}
    }))
    
  }, [clients])

  const dropDownStyle = {
    container: base => ({
      ...base,
      width: "200px"
    })
  }

  return (
    <div>
      <h1>Create Job</h1>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="client">Client: </label>
        <Select styles={dropDownStyle} value={clientOption} onChange={(e) => setClientOption(e.value)} options={clientOptionsRef}/>

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
        <Select styles={dropDownStyle} value={employeeOption} onChange={(e) => setEmployeeOption(e.value)} options={employeeOptionsRef} />

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
