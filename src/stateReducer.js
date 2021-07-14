import jwtDecode from "jwt-decode";
import { createContext } from "react";

export default function stateReducer ( state, action ) {
    console.log(state.user);
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
                // Store it as a function so it's more secure
                // People wont be able to modify the user object
                user: () => jwtDecode(action.token.split(' ')[1])
            }
        }


        default: return state
    }

}

export const stateContext = createContext() 