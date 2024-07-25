<template>
  <Navbar />
  <Loader v-if="showLoading"></Loader>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div>
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { computed } from 'vue'
import Loader from './components/Loader.vue'
import Navbar from './components/Navbar.vue'
import { mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Navbar,
    Loader
  },

  computed: {
    ...mapState({
      showLoading: state => state.showLoading
    })
  }
}
</script>
<style scoped>

</style>
