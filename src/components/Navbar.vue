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
      <ul class="left" style="margin-left: 5px;">
        <li style="font-weight: 300; font-size: 22px; text-transform: uppercase" >
        {{title}}
        </li>
      </ul>
    </div>
  </nav>
</div>

  <div v-if="subNav === 'section01'">
    <subnav01></subnav01>
  </div>

  <div v-if="subNav === 'section02'">
    <subnav02></subnav02>
  </div>

  

  <md-sidenav id="mySideNav" class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
  <md-toolbar>
    <div class="md-toolbar-container">
      <h3 class="md-title">ICJIA Violent Crime 2017</h3>
    </div>
  </md-toolbar>
  <div style="padding: 20px">
  <ul>
  <div @click="closeLeftSidenav">
    <router-link to="/section01">Section 01</router-link>
  <div>

  <div @click="closeLeftSidenav">
    <router-link to="/section02">Section 02</router-link>
  <div>

  <div @click="closeLeftSidenav">
    <router-link to="/section03">Section 03</router-link>
  <div>

  <div @click="closeLeftSidenav">
    <router-link to="/section04">Section 04</router-link>
  <div>
  
  </ul>

</div>

  <md-button class="md-raised md-accent" @click="closeLeftSidenav">Close</md-button>
</md-sidenav>
<div style="clear: both"></div>



  </div>



</template>

<script>



import Subnav01 from './Subnav01.vue'
import Subnav02 from './Subnav02.vue'
export default {
  components: {
    
    Subnav01,
    Subnav02
  },
  mounted: function () {
     this.displayPageTitle()
    
  },
  updated: function() {
    this.displayPageTitle()
  },
  data: function () {
    return {
      title: null,
      subNav: null
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

    displayPageTitle () {

      console.log('Route: ',this.$route)
      var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
      var pathArray = window.location.pathname.split( '/' );
      
      this.subNav = pathArray[1];
      console.log('Subnav',this.subNav);
      this.title = 'ICJIA Violent Crime 2017 / ' + pathArray[1];



    }
  }
};
</script>

<style>
.md-theme-default .md-sidenav .md-sidenav-content, .md-theme-default.md-sidenav .md-sidenav-content {
    z-index: 10000 !important;
    position: fixed !important;
}

ul.centered {
   transform: translateX(-15%);
  webkit-transform: translateX(15%);
}

ul.centered li {}


</style>