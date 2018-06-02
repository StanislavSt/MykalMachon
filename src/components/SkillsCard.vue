<template>
  <div id="skillsCard">
    <div class="heading">
      <div class="head-text">
        <h2>Skills and Focuses</h2>
      </div>
      <img src="../assets/gaus.jpg" alt="gaussian Blur">
    </div>
    <div class="content">

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
  align-items:flex-start;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 868px;
  max-width: 1000px;
  background-color: var(--textIcons);
  color: var(--textPrim);
  box-shadow: 0px 15px 28px rgba(0,0,0,0.15);
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
  z-index: -2;

}

img{
  display: block;
  height: auto;
  min-height: 200px;
  max-width: 100%;
  filter: blur(40px);
  z-index: -1;
}

div.heading{
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: inline-block;
  position: relative;
  max-height: 200px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.head-text{
  position: absolute;
  text-align: left;
  width: 100%;
  height: 100%;
  padding: 50px;
  z-index: 0;    
}

.head-text:before {
   content: '';
   display: inline-block;
   height: 100%;
   vertical-align: middle;
}

.head-text h2{
  display: inline-block;
  margin: 0px;
  font-size: 2em;
  font-weight: bold;
  color: white;
  text-shadow: 0 2px 6px rgba(0,0,0,0.15);
}

.content{
  height: 200px;
}


@media only screen and (max-width: 996px) {
  #skillsCard {
    display: flex;
    min-width: 0px;
    border-radius: 0px;
    margin-top: 0px;
  }
}
</style>
