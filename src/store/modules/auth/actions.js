import { SIGNUP_ACTION } from "@/store/storeconstraints";
import Axios from "axios";

export default {
  async [SIGNUP_ACTION](_, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
      returnSecureToken: true
    }

    let response = await Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDg7nwPw1ZpVpco8oDDM9quzfVLRNOgzfA`,
      postData
    )

    console.log(response)
  }
}