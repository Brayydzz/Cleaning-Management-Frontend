import jwtDecode from "jwt-decode";
import { createContext } from "react";

export default function stateReducer(state, action) {
  switch (action.type) {
    case "setServices": {
      return {
        ...state,
        services: action.services,
      };
    }
    case "setJobs": {
      return {
        ...state,
        jobs: action.jobs
      }
    }
    case "setEmployees": {
      return {
        ...state,
        employees: action.employees,
      };
    }
    case "addEmployee": {
      return {
        ...state,
        employees: [...state.employees, action.employee],
      };
    }
    case "addJob": {
      return {
        ...state,
        jobs: [...state.jobs, action.job],
      };
    }
    case "setTokenAndUser": {
      localStorage.setItem("token", action.token);
      return {
        ...state,
        token: action.token,
        // Store it as a function so it's more secure
        // People wont be able to modify the user object
        currentUser: () => jwtDecode(action.token.split(" ")[1]),
      };
    }
    case "logout": {
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
      };
    }
    case "setError": {
      return {
        ...state,
        error: action.error,
      };
    }
    case "setMessage": {
      return {
        ...state,
        message: action.message,
      };
    }
    case "setClients": {
      return {
        ...state,
        clients: action.clients,
      };
    }
    case "setModalOpen": {
      return {
        ...state,
        modalOpen: action.modalOpen,
        modalType: action.modalType,
        modalData: action.modalData
      }
    }
    
    case "update job": {
      const newJobs = state.jobs.slice()
      let index = state.jobs.findIndex(job => job.job_data.job.id == action.id)
      newJobs[index].job_data = action.job_data
      return {
        ...state,
        jobs: newJobs
      }
    }
    default:
      return state;
  }
}

export const stateContext = createContext();
