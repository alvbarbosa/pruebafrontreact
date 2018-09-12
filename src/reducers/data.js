import { DATA } from "../types";

const initialState = {
  point1: null,
  point2: null,
  description: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DATA.SETPOINTS:
      return {
        ...state,
        point1: action.point1,
        point2: action.point2,
        description: action.description
      }
    default:
      return state
  }
}