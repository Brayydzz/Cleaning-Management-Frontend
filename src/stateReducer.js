import { createContext } from "react";

export default function stateReducer ( state, action ) {
    switch (action.type) {
        case "setServices": {
            return {
                ...state,
                services: action.services
            }
        }
        case "setToken": {
            localStorage.setItem("token", action.data)
            return {
                ...state,
                token: action.data
            }
        }

        default: return state
    }
}

export const stateContext = createContext() 