import { useContext, useEffect, useState } from "react"
import { stateContext } from "../stateReducer"
import { DashCard, DashCardContain } from "../Styled"
import {setModal} from "../helperFunctions"

const MyJobs = () => {

    const { jobs, dispatch, currentUser } = useContext(stateContext)
    const [myJobs, setMyJobs] = useState(null)
    useEffect(() => {
        if (jobs && jobs.length > 0){
            setMyJobs(jobs.filter(job => job.job_data.user.user_data.user.id.toString() === currentUser().user_id.toString() && job.job_data.job.time_out === null))
        }
    }, [jobs, currentUser])

    return (
        <div>
            <h1>My Jobs!</h1>
            <DashCardContain>
                {myJobs &&
                    myJobs.map(({job_data}) => (
                        <DashCard key={job_data.job.id}>
                            <h2>Client: </h2>
                            <p>{`${job_data.client.client_data.contact_information.first_name}`} {`${job_data.client.client_data.contact_information.last_name}`}</p>
                            <h2>Address:</h2>
                            <p>{job_data.address}</p>
                            <h2>Service Type:</h2>
                            <p>{job_data.service_type.name}</p>
                            <h2>Time Due</h2>
                            <p>{new Date(parseFloat(job_data.job.due_data)).toString()}</p>
              
                            <button onClick={() => setModal(job_data, "jobs", dispatch)}>View Job</button>
                        </DashCard>
                    ))        
                }

            </DashCardContain>
        </div>
    )
}

export default MyJobs
