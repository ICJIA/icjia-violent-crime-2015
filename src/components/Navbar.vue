<template>
  <div class="hello">
  <!-- root -->  
   <!-- Dropdown Structure -->
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>

<ul id="slide-out" class="side-nav" style="overflow: auto; transform: translateX(0%);">
<li class="logo">
<div id="logo-container">
<img src="../assets/icjia.png" height="75">
</div>
</li>
<li class="divider"></li>
            
    <ul class="collapsible collapsible-accordion">
            <li class="bold"><a class="collapsible-header  waves-effect waves-light">Section 01</a>
              <div class="collapsible-body">
                <ul>
                  <li ><router-link to="/section01">Introduction</router-link></li>
                  <li ><router-link to="/section01/page01">Page 01</router-link></li>
                  <li > <router-link to="/section01/page02">Page 02</router-link></li>
                  <li > <router-link to="/section01/page03">Page 03</router-link></li>
                  <li > <router-link to="/section01/page04">Page 04</router-link></li>
                  <li > <router-link to="/section01/page05">Page 05</router-link></li>
                </ul>
              </div>
            </li>
            <li class="bold"><a class="collapsible-header  waves-effect waves-light">Section 02</a>
              <div class="collapsible-body">
              <ul>
                  <li ><router-link to="/section02">Introduction</router-link></li>
                  <li ><router-link to="/section02/page01">Page 01</router-link></li>
                  <li > <router-link to="/section02/page02">Page 02</router-link></li>
                  <li > <router-link to="/section02/page03">Page 03</router-link></li>
                  <li > <router-link to="/section02/page04">Page 04</router-link></li>
                  <li > <router-link to="/section02/page05">Page 05</router-link></li>
                </ul>
                
              </div>
            </li>
            <li class="bold active"><a class="collapsible-header waves-effect waves-light">Section 03</a>
              <div class="collapsible-body" style="display: block;">
                <ul>
                  <li ><router-link to="/section02">Introduction</router-link></li>
                  <li ><router-link to="/section02/page01">Page 01</router-link></li>
                  <li > <router-link to="/section02/page02">Page 02</router-link></li>
                  <li > <router-link to="/section02/page03">Page 03</router-link></li>
                  <li > <router-link to="/section02/page04">Page 04</router-link></li>
                  <li > <router-link to="/section02/page05">Page 05</router-link></li>
                </ul>
              </div>
            </li>
          </ul>
  </ul>



<nav>
  <div class="nav-wrapper grey darken-3">
    <a href="#!" class="brand-logo side-nav-activate" data-activates="slide-out"><i class="material-icons">menu</i></a>
    
    <div id="pageTitle">{{title}}</div>
    <!--
    <ul class="right hide-on-med-and-down">
      <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>-->
  </div>
</nav>
<span style="clear: both"></span>
<nav>
    <div class="nav-wrapper grey darken-4">
     
      <ul id="nav-mobile" class="right hide-on-med-and-down">
       <li v-for="item in menuArray" style="">
        <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </div>
  </nav>
 
  <!-- root -->  
  </div>

  
</template>

<script>
import routes from '../routes.js'


export default {
  name: 'Navbar',
  created: function() {
       this.setSegment();
       this.displayPageTitle()
       this.initSubnav()
    },
    watch: {
        '$route': 'updateSubnav'
    },
  methods: {
setSegment() {
            var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
            var pathArray = window.location.pathname.split('/');
            this.segment = '/' + pathArray[1];

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
            _.forOwn(routes, function(value, key) {
                if (value.path.left(seg.length) === seg) {
                    let obj = {}
                    // remove section identifiers from route name
                    obj.name = value.name.substring(2)
                    obj.path = value.path
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


        }
       
  },
  data () {
     return {
            title: null,
            subNav: null,
            segment: null,
            menuArray: null
        }
  }
}
</script>


<style>
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

</style>
