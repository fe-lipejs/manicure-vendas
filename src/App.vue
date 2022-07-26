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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0%;
  padding: 0%;

}
body{
  background-color: #2c2c2c;
}
</style>
