<template>
  <div id="introCard">
    <div id="summary" class='splitSum'>
      <div class="top" id='top' v-on:click='clickName'>
        Mykal Machon
        <p>
        Web Developer and UI / UX Engineer
        </p>
      </div>
    </div>
    <div id="picture" class='splitPic'>
      <img id='me' src="../assets/me.jpg" alt="Mykal Machon" >
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroCard",
  methods: {
    display: function() {
      const introCard = document.getElementById("introCard");
      setTimeout(() => {
        introCard.classList.toggle("loadIn");
        introCard.classList.add("show");
      }, 600);
      introCard.classList.toggle("loadIn");
    },
    clickName: function() {
      //Add animation when I flush it out better.
    }
  },
  data() {
    return {
      isSet: false
    };
  },
  mounted: function() {
    this.display();
  }
};
</script>

<style scoped>
#introCard {
  opacity: 0;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: nowrap;
  width: 100%;
  min-width: 868px;
  max-width: 1000px;
  background-color: var(--prim);
  color: var(--textPrim);
  box-shadow: 0px 15px 28px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
  border-radius: 5px;
}

#picture {
  background-image: url("../assets/me.jpg");
  background-size: cover;
}

#me {
  opacity: 0;
}

.show {
  opacity: 1 !important;
}

div.splitSum {
  width: 50%;
  padding: 20px;
  font-size: 2.8em;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: width 0.3s ease-in-out;
}

div.splitPic {
  width: 50%;
  transition: width 0.3s ease-in-out;
}

div.top {
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

div.top:hover {
  font-size: 1.1em;
}

div.top p {
  font-size: 1rem;
  margin-top: 0.2em;
}

div.splitPic img {
  width: 100%;
  height: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
}

@media only screen and (max-width: 996px) {
  #introCard {
    padding: 40px;
    display: flex;
    flex-direction: column;
    min-width: 0px;
    border-radius: 0px;
  }

  #picture {
    display: none;
  }

  div.splitSum {
    width: 100%;
  }

  div.top {
    padding-top: 2rem;
    text-align: center;
  }
}

.loadIn {
  animation: scaleUp 600ms cubic-bezier(0.11, 1.22, 0.71, 1.09) 1;
}

@keyframes scaleUp {
  0% {
    opacity: 0;
    transform: scale(0.9);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
