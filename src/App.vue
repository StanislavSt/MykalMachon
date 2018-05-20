<template>
  <div id="app">
    <div class="inner">
     <!-- <Navigation /> -->
      <Body />
    </div>
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
:root {
  --blue: #b721ff;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #eeeeee;
}

.inner {
  display: flex;
  flex-direction: row;
}
</style>
