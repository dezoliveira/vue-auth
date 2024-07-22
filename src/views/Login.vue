<template>
  <div class="row">
    <div class="col-md-6 offset-md-3 offset-lg-3">
      <div>
        <div>
          <h3>Login {{ firstName }}</h3>
          <hr />
        </div>
        <form>
          <div class="form-group mb-3">
            <label class="form-label">Email</label>
            <input type="text" class="form-control" />
          </div>
          <div class="form-group mb-3">
            <label class="form-label">Password</label>
            <input type="text" class="form-control" />
          </div>
          <div class="my-3">
            <button type="submit" class="btn btn-primary">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('auth', {
      firstName: state => state.name
    })
  }
}
</script>

<style>

</style>
