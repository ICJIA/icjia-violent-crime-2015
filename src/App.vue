<template>
  <div id="app">
    <navbar></navbar>
    

<!--<center>
      <img src="./assets/logo.png">
  </center>-->
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
      </transition>
<div style="height: 100px"></div>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'


export default {
  name: 'app',
  components: {
    
    Navbar
  }
}
</script>

<style>

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s
}
.fade-enter, .fade-leave-active {
  opacity: 0
}

.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(400px);
  opacity: 0;
}

</style>
