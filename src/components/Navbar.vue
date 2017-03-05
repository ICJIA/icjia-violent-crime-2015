<template>
  <div class="hello">
  <!-- root -->
   <!-- Dropdown Structure -->

   <!-- <nav class="navbar fixed-top navbar-toggleable-md  navbar-inverse bg-inverse">
     <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
       <router-link to="/" class="navbar-brand">ILLINOIS Violent Crime 2015 | MURDER</router-link>
       <ul class="navbar-nav mr-auto mt-2 mt-lg-0" >
         <li v-for="item in menuArray" @click="clickLink" class="nav-item" >
          <router-link :to="item.path"  tag="a" class="test nav-link">{{item.name}}</router-link>
          </li>

       </ul>

     </div>
   </nav> -->

   <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        

          <a class="navbar-brand" href="#">Project name</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li v-for="item in menuArray" @click="clickLink" >
             <router-link :to="item.path"  tag="a" class="test nav-link">{{item.name}}</router-link>
             </li>
          </ul>

        </div>
      </div>
    </nav>


<!-- <div v-if="showBreadcrumb" style="float: right; margin-right: 40px; margin-top: 10px;" class="segmentDisplay">
  <a class='dropdown-button' style="text-transform: uppercase">
  {{currentSegment}} / {{page}}<i class="material-icons right"></i>
  </a>
  </div> -->



  <!-- root -->
  </div>


</template>

<script>

import routes from '../routes.js'



export default {
  name: 'Navbar',
  updated () {


    $('.segmentDisplay').addClass('animated').addClass('fadeInRight')
      $( ".segmentDisplay" ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(".segmentDisplay").removeClass('animated fadeInRight')});


  },

  created: function() {

       this.setSegment();
       this.displayPageTitle()
       this.initSubnav()

    },
    mounted: function () {
      // Fade in breadcrumb, wait for complete, then remove animate class

       $(function() {


          $('.segmentDisplay').addClass('animated').addClass('fadeInRight')
          $( ".segmentDisplay" ).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(".segmentDisplay").removeClass('animated fadeInRight')});
        })

    },
    watch: {
        '$route': 'updateSubnav'
    },
  methods: {
    clickLink (e) {

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
            _.forOwn(routes, function(value, key) {
                if (value.path.left(seg.length) === seg) {
                    let obj = {}
                    // remove 'X_' section identifiers from route name
                    obj.name = value.name.substring(2)
                    obj.path = value.path
                    if (obj.name != 'direct' && obj.name != 'rediect') {
                      menu.push(obj)
                    }
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

            //this.title = 'ICJIA Violent Crime Data Project 2017 / ' + this.segment.slice(1)
            this.title = 'ICJIA Violent Crime Data Project 2017 '

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
.brand-logo {margin-left: 20px}
ul.side-nav li.logo {
  height: 120px;
    text-align: center;
    margin-top: 0px;
    padding-top: 20px;

    margin-bottom: -10px;
    background: #ccc;
}


#pageTitle {margin-left: 70px; text-transform: uppercase;}
ul.subnav li {text-transform: uppercase; font-weight: 300}

a.test {color: #29b6f6; font-weight: 400}
a.test:hover {color: #aaa; font-weight: 400}

.side-nav .collapsible-header, .side-nav.fixed .collapsible-header {

    font-weight: 900;
    text-transform: uppercase;
}
.text-container {padding: 10px 20px 10px 20px; line-height: 20px}
.segmentDisplay {font-weight: 400; }
.segmentDisplay:hover {cursor: pointer; cursor: hand;}
.segmentDisplay:hover a {color: #aaa}
.side-nav-hide {display: none}
</style>

<style>
.navbar-brand {text-transform: uppercase; margin-right: 30px}
li.nav-item a {text-transform: uppercase; font-size: 16px}
</style>
