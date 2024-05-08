<template>
   
  <nav class="navbar navbar-expand-lg navbar-light " style="background-color: #000; color: #FFF8DC;">
    <div class="container-fluid">
      <a class="navbar-brand" >
        <img src="@/assets/logo.png" alt="icon" width="50px">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link active" style="color: #FFF8DC;" aria-current="page" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" style="color: #FFF8DC;" aria-current="page" to="/addmovie">Add Movie</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link active" style="color: #FFF8DC;" aria-current="page" to="/Movies">Movies</router-link>
          </li>
        
        </ul>
      </div>
    </div>
  </nav>
  <div>

  </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>