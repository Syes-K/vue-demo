<template>
  <div id="app">
    <img src="./assets/logo.png">
    <div class="children-component">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'app'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e51;
    margin: 60px auto 0px;
    width:1200px;
  }
  .children-component{
    position: relative;
  }
</style>
