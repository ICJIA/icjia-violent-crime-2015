<template>
  <div id="app">
    <navbar />
    <router-view></router-view>
    <my-footer />
  </div>
</template>

<script>
import Navbar from 'components/Navbar3'
import MyFooter from 'components/Footer'
import metaInfo from 'meta'
export default {
  name: 'app',
  metaInfo,
  components: {
    Navbar,
    MyFooter
  }
}
</script>

<style>

</style>
