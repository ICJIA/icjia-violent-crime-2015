<template>

<section>
  <div id="sidebar-wrapper">
      <ul class="sidebar-nav">

          <li class="sidebar-brand" style="margin-left: -15px; background: #555; border-bottom: 1px solid #777">
              <router-link to="/" style="color: #fff;">
                  <i class="fa fa-home" aria-hidden="true"></i>&nbsp;&nbsp;HOME
              </router-link>

          </li>
          <ul class="nav nav-pills nav-stacked left-menu" style="margin-top: 15px">
            <li class="menu-header">
         <!-- <a href="#" data-target="#item1" data-toggle="collapse" data-parent="#stacked-menu" style="font-size: 24px">MURDER<span class="caret arrow"></span></a> -->
          <!-- <div style="margin-bottom: 10px; margin-top: 15px; font-size: 20px; color: #ccc; text-transform: uppercase; font-weight: 900">
           <span style="color: #415cfc"> -->
             <span v-if="segment === 'assault'" >
             Aggravated Assault
           </span>
           <span v-else>
             {{this.segment}}
           </span>
         </li>

           <!-- </span></div> -->

         <ul class="nav nav-stacked collapse in left-submenu sidenav" id="item1">

           <li v-for="item in menuArray" @click="clickLink" style="margin-top: 15px;">
            <router-link :to="item.path"  tag="a" class="test nav-link">{{item.name}}</router-link>
            </li>
         </ul>


 <div style="border-top: 1px solid #ccc; padding-left: 20px; margin-top: 30px; margin-bottom: 50px; width: 100%">
   <div class="menu-header" style="margin-top: 20px;">Crime Category</div>

 <ul class="nav nav-stacked collapse in left-submenu sidenav" style="margin-left: -15px">

   <li style="margin-top: 15px;">
    <router-link to="/murder/definition" style="color: #fff">Murder</router-link></li>
    <li style="margin-top: 15px;"><router-link to="/rape/definition" style="color: #fff">Rape</router-link></li>
    <li style="margin-top: 15px;"><router-link to="/robbery/definition" style="color: #fff">Robbery</router-link></li>
    <li style="margin-top: 15px;"><router-link to="/assault/definition" style="color: #fff">Aggravated Assault</router-link></li>

 </ul>


 </div>
       </li>

     </ul>

      </ul>
  </div>
  <!-- /#sidebar-wrapper -->

  <nav class="navbar navbar-inverse navbar-static-top">
  <div class="container-fluid">

    <div class="navbar-header">

      <div class="navbar-brand" id="menu-toggle">
        <span ><i class="fa fa-1x fa-bars " style="color: #fff"></i></span>&nbsp;&nbsp;ILLINOIS VIOLENT CRIME 2015</div>
    </div>



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
       //console.log('segment: ',this.segment)

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

    //this.selected = this.segment
    var self=this
    $(document).ready(function() {
      //console.log(self.segment)
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

.menu-header {margin-left: -5px; margin-top: 10px; font-size: 18px; color: #415cfc; font-weight: 900; text-transform: uppercase}
.med-heavy {font-weight: 900; color: #666; font-size: 12px;}
.crime-category {font-weight: 700; font-size: 18px;}
</style>
