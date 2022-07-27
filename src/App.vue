<template>
  <div>
    <Nav_bar />
    <div id="app">
      <router-view />
    </div>
  </div>
</template>


<script>
import Nav_bar from './components/Nav_bar.vue'
export default {
  name: 'App',
  components: { Nav_bar }
}
</script>
<style>
#app {
color:white;
font-family: 'Roboto';font-size: 22px;
}

body{
  background-color: rgb(10, 10, 10);
}
</style>
