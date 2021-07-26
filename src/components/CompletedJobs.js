import { useContext } from "react"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain, Button } from "../Styled"
import {setModal} from "../helperFunctions"

const CompletedJobs = () => {

    const { jobs, dispatch, currentUser } = useContext(stateContext)
    const myJobs = jobs.filter(job => job.job_data.user.user_data.user.id.toString() === currentUser().user_id.toString() && job.job_data.job.time_out !== null)

    return (
        <div>
            <h1>Completed Jobs</h1>
            <DashCardContain>
            {jobs.length > 0 &&
                    myJobs.map(({job_data}) => (
                        <DashCard key={job_data.job.id}>
                            <h2>Client: </h2>
                            <p>{`${job_data.client.client_data.contact_information.first_name}`} {`${job_data.client.client_data.contact_information.last_name}`}</p>
                            <h2>Address:</h2>
                            <p>{job_data.address}</p>
                            <h2>Service Type:</h2>
                            <p>{job_data.service_type.name}</p>
                            <Button onClick={() => setModal(job_data, "jobs", dispatch)}>View Job</Button>
                        </DashCard>
                    ))        
                }
            </DashCardContain>
        </div>
    )
}

export default CompletedJobs
