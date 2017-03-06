<template>
  <div >
    <!-- TEMPLATE START -->
    <footer class="text-center">

          <div class="footer-text">© {{getFullYear()}}
            <a href="">Illinois Criminal Justice Information Authority</a>&nbsp;&nbsp;|&nbsp;&nbsp;
            <i class="fa fa-github" aria-hidden="true"></i>
                &nbsp;&nbsp;<a href="https://github.com/ICJIA/icjia-violent-crime-2017">View on GitHub</a>
              </div>


    </footer>
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
a {color: #666}
footer {border-top: 0px solid #bbb;
  margin-top: 20px; padding-top: 30px; padding-bottom: 40px; background-color: #fff; color: #333;}
.footer-text {font-size:14px;}


</style>
