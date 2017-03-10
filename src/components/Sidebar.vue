<template>

<section>
  <div id="sidebar-wrapper">
      <ul class="sidebar-nav">

          <li class="sidebar-brand" style="margin-left: -15px; background: #555; border-bottom: 1px solid #777">
              <router-link to="/" style="color: #fff;">
                  <i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;HOME
              </router-link>

          </li>
          <ul class="nav nav-pills nav-stacked left-menu" id="stacked-menu" style="margin-top: 15px">
            <li>
         <!-- <a href="#" data-target="#item1" data-toggle="collapse" data-parent="#stacked-menu" style="font-size: 24px">MURDER<span class="caret arrow"></span></a> -->
          <div style="margin-bottom: 10px; margin-top: 15px; font-size: 20px; color: #ccc; text-transform: uppercase; font-weight: 900">
           <span style="color: #415cfc">{{this.segment}}</span></div>
         <ul class="nav nav-stacked collapse in left-submenu sidenav" id="item1">

           <li v-for="item in menuArray" @click="clickLink" >
            <router-link :to="item.path"  :keep-alive="false" tag="a" class="test nav-link">{{item.name}}</router-link>
            </li>
         </ul>


 <div style="border-top: 1px solid #ccc; padding-left: 20px; margin-top: 30px; width: 100%">
   <div style="margin-top: 30px; margin-left: -20px; font-size: 18px; color: #415cfc; font-weight: 900; text-transform: uppercase">Crime Category</div>
<!-- <select
  class="form-control"
  id="route-select"
  style="margin-top: 30px; font-size: 12px; font-weight: 900"
  v-model="selected"
  v-on:change="routeOnChange">
   <option class="med-heavy" value="murder">MURDER</option>
   <option class="med-heavy" value="rape">RAPE</option>
   <option class="med-heavy" value="robbery">ROBBERY</option>
   <option class="med-heavy" value="assault">AGGRAVATED ASSAULT/BATTERY</option>

 </select> -->

 <!-- <div class="well">{{this.segment}}</div> -->

 <!-- <ul class="nav nav-stacked collapse in left-submenu sidenav" id="item1">

   <li v-for="item in menuArray" @click="clickLink" >
    <router-link :to="item.path"  tag="a" class="test nav-link">{{item.name}}</router-link>
    </li>
 </ul> -->

 <ul class="nav nav-stacked left-submenu sidenav" id="item1" style="margin-left: -20px">

   <li style="margin-top: 20px">
    <router-link to="/murder/definition" style="color: #fff">Murder</router-link></li>
    <li><router-link to="/rape/definition" style="color: #fff">Rape</router-link></li>
    <li><router-link to="/robbery/definition" style="color: #fff">Robbery</router-link></li>
    <li><router-link to="/assault/definition" style="color: #fff">Aggravated Assault</router-link></li>

 </ul>


 </div>
       </li>

     </ul>

      </ul>
  </div>
  <!-- /#sidebar-wrapper -->

  <nav class="navbar navbar-inverse navbar-static-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">

      <div class="navbar-brand" id="menu-toggle">
        <span ><i class="fa fa-1x fa-bars " style="color: #fff"></i></span>&nbsp;&nbsp;ILLINOIS VIOLENT CRIME 2015</div>
    </div>

    <!-- <ul class="nav navbar-nav navbar-right">

        <li class="dropdown">
          <a href="#" class="dropdown-toggle"
          data-toggle="dropdown" role="button"
          aria-haspopup="true" aria-expanded="false">CRIME CATEGORY<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><router-link to="/murder" class="crime-category">Murder</router-link></li>
            <li><router-link to="/rape" class="crime-category">Rape</router-link></li>
            <li><router-link to="/robbery" class="crime-category">Robbery</router-link></li>
            <li><router-link to="/assault" class="crime-category">Aggravated Assault/Battery</router-link></li>

          </ul>
        </li>

      </ul> -->

    <!-- Collect the nav links, forms, and other content for toggling -->

  </div><!-- /.container-fluid -->
</nav>
</section>
</template>

<script>
import routes from '@/routes.js'
import vSelect from "vue-select"
export default {
  props: {
      segment: {
          type: String,
          required: true
      }

  },
  components: {
    vSelect
  },
  created: function() {

       //this.setSegment();
       this.displayPageTitle()
       this.initSubnav()
       console.log('segment: ',this.segment)

    },
    methods: {
      clickLink (e) {

      },

      routeOnChange (e) {
        let selectedRoute = document.getElementById("route-select").value;
        document.getElementById("route-select").value=''
        this.$router.push('/' + selectedRoute)

      },

      // setSegment() {
      //         var newURL = window.location.protocol + "://" + window.location.host + "/" + window.location.pathname;
      //         var pathArray = window.location.pathname.split('/');
      //         this.segment = '/' + pathArray[1];
      //         this.currentSegment = pathArray[1];
      //         this.page = pathArray[2];
      //         if (this.page) {
      //           this.showBreadcrumb = true
      //         } else {
      //           this.showBreadcrumb = false
      //         }
      //
      //     },

          initSubnav() {
              // add quick 'left' method to String
              String.prototype.left = function(n) {
                  return this.substring(0, n);
              }
              this.makeMenu()
          },

          makeMenu() {
              let menu = [];
              var seg = '/' + this.segment
              //console.log(seg)
              // use lodash to cycle through routes
              _.forOwn(routes, function(value, key) {
                  //console.log(value.path,seg)
                  if (value.path.left(seg.length) === seg) {

                      let obj = {}
                      // remove 'X_' section identifiers from route name
                      obj.name = value.name.substring(2)
                      obj.path = value.path

                      if (obj.name != 'direct' && obj.name != 'Redirect') {
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
  data() {
      return {
        title: null,
        subNav: null,
        // segment: null,
        menuArray: null,
        page: null,
        selected: '',
        currentSegment: null,
        showBreadcrumb: false
      }
    },
  mounted () {
    //document.getElementById("route-select").value=this.segment
    console.log('set')
    //this.selected = this.segment
    var self=this
    $(document).ready(function() {
      console.log(self.segment)
      $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
      });

    });

  }
}


</script>

<style scoped>
.navbar-inverse .navbar-nav>li>a {
    color: #415cfc !important;
}

.med-heavy {font-weight: 900; color: #666; font-size: 12px;}
.crime-category {font-weight: 700; font-size: 18px;}
</style>
