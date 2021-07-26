import { useContext, useEffect, useState } from "react"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain, Button } from "../Styled"
import {setModal} from "../helperFunctions"

const AllJobs = ({handleClick}) => {

  const {jobs, dispatch, clients} = useContext(stateContext)

  const [showJobs, setShowJobs] = useState([])
  const [client, setClient] = useState("")

  useEffect(() => {
    client === "" ? setShowJobs(jobs) : setShowJobs(jobs.filter(job => job.job_data.client.client_data.client.id.toString() === client))
  }, [client, jobs])

  return (
    <div>
      <h1>All Jobs</h1>
      <label>Filter by Client</label>
      <select onChange={ e => {setClient(e.target.value)}} value={client}>
        <option value="">All Clients</option>
        {clients.map(cli => (
          <option key={cli.client_data.client.id} value={cli.client_data.client.id}>{`${cli.client_data.contact_information.first_name} ${cli.client_data.contact_information.last_name}`}</option>
        ))}
      </select>
      <br/>
      <Button onClick={handleClick} id="newJob">Create Job</Button>
      <DashCardContain>
        {showJobs.length > 0 &&
          showJobs.map(({job_data}) => (
            
            <DashCard key={job_data.job.id}>
              <h2>Client:</h2>
              <p>{`${job_data.client.client_data.contact_information.first_name}`} {`${job_data.client.client_data.contact_information.last_name}`}</p>
              <h2>Address:</h2>
              <p>{job_data.address}</p>
              <h2>Service Type:</h2>
              <p>{job_data.service_type.name}</p>
              <h2>Time Due</h2>
              <p>{new Date(parseFloat(job_data.job.due_data)).toString()}</p>
              <Button onClick={() => setModal(job_data, "jobs", dispatch)}>View Job</Button>
            </DashCard>
          ))}
      </DashCardContain>

    </div>

  )
    
}
export default AllJobs
