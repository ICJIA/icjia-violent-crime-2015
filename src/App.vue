<template>
  <div id="app">



    <!-- <transition name="fade" mode="out-in"> -->
    <keep-alive>
      <router-view class="view"></router-view>
      </keep-alive>

    <!-- </transition> -->
    <my-footer></my-footer>





  </div>
</template>

<script>

import MyFooter from './components/Footer'

export default {

  name: 'app',
    created: function () {

    },

  components: {
    MyFooter,

  }
}
</script>

<style>


</style>
