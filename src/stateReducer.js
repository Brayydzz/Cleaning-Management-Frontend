import { createContext } from "react";

export default function stateReducer ( state, action ) {
    switch (action.type) {
        case "setServices": {
            return {
                ...state,
                services: action.services
            }
        }

        default: return state
    }
}

export const stateContext = createContext() 