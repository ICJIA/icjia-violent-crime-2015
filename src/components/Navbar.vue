<template>
 

<div v-md-theme="'default'">

<div class="navbar-fixed ">
 
    <nav class="nav-extended ">
    <div class="nav-wrapper grey darken-3">
      <md-button class="md-icon-button" style="margin-top: 10px" @click="toggleLeftSidenav">
          <md-icon>menu</md-icon>
      </md-button>
      
    </div>
  </nav>
</div>


  <subnav01></subnav01>

  <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
  <md-toolbar>
    <div class="md-toolbar-container">
      <h3 class="md-title">Sidenav content</h3>
    </div>
  </md-toolbar>
  <div style="padding: 20px">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cupiditate esse necessitatibus beatae nobis, deserunt ut est fugit, tempora deleniti, eligendi commodi doloribus. Nemo, assumenda possimus, impedit inventore perferendis iusto!</p>
</div>

  <md-button class="md-raised md-accent" @click="closeLeftSidenav">Close</md-button>
</md-sidenav>
<div style="clear: both"></div>



  </div>



</template>

<script>
import Subnav01 from './Subnav01.vue'
export default {
  components: {
    
    Subnav01
  },
  methods: {
    toggleLeftSidenav() {
      this.$refs.leftSidenav.toggle();
    },
    // toggleRightSidenav() {
    //   this.$refs.rightSidenav.toggle();
    // },
    // closeRightSidenav() {
    //   this.$refs.rightSidenav.close();
    // },
    closeLeftSidenav() {
      this.$refs.leftSidenav.close();
    },
    open(ref) {
      console.log('Opened: ' + ref);
    },
    close(ref) {
      console.log('Closed: ' + ref);
    }
  }
};
</script>

<style>
.md-theme-default .md-sidenav .md-sidenav-content, .md-theme-default.md-sidenav .md-sidenav-content {
    z-index: 10000 !important;
}


</style>