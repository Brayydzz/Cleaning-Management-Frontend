import jwtDecode from "jwt-decode";
import { createContext } from "react";

export default function stateReducer ( state, action ) {
    switch (action.type) {
        case "setServices": {
            return {
                ...state,
                services: action.services
            }
        }
        case "setEmployees": {
            return {
                ...state,
                employees: action.employees
            }
        }
        case "addEmployee": {
            return {
                ...state,
            employees: [...state.employees, action.employee]
        }
        }
        case "setTokenAndUser": {
            localStorage.setItem("token", action.token)
            return {
                ...state,
                token: action.token,
                // Store it as a function so it's more secure
                // People wont be able to modify the user object
                currentUser: () => jwtDecode(action.token.split(' ')[1])
            }
        }
        case "logout":{
            localStorage.removeItem("token")
            return {
                ...state,
                token: null
            }
        }
        case "setError": {
            return{
                ...state,
                error: action.error
            }
        }
        case "setMessage": {
            return{
                ...state,
                message: action.message
            }
        }
        case "setClients": {
            return{
                ...state,
                clients: action.clients
            }
        }
        default:
          return state;
    }

  }

export const stateContext = createContext();
