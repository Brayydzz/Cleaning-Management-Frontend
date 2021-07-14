import { createContext } from "react";

export default function stateReducer ( state, action ) {
    switch (action.type) {
        case "setServices": {
            return {
                ...state,
                services: action.services
            }
        }
        case "setTokenAndUser": {
            localStorage.setItem("token", action.token)
            return {
                ...state,
                token: action.token,
                user: action.user
            }
        }


        default: return state
    }
}

export const stateContext = createContext() 