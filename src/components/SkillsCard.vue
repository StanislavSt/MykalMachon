<template>
  <div id="skillsCard">
    <div class='headingTop'>
      <h2>Skills</h2>
      <p>What im good at, getting better at, and even what I'm not good at!</p>
    </div>
    <div class="skills">
      <p>Front End Web Development</p>
      <div class="badge-container">
        <div class="badge">
          <i class="devicon-html5-plain"></i> HTML 5
        </div>
        <div class="badge">
          <i class="devicon-css3-plain"></i> CSS3
        </div>
        <div class="badge">
          <i class="devicon-javascript-plain"></i> ES6 Javascript
        </div>
        <div class="badge">
          <i class="devicon-vuejs-plain"></i> Vue.js
        </div>
      </div>
      <p>Back End Web Development</p>
      <div class="badge-container">
        <div class="badge">
          <i class="devicon-nodejs-plain"></i> Node.js
        </div>
        <div class="badge">
          <i class="devicon-express-original"></i> Express
        </div>
        <div class="badge">
        <i class="devicon-mongodb-plain"></i> MongoDB
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsCard'
};
</script>

<style scoped>
#skillsCard {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 868px;
  max-width: 1000px;
  background-color: var(--textIcons);
  color: var(--textPrim);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  padding: 20px;
}

h2 {
  font-size: 2rem;
  font-weight: bold;
}

.headingTop h2 {
  margin-bottom: 0px;
}
.headingTop p {
  margin-top: 0px;
  color: var(--textSec);
}
div.badge-container {
  display: flex;
  flex-direction: flex-start;
  flex-wrap: wrap;
}

div.badge {
  padding: 7px 16px 7px 16px;
  border-radius: 24px;
  background: var(--accent);
  color: black;
  margin-right: 20px;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.11, 1.5, 0.71, 1.5);
}

div.badge:hover {
  transform: scale(1.1);
}

.skills p {
  font-weight: bold;
}

@media only screen and (max-width: 996px) {
  #skillsCard {
    padding: 40px;
    display: flex;
    min-width: 0px;
    border-radius: 0px;
    margin-top: 0px;
  }
}
</style>
