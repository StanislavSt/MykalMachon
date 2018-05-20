<template>
  <div id="card">
    <div class="image">

    </div>
    <div class="summary">
      <p class="title">{{card.name}}</p>
      <p class="info">{{card.summary}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  methods: {
    test: function() {}
  },
  data() {
    return {
      testKey: 'testVal'
    };
  },
  props: ['card']
};
</script>

<style scoped>
div.summary {
  width: 200px;
  height: 200px;
  padding: 10px;
  border-radius: 4px;
  background: white;
  display: flex;
  margin: 0px 20px 0px 0px;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: box-shadow 0.3s ease-in-out;
  cursor: pointer;
}

div.summary:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

p.title {
  font-size: 1.2em;
  margin-bottom: 0px;
  font-weight: bold;
  color: black;
}

p.info {
  font-size: 0.8em;
  color: #222222;
}
</style>
