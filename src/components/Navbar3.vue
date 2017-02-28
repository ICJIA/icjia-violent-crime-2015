<template>
  <div id="myNav">

  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/murder">Murder/Definitions</router-link> |
  <router-link to="/murder/arrestees">Murder/Arrestees</router-link> |
  <router-link to="/murder/convictions">Murder/Convictions</router-link> |
  <router-link to="/murder/sentences">Murder/Sentences</router-link> |
  <router-link to="/murder/conclusion">Murder/Conclusion</router-link>
<br> -->

<nav>
    <div class="nav-wrapper grey darken-4">
     <div style="margin-right: 30px;">
      <ul id="nav-mobile" class="right subnav hide-on-med-and-down">
       <li v-for="item in myMenu" @click="clickLink">
        <router-link :to="item.path"  tag="a" class="test">{{item.name}}</router-link>
        </li>
      </ul>
      </div>
    </div>
  </nav>
<!-- {{myMenu}} -->
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
          let myMenu = [];
           var seg = this.segment
           let targetSeg = '';
           // use lodash to cycle through routes
           //console.log(this.$route)
           _.forOwn(routes.options.routes, function(value, key) {
              targetSeg = value.path.left(seg.length)

               if (value.path.left(seg.length) === seg) {
                   let myObj = {}
                   // remove 'X_' section identifiers from route name
                  myObj.name = value.name.substring(2)
                  myObj.path = value.path
                  //console.log(myObj)
                  myMenu.push(myObj)
                  //console.log(myObj.name)

               }

           });
           console.log(myMenu)
           this.myMenu = myMenu;

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
        showBreadcrumb: false,
        myMenu: []
    }
  }
}
</script>


<style scoped>

</style>
