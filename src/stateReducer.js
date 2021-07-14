import { createContext } from "react";

export default function stateReducer ( state, action ) {
    switch (action.type) {
        case "setServices": {
            return {
                ...state,
                services: action.services
            }
        }
    }
}

export const stateContext = createContext() 