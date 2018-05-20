<template>
  <div id="nav">
    <button class="nav-item" v-on:click='addActive'>Mykal Machon</button>
    <button class="nav-item">Work</button>
    <button class="nav-item">Life</button>
    <button class="nav-item">Conversation</button>    
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  methods: {
    addActive: function() {}
  }
};
</script>

<style>
#nav {
  color: var(--blue);
  padding: 24px 0px 24px 24px;
  display: flex;
  margin-top: -10px;
  flex-direction: column;
}

.nav-item {
  all: unset;
  padding: 10px;
  padding-right: 20px;
  transition: all 0.2s linear;
}

.nav-item:first {
  padding-top: 0px;
}

.nav-item:hover {
  background: #dedede;
}

.nav-item:focus {
  background-color: var(--blue);
  color: white;
}
</style>
