import { useState, useContext, useEffect } from "react";
import { AuthFetchRequest } from "../helperFunctions";
import { stateContext } from "../stateReducer";
import { Form } from "../Styled";

const NewJob = () => {

    const { services, clients, employees } = useContext(stateContext)  
    const [clientOption, setClientOption] = useState(null)
    const [employeeOption, setEmployeeOption] = useState(null)
    const [serviceOption, setServiceOption] = useState(null)
    const [recurring, setRecurring] = useState(false)
    const [recurringType, setRecurringType] = useState("0")
    const [dateTime, setDateTime] = useState("")

    const clientOptions = clients.map((client) => (
        { value: client.client_data.client.id, label: `${client.client_data.contact_information.first_name} ${client.client_data.contact_information.last_name}`}
    ))

    const employeeOptions = employees.map((employee) => (
        { value: employee.user_data.user.id, label: `${employee.user_data.contact_information.first_name} ${employee.user_data.contact_information.last_name}`}
    ))

    const handleClientChange = (e) => {
        setClientOption("e.target.value")
    }

    useEffect(() => {
        setClientOption(`${clients[0].client_data.client.id}`)
    },[clients])

    useEffect(() => {
        setEmployeeOption(`${employees[0].user_data.user.id}`)
    }, [employees])

    useEffect(() => {
        setServiceOption(`${services[0].id}`)
    }, [services])
      

    return (
        <div>
            <h1>Create Job</h1>
            <Form>
            <label htmlFor="client">Client: </label>
            <select value={clientOption} onChange={(e) => setClientOption(e.target.value)} id="client">
                {
                    clients.map((client) => (
                        <option key={client.client_data.client.id} value={client.client_data.client.id}>
                             {`${client.client_data.contact_information.first_name} ${client.client_data.contact_information.last_name}`}
                        </option>
                    ))
                }
            </select>

            <label></label>    
            <input onChange={(e) => setDateTime(e.target.value)} type="datetime-local" id="meeting-time"
                name="meeting-time" value={dateTime}/>

            <label htmlFor="employee">Employee: </label>
            <select value={employeeOption} onChange={(e) => setEmployeeOption(e.target.value)} id="employee">
                {
                    employees.map((employee) => (
                        <option key={employee.user_data.user.id} value={employee.user_data.user.id}>
                            {`${employee.user_data.contact_information.first_name} ${employee.user_data.contact_information.last_name}`}
                        </option>
                    ))
                }
            </select>
            <label htmlFor="services">Services: </label>
            <select value={serviceOption} onChange={(e) => setServiceOption(e.target.value)} id="services">
                {services.map((service) => (
                    <option key={service.id} value={service.id}>
                    {service.name}
                    </option>
                ))}
            </select>   

            <label>Recurring Job</label>
            <input type="checkbox" onChange={(e) => {
                console.log(e.target.checked)
                setRecurring(e.target.checked)}
                }/>
            {
                recurring && (
                <fieldset>
                    <label htmlFor="weekly">Weekly</label>
                    <input id="weekly" type="radio" name="foo" value="7" onChange={ e => setRecurringType(e.target.value)}/>

                    <label htmlFor="fortnightly">Fortnightly</label>
                    <input id="fortnightly" type="radio" name="foo" value="14" onChange={ e => setRecurringType(e.target.value)}/>

                    <label htmlFor="monthly">Monthly</label>
                    <input id="monthly" type="radio" name="foo" value="30" onChange={ e => setRecurringType(e.target.value)}/>
                </fieldset>
                )
            }
            <button type="submit">Submit</button>
            </Form>
        </div>
    )
}

export default NewJob
