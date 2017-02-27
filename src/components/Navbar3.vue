<template>
  <div id="myNav">

  <router-link to="/">Home</router-link> |
  <router-link to="/murder">Murder/Definitions</router-link> |
  <router-link to="/murder/arrestees">Murder/Arrestees</router-link> |
  <router-link to="/murder/convictions">Murder/Convictions</router-link> |
  <router-link to="/murder/sentences">Murder/Sentences</router-link> |
  <router-link to="/murder/conclusion">Murder/Conclusion</router-link>
<br>
{{menuArray}}
  </div>

</template>

<script>
import routes from '../router'
export default {

  created: function() {
       this.setSegment();
       this.displayPageTitle()
       this.initSubnav()

    },
  mounted () {


  },
  components: {

  },
  name: 'Navbar',
  methods: {
    clickLink (e) {

   },
   openSideNav() {
       $(".side-nav-activate").sideNav('show');
   },
   setSegment() {
           var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
           var pathArray = window.location.pathname.split('/');
           this.segment = '/' + pathArray[1];
           this.currentSegment = pathArray[1];
           this.page = pathArray[2];
           if (this.page) {
             this.showBreadcrumb = true
           } else {
             this.showBreadcrumb = false
           }

           console.log(this.segment, this.currentSegment)
       },
       initSubnav() {
           // add quick 'left' method to String
           String.prototype.left = function(n) {
               return this.substring(0, n);
           }
           this.makeMenu()
       },
       makeMenu() {
           let menu = [];
           var seg = this.segment
           // use lodash to cycle through routes
           //console.log(routes.options.routes)
           _.forOwn(routes.options.routes, function(value, key) {
               if (value.path.left(seg.length) === seg) {
                   let obj = {}
                   // remove 'X_' section identifiers from route name
                  //  obj.name = value.name.substring(2)
                  //  obj.path = value.path
                  //
                  //  menu.push(obj)
                  obj.name = value.name.substring(2)
                  obj.path = value.path
                  console.log(obj)
                  menu.push(obj)

               }
           });
           this.menuArray = menu

       },
       updateSubnav() {
           this.setSegment();
           this.displayPageTitle();
           this.initSubnav()
       },
       displayPageTitle() {
           this.title = 'ICJIA Violent Crime Data Project 2017 / ' + this.segment.slice(1)
           console.log("this.title", this.title)
       }

  },
  data () {
    return {
      title: null,
                 subNav: null,
                 segment: null,
                 menuArray: null,
                 page: null,
                 currentSegment: null,
                 showBreadcrumb: false
    }
  }
}
</script>


<style scoped>

</style>
