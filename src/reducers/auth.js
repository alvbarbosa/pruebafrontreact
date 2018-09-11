
import { AUTH } from "../types";
const initialState = {
  isAuthenticate: false,
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH.LOGIN:
      return {
        ...state,
        isAuthenticate: true,
        user: action.user
      }
    case AUTH.SINGOFF:
      return {
        ...state,
        isAuthenticate: false,
      }
    default:
      return state
  }
}