<template>
  <div>
    This the Conclusion page.
  </div>

 </template>

<script>
import metaInfo from 'meta'


export default {

  mounted() {



  },


  data() {
    return {
      description: "ICJIA Violent Crime Data Project 2017",
      title: "ICJIA Violent Crime Data Project 2017",
      path: this.$route.fullPath
    }
  },

  metaInfo() {
    return {
      meta: [{
        vmid: 'description',
        name: 'description',
        content: this.description
      }],
      title: this.title

    }
  }


}
</script>


<style >

</style>
