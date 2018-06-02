<template>
  <div id="app">
    <div id="inner">
      <IntroCard />
      <SkillsCard />
    </div>
  </div>
</template>

<script>
import IntroCard from './components/IntroCard.vue';
import SkillsCard from './components/SkillsCard.vue';

export default {
  name: 'app',
  components: {
    IntroCard,
    SkillsCard
  }
};
</script>

<style>
:root {
  --darkPrim: #455a64;
  --lightPrim: #EFEFEF;
  --prim: #FFFFFF;
  --textIcons: #ffffff;
  --accent: #bada55;
  --textPrim: #212121;
  --textSec: #757575;
  --divider: #bdbdbd;
}

body {
  background-color: var(--lightPrim);
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
  align-items: flex-start;
  width: 100%;
  height: 100vh;
}

button {
  all: unset;
  text-transform: uppercase;
  padding: 6px 18px 6px 18px;
  color: var(--textIcons);
  background: var(--accent);
  font-size: 1rem;
  border-radius: 3px;
  font-weight: normal;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.2s ease-in-out;
  letter-spacing: 1.5px;
  cursor: pointer;
}

button:hover {
  box-shadow: 0 9px 28px rgba(0, 0, 0, 0.25), 0 6px 10px rgba(0, 0, 0, 0.22);
}

button.light {
  background-color: var(--lightPrim);
  color: var(--textPrim);
}

button.dark {
  background-color: var(--darkPrim);
  color: var(--textIcons);
}

button.text {
  background-color: unset;
  border-radius: 0px;
  color: var(--textIcons);
  box-shadow: 0px 0px 0px;
}

button.text:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

#inner {
  margin-top: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 60%;
}

@media only screen and (max-width: 996px) {
  #inner {
    margin-top: 0px;
    justify-content: flex-start;
    width: 100%;
  }
  #introCard {
    flex-direction: row;
    min-width: unset;
  }
}
</style>
