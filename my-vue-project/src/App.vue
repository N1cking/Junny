<template>
  <div id="app">
    <Header-nav />
    <router-view></router-view>
    <footer>
      <p>&copy; 2024 Juni. All rights reserved.</p>
    </footer>
  </div>
</template>
<script>import HeaderNav from './components/Header.vue';

export default {  components: { HeaderNav
  }};
</script><style scoped>
@import "./assets/css/styles.css";
</style>
