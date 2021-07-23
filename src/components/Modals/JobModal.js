import { useContext, useState, useEffect } from "react"

import {
  AuthFetchRequest,
  AuthFetchRequestImages,
  setModal,
} from "../../helperFunctions"

import { stateContext } from "../../stateReducer"
import { NewNote, NoteCard } from "../../Styled"

const JobModal = () => {
  const { dispatch, modalData, token } = useContext(stateContext)
  const {
    address,
    client,
    job,
    service_type,
    user,
    photos,
    notes,
  } = modalData
  const date = new Date(parseFloat(job.due_data)).toString()
  const [checkIn, setCheckIn] = useState("")
  const [checkOut, setCheckOut] = useState("")
  const [addNote, setAddNote] = useState(false)
  const [jobNote, setJobNote] = useState("")
  const [images, setImages] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleCheckIn = () => {
    let currentDate = new Date()
    AuthFetchRequest(`/jobs/${job.id}/checkin`, token, "POST", {
      time_in: currentDate,
    }).then((data) => {
      dispatch({
        type: "update job",
        id: data.job_data.job.id,
        job_data: data.job_data,
      })
      setCheckIn(currentDate)
    })
  }

  const handleCheckOut = () => {
    let currentDate = new Date()
    AuthFetchRequest(`/jobs/${job.id}/checkout`, token, "POST", {
      time_out: currentDate,
    }).then((data) => {
      dispatch({
        type: "update job",
        id: data.job_data.job.id,
        job_data: data.job_data,
      })
      setCheckOut(currentDate)
    })
  }

  const handleUpload = (e) => {
    e.preventDefault()
    setLoading(true)
    const form = new FormData()
    for (let i = 0; i < images.length; i++) {
      form.append(`pictures[${i}]`, images[i])
    }
    AuthFetchRequestImages(`/jobs/${job.id}/images`, token, form).then(
      (data) => {
        dispatch({
          type: "update job",
          id: data.job_data.job.id,
          job_data: data.job_data,
        })
        setModal(data.job_data, "jobs", dispatch)
        e.target.children[1].value = ""
        setLoading(false)
      }
    )
  }

  const handleNewNote = () => {
    setAddNote(true)
  }

  const handleAddNote = () => {
    AuthFetchRequest(`/jobs/${job.id}/notes`, token, "POST", {
      note: jobNote,
    }).then((data) => {
      dispatch({
        type: "update job",
        id: data.job_data.job.id,
        job_data: data.job_data,
      })
      setModal(data.job_data, "jobs", dispatch)
    })
    setAddNote(false)
  }

  const handleDeleteNote = (note) => {
    AuthFetchRequest(`/jobs/${job.id}/notes/${note}`, token, "DELETE").then(
      (data) => {
        dispatch({
          type: "update job",
          id: data.job_data.job.id,
          job_data: data.job_data,
        })
        setModal(data.job_data, "jobs", dispatch)
      }
    )
  }

  useEffect(() => {
    setCheckOut(job.time_out)
  }, [job])

  useEffect(() => {
    setCheckIn(job.time_in)
  }, [job])

  return (
    <>
      <h2>Client Name:</h2>
      <p>
        {`${client.client_data.contact_information.first_name}`}{" "}
        {`${client.client_data.contact_information.last_name}`}
      </p>
      <h2>Address:</h2>
      <p>{address}</p>
      <h2>Service Type:</h2>
      <p>{service_type.name}</p>
      <h2>Employee</h2>
      <p>
        {user.user_data ? user.user_data.contact_information.first_name : user}
      </p>
      <h2>Time of Job</h2>
      <p>{date}</p>
      {loading ? (
        <p>Uploading Images......</p>
      ) : (
        <form onSubmit={handleUpload}>
          <label>Upload Photos</label>
          <input
            type="file"
            multiple
            onChange={(e) => {
              if (e.target.files.length + photos.length > 10) {
                dispatch({
                  type: "setError",
                  error: "There is a maximum of 10 images allowed for upload",
                })
                e.target.value = ""
              } else {
                setImages(e.target.files)
              }
            }}
          />
          <button type="submit">Upload Photos</button>
        </form>
      )}

      {/* Close button */}
      <button
        onClick={() =>
          dispatch({
            type: "setModalOpen",
            modalOpen: false,
          })
        }
      >
        Close
      </button>
      <br />
      <button onClick={handleCheckIn}>Check In</button>
      {checkIn && <span>: {checkIn.toString()}</span>}
      <br />
      <button onClick={handleCheckOut}>Check Out</button>
      {checkOut && <span>: {checkOut.toString()}</span>}
      <br />
      <button onClick={handleNewNote}>Add Note</button>
      {addNote && (
        <NewNote>
          <label htmlFor="note">New Note: </label>
          <textarea id="note" onChange={(e) => setJobNote(e.target.value)} />
          <br />
          <button onClick={handleAddNote}>Submit Note</button>
        </NewNote>
      )}
      <h2>Notes: </h2>
      {notes.map((note) => (
        <NoteCard key={note.id}>
          <p>{note.note}</p>
          <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
        </NoteCard>
      ))}
    </>
  )
}

export default JobModal