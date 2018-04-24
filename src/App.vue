<template>
  <div id="app">
    <lik />
  </div>
</template>

<script>
import lik from './components/lik.vue'

export default {
  name: 'app',
  components: {
    lik
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
