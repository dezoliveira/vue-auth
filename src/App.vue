<template>
  <Navbar />
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
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>
<style scoped>

</style>
