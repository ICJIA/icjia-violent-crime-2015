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
           {{this.segment}}</div>
         <ul class="nav nav-stacked collapse in left-submenu sidenav" id="item1">
           <li><router-link to="/murder/definition" class="sidenav-link">Definition</router-link></li>
           <li><router-link to="/murder/rates" class="sidenav-link">Rates</router-link></li>
           <li><router-link to="/murder/arrestees" class="sidenav-link">Arestees</router-link></li>
           <li><router-link to="/murder/convictions" class="sidenav-link">Convictions</router-link></li>
           <li><router-link to="/murder/sentences" class="sidenav-link">Sentences</router-link></li>
           <li><router-link to="/murder/conclusion" class="sidenav-link">Conclusion</router-link></li>
         </ul>
         <!-- <div style="margin-bottom: 30px; margin-top: 15px; font-size: 20px; color: #ccc; text-transform: uppercase; font-weight: 900">HOME</div>
         -->
<!-- <div style="margin-top: 30px; padding-left: 10px; padding-right: 10px; width: 100%">
<select class="form-control">
   <option>MURDER</option>
   <option>RAPE</option>
   <option>ROBBERY</option>
   <option>AGGRAVATED ASSAULT/BATTERY</option>

 </select>
 </div> -->
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

    <ul class="nav navbar-nav navbar-right">

        <li class="dropdown">
          <a href="#" class="dropdown-toggle"
          data-toggle="dropdown" role="button"
          aria-haspopup="true" aria-expanded="false">CRIME CATEGORY<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><router-link to="/murder" class="crime-category">Murder</router-link></li>
            <li><router-link to="/rape" class="crime-category">Rape</router-link></li>
            <li><router-link to="/robbery" class="crime-category">Robbery</router-link></li>
            <li><router-link to="/assault" class="crime-category">Assault</router-link></li>

          </ul>
        </li>
      </ul>

    <!-- Collect the nav links, forms, and other content for toggling -->

  </div><!-- /.container-fluid -->
</nav>
</section>
</template>

<script>
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
  data() {
      return {
        selected: null,
        options: ['foo','bar','baz']
      }
    },
  mounted () {
    $(document).ready(function() {

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
    color: #3e58f1 !important;
}

.crime-category {font-weight: 700; font-size: 18px;}
</style>
