<template>
  <div id="app">
    <Navigation />
    <Body />
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';
import Body from './components/Body.vue';

export default {
  name: 'app',
  components: {
    Navigation,
    Body
  }
};
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
