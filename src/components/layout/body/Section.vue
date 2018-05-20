<template>
  <div id="sections">
    <h4>Work</h4>
    <div class='cards'>
      <div v-for='card in testCards' :key='card.title'>
        <Card :card="card"/>
      </div> 
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  name: 'Section',
  components: {
    Card
  },
  data() {
    return {
      testCards: [
        {
          name: 'Power Co',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit dolor, efficitur in bibendum ac, elementum eu magna...'
        },
        {
          name: 'Ventures Inv',
          summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit dolor, efficitur in bibendum ac, elementum eu magna...'
        }
      ]
    };
  }
};
</script>

<style scoped>
#sections {
  box-sizing: unset;
  margin-left: -100px;
  width: calc(100%);
  background-color: #eeeeee;
  background-image: linear-gradient(135deg, #eeeeee 0%, #ffffff 100%);
  padding: 20px 100px 20px 100px;
  color: white;
}

.cards {
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
}

h4 {
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.28);
}
</style>
