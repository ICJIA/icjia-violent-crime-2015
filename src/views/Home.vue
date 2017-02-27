<template>
  <div>
    This the front page.
  </div>

 </template>

<script>
import metaInfo from 'meta'


export default {

  mounted() {

  

  },


  data() {
    return {
      description: "Illinois Sex Offenders & Offender Registration Task Force.",
      title: "Illinois Sex Offenders & Offender Registration Task Force",
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
