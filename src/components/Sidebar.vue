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
       </li>

     </ul>

      </ul>
  </div>
  <!-- /#sidebar-wrapper -->

  <nav class="navbar navbar-inverse navbar-static-top">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">

      <div class="navbar-brand" id="menu-toggle"><span ><i class="fa fa-1x fa-bars " style="color: #fff"></i></span>&nbsp;&nbsp;ILLINOIS VIOLENT CRIME 2015</div>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->

  </div><!-- /.container-fluid -->
</nav>
</section>
</template>

<script>

export default {
  props: {
      segment: {
          type: String,
          required: true
      }

  },
  mounted () {
    $(document).ready(function() {

      $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#wrapper").toggleClass("toggled");
      });
        // call Datatables to render

    });

  }
}


</script>
