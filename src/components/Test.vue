<!-- add html template here-->
<template>
  <transition name="push">
    <div class="test">
    <h1>this is test component</h1>

      <label>email <input type="text" placeholder="email"></label>
      {{msg}}
    </div>
  </transition>
</template>

<script>
    export default {
        name: 'test',

        data () {
            return {
              msg:'use your super ability!!!'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .push-enter-active, .push-leave-active {
    transition: 1s
  }
  .push-enter{
    transform:translateX(-100%);
    opacity: 0
  }
  .push-leave-active{

    transform:translateX(100%);
    opacity: 0
  }
</style>
