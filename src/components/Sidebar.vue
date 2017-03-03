<template>

  <div id="sidebar-wrapper">
      <ul class="sidebar-nav">

          <li class="sidebar-brand" style="background: #555">
              <router-link to="/" style="color: #fff;">
                  IL Violent Crime 2015
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
       </li>

     </ul>

      </ul>
  </div>
  <!-- /#sidebar-wrapper -->

</template>

<script>

export default {
  props: {
      segment: {
          type: String,
          required: true
      }

  }
}


</script>
