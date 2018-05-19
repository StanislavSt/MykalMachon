<template>
  <div id="body">
    A website to introduce...
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
  min-height: 70vh;
  padding: 50px 100px 24px 100px;
  background: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
