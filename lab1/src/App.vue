<template>

 <NavBar/>
 <div class="container">
  <div class="row">
    <div class="col-12">
      <router-view></router-view>

    </div>
  </div>
 </div>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>

<style>

</style>
