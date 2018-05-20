<template>
  <div id="body">
    <h1>Mykal Machon</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit dolor, efficitur in bibendum ac, elementum eu magna. Fusce felis sem, efficitur vitae lorem nec, maximus ullamcorper ipsum. In vel lacinia magna. Maecenas id nulla leo. Sed dui nisl, scelerisque laoreet venenatis eget, viverra eget leo. Cras et leo convallis diam tempus egestas at ut ligula. Praesent ac arcu sed sem sodales bibendum et feugiat enim. Sed sagittis interdum nisl, non eleifend metus accumsan non. </p>
    <p>In at efficitur diam, nec euismod turpis. Praesent et mauris purus. Duis tempor ornare tincidunt. Sed pretium placerat fringilla. Duis urna lorem, interdum eu euismod a, tempor at massa. Nulla porttitor sem vel enim vulputate facilisis. Aenean vel aliquet elit. </p>
    <Section />
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus elit dolor, efficitur in bibendum ac, elementum eu magna. Fusce felis sem, efficitur vitae lorem nec, maximus ullamcorper ipsum. In vel lacinia magna. Maecenas id nulla leo. Sed dui nisl, scelerisque laoreet venenatis eget, viverra eget leo. Cras et leo convallis diam tempus egestas at ut ligula. Praesent ac arcu sed sem sodales bibendum et feugiat enim. Sed sagittis interdum nisl, non eleifend metus accumsan non. </p>
    
  </div>
</template>

<script>
import Section from './layout/body/Section.vue';

export default {
  name: 'Body',
  components: {
    Section
  }
};
</script>

<style >
#body {
  width: 60vw;
  max-width: 1000px;
  padding: 50px 100px 24px 100px;
  background: white;
}

h1 {
  font-size: 4em;
  transition: color 0.2s ease-in-out;
}

h1:hover {
  color: #eeeeee;
}
</style>
