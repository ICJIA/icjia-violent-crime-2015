<template>
 

<div v-md-theme="'default'">

<div class="navbar-fixed ">
 
   
  <nav>
    <div class="nav-wrapper grey darken-3">
      
      <ul id="nav-mobile" class="left">
      <li><md-button class="md-icon-button" style="margin-top: 10px" @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
      </md-button></li>
      </ul>
      <ul class="center-align hide-on-med-and-down" style="margin-left: 5px;">
        <li style="" class="siteTitle" >
        {{title}}
        </li>
      </ul>
    </div>
  </nav>
</div>

<nav class="hide-on-med-and-down">
    <div class="nav-wrapper grey darken-4 ">
     
      <span style="clear:both"></span>
      
      <ul id="nav-mobile" class="hide-on-med-and-down subnav right">
        <li v-for="item in menuArray" style="">
        <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
     
    </div>
  </nav>







  <md-sidenav id="mySideNav" class="md-left main-sidebar md-sidenav md-fixed" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
  
    <!--
        <md-toolbar><div class="md-toolbar-container">
      <h3 class="md-title">ICJIA Violent Crime 2017</h3>
    </div>
     </md-toolbar>-->
    <div class="md-toolbar vue-material-logo md-theme-white" style="align-items: center;
  justify-content: center;">
    <a href="#/" class="router-link-active">
    <img src="../assets/icjia.png" width="150" alt="Vue"></a></div>

    <div class="md-toolbar vue-material-logo" style="align-items: center;
  justify-content: center; font-size: 14px; background-color: white; padding: 15px 10px 15px 10px">
  <h3 style="font-size: 16px; font-weight: 700; text-transform: uppercase;">Lorem ipsum vue seliat</h3>
  <div v-phtext:1p3s></div>
    </div>
 
  
<div v-md-theme="'default'">

	<div class="phone-viewport">
  <md-list>
  
    <md-list-item>
     
      <span>Section 01</span>

      <md-list-expand>
        <md-list>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section01">Introduction</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section01/page01">Page 01</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section01/page02">Page 02</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section01/page03">Page 03</router-link>
            </md-list-item>

        </md-list>
      </md-list-expand>
    </md-list-item>

    <md-list-item>
      
      <span>Section 02</span>

      <md-list-expand>
        <md-list>
          <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02">Introduction</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02/page01">Page 01</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02/page02">Page 02</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02/page03">Page 03</router-link>
            </md-list-item>

        </md-list>
    </md-list-item>


    <md-list-item>
      
      <span>Section 03</span>

      <md-list-expand>
        <md-list>
          <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02">Introduction</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02/page01">Page 01</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02/page02">Page 02</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02/page03">Page 03</router-link>
            </md-list-item>

        </md-list>
    </md-list-item>



     <md-list-item>
      
      <span>Section 04</span>

      <md-list-expand>
        <md-list>
          <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02">Introduction</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02/page01">Page 01</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02/page02">Page 02</router-link>
            </md-list-item>
            <md-list-item class="md-inset" @click="closeLeftSidenav">
                <router-link to="/section02/page03">Page 03</router-link>
            </md-list-item>

        </md-list>
    </md-list-item>

    

    
</div>

</div>
<div style="text-align: center; margin-top: 20px;">
<md-button class="md-raised md-accent" @click="closeLeftSidenav">Close</md-button>
</md-sidenav>
</div>






  </div>



</template>

<script>

import routes from '../routes.js'


export default {
    components: {


    },
    created: function() {
        this.setSegment();
        this.displayPageTitle()
        this.initSubnav()

    },
    watch: {
        '$route': 'updateSubnav'
    },
    updated: function() {

    },
    data: function() {
        return {
            title: null,
            subNav: null,
            segment: null,
            menuArray: null
        }
    },
    methods: {
        toggleLeftSidenav() {
            this.$refs.leftSidenav.toggle();
        },

        closeLeftSidenav() {
            this.$refs.leftSidenav.close();
        },
        open(ref) {
            console.log('Opened: ' + ref);
        },
        close(ref) {
            console.log('Closed: ' + ref);
        },

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
    }
};
</script>

<style>

.siteTitle {
    font-weight: 900; font-size: 1.1rem; text-transform: uppercase
}
.md-theme-default .md-sidenav .md-sidenav-content, .md-theme-default.md-sidenav .md-sidenav-content {
    z-index: 10000 !important;
    position: fixed !important;
}

ul.centered {
   transform: translateX(28%);
  webkit-transform: translateX(-28%);
}

ul.subnav li {text-transform: uppercase; font-weight: 400;}

ul#sideNavLink li {margin-bottom: 15px; font-weight: 700; text-transform: uppercase;}


.main-sidebar.md-sidenav .main-sidebar-links {
    overflow: auto;
}
.md-list-item-holder span {font-weight: 700; color: #333; font-size: 16px}
.md-inset {margin-left: -30px}

.main-sidebar.md-sidenav .vue-material-logo {
    font-size: 24px;
}
.main-sidebar.md-sidenav .md-toolbar {
    min-height: 172px;
    border-bottom: 1px solid rgba(0,0,0,.12);
}

.md-theme-white .md-toolbar, .md-theme-white.md-toolbar {
    background-color: #fff;
    color: rgba(0, 0, 0, .87);
}

.main-sidebar.md-sidenav .md-toolbar {
    min-height: 110px;
    border-bottom: 1px solid rgba(0,0,0,.12);
}

.md-theme-white .md-toolbar, .md-theme-white.md-toolbar {
    background-color: #ddd !important
}
</style>