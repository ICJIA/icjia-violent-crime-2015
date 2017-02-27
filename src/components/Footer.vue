<template>
  <div id="myFoot">
    Footer here
  </div>
</template>

<script>

export default {

  components: {

  },
  name: 'Footer',
  methods: {

      getFullYear: function () {
        var today = new Date();
        return today.getFullYear();
      }

  },
  data () {
    return {

    }
  }
}
</script>


<style scoped>
a {color: #ccc}
footer {padding-top: 30px; padding-bottom: 30px; background-color: #333; color: #aaa;}
.footer-text {text-align:center; width:100%; font-size:12px;}


</style>
