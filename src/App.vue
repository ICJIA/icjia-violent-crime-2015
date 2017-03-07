<template>
  <div id="app">
    <!-- <keep-alive>
      <router-view class="view"></router-view>
      </keep-alive>
    <my-footer></my-footer> -->

<keep-alive>
                      <router-view class="view"></router-view></keep-alive>




  </div>
</template>

<script>

import MyFooter from './components/Footer'
import metaInfo from 'meta'

export default {

  name: 'app',
  metaInfo,
  created: function () {
      //console.log(this.$route.path)
    },

  mounted: function () {
    },
  components: {
    MyFooter,
  }
}
</script>

<style lang="scss">

@import "./scss/base";

</style>
