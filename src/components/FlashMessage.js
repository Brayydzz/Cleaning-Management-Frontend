import { useContext } from "react"
import { stateContext } from "../stateReducer"

const FlashMessage = () => {
    const {error, message, dispatch} = useContext(stateContext)
    return (
        <>
        {error && 
            <div id="errorFlashMessage" style={{backgroundColor:"red"}}>
            <h3>{error}</h3>
            <button onClick={() => dispatch({type: "setError", error: ""})}>close</button>
        </div>}
        {message && 
            <div id="successFlashMessage" style={{backgroundColor:"green"}}>
            <h3>{message}</h3>
            <button onClick={() => dispatch({type: "setMessage", message: ""})}>close</button>
        </div>}
        </>
    )
}

export default FlashMessage
