<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">
      <img src="../assets/logo.svg" width="24px"/>
      Vue Auth
    </a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <!-- <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li> -->
      </ul>
      <form class="d-flex align-items-center justify-content-center gap-2">
        <router-link to="/login">
          <button class="btn btn-outline-success" type="submit">Login</button>
        </router-link>
        <router-link to="/signup">
          <button class="btn btn-outline-success" type="submit">Signup</button>
        </router-link>
      </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>