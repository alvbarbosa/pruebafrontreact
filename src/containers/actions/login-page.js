import { AUTH } from "../../types";
import { SubmissionError } from "redux-form"

export const login = values => async (dispatch, getState) => {

  const { email, password } = getState().form.login.values
  const response = await fetch(`http://localhost:4000/login?username=${email}&pass=${password}`)
  const user = await response.json()
  if (user.error) {
    throw new SubmissionError({
      _error: user.error
    })
  } else {
    dispatch(loginAction(user))
  }
}

const loginAction = user => ({
  type: AUTH.LOGIN,
  user
})