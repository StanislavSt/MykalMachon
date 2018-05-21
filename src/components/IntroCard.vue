<template>
  <div id="introCard">
    <div id="summary" class='splitSum'>
      <div class="top">
        Mykal Machon
        <p>
          A Web Developer based in the Abbotsford, British Columbia, Canada. Working for Aprario Group and attending the University of the Fraser Valley for a Bachelors of Science in Computer Infromation Systems. 
        </p>
      </div>
      <div class="bottom">
        <button class="dark">Contact</button>
        <button class="text">follow</button>
      </div>
    </div>
    <div id="picture" class='splitPic'>
      <img id='me' src="../assets/me.jpg" alt="Mykal Machon" >
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroCard',
  methods: {}
};
</script>

<style scoped>
#introCard {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 868px;
  max-width: 1000px;
  background-color: var(--prim);
  color: var(--textIcons);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s ease-in-out;
}

div.splitSum {
  width: 50%;
  padding: 20px;
  font-size: 4em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

p {
  font-size: 1rem;
  font-weight: normal;
}

div.splitPic {
  width: 50%;
}

div.splitPic img {
  width: 100%;
  height: 100%;
}

@media only screen and (max-width: 996px) {
  #introCard {
    padding: 40px;
    display: flex;
    flex-direction: column;
    min-width: 0px;
  }

  #picture {
    display: none;
  }

  div.splitSum {
    width: 100%;
  }
}
</style>
