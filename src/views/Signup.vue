<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 offset-lg-3">
      <div>
        <div>
          <h3>Signup</h3>
          <hr />
        </div>
        <div class="alert alert-danger" v-if="error">
          {{ error }}
        </div>
        <form @submit.prevent="onSignup">
          <div class="form-group mb-3">
            <label>Email</label>
            <input type="text" class="form-control" v-model.trim="email"/>
            <div class="text-danger" v-if="errors.email">
              {{ errors.email }}
            </div>
          </div>
          <div class="form-group mb-3">
            <label>Password</label>
            <input type="text" class="form-control" v-model.trim="password"/>
            <div class="text-danger" v-if="errors.password">
              {{ errors.password }}
            </div>
          </div>
          <div class="my-3">
            <button type="submit" class="btn btn-primary">Singup</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import SignupValidations from '@/services/SignupValidations'
import { mapActions, mapMutations } from 'vuex'
import { LOADING_SPINNER_SHOW_MUTATION, SIGNUP_ACTION } from '@/store/storeconstraints'
export default {
  data() {
    return {
      email: '',
      password: '',
      errors: [],
      error: ''
    }
  },

  methods: {
    ...mapActions('auth', {
      signup: SIGNUP_ACTION
    }),

    ...mapMutations({
      showLoading: LOADING_SPINNER_SHOW_MUTATION
    }),

    async onSignup() {
      let validations = new SignupValidations(
        this.email,
        this.password
      )

      this.errors = validations.checkValidations()

      if ('email' in this.errors || 'password' in this.errors) {
        return false
      }

      // Activate Spinner
      this.showLoading(true)

      // Signup registration
      await this.signup({
        email: this.email,
        password: this.password
      }).catch((error) => {
        this.error = error
        this.showLoading(false)
      })

      this.showLoading(false)
    }
  }
}
</script>

<style>

</style>