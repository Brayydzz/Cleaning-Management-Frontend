import { useContext } from "react"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain } from "../Styled"

const AllJobs = ({handleClick}) => {

  const {jobs, dispatch, token} = useContext(stateContext)

  const setModal = (data) => {
    dispatch({
      type: "setModalOpen",
      modalOpen: true,
      modalData: data,
      modalType: "jobs"
    })
  }

  return (
    <div>
      <h1>All Jobs</h1>
      <button onClick={handleClick} id="newJob">Create Job</button>
      <DashCardContain>
        {jobs.length > 0 &&
          jobs.map(({job_data}) => (
            
            <DashCard key={job_data.job.id}>
              <h2>Client:</h2>
              <p>{`${job_data.client.client_data.contact_information.first_name}`} {`${job_data.client.client_data.contact_information.last_name}`}</p>
              <h2>Address:</h2>
              <p>{job_data.address}</p>
              <h2>Service Type:</h2>
              <p>{job_data.service_type.name}</p>
              <button onClick={() => setModal(job_data)}>View Job</button>
            </DashCard>
          ))}
      </DashCardContain>

    </div>

  )
    
}
export default AllJobs
