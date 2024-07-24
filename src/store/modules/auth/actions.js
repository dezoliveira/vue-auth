import SignupValidations from "@/services/SignupValidations";
import { SET_USER_TOKEN_DATA_MUTATION, SIGNUP_ACTION } from "@/store/storeconstraints";
import Axios from "axios";

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY

export default {
  async [SIGNUP_ACTION](context, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    }

    let response = ''

    try {
      response = await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        postData
      )
    } catch(err) {
      let errorMessage = SignupValidations.getErrorMessageFromCode(
        err.response.data.error.errors[0].message
      )

      throw errorMessage
    }

    if (response.status === 200) {
      context.commit(SET_USER_TOKEN_DATA_MUTATION, {
        email: response.data.email,
        token: response.data.idToken,
        expiresIn: response.data.expiresIn,
        refreshToken: response.data.refreshToken,
        userId: response.data.localId
      },)
    }
  }
}