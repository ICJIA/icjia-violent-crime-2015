<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <sidebar :segment="segment" />

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div id="page-context">
          <div class="col-md-12">
            <h1 id="conclusion" class="upper page-head">Conclusion</h1>
          </div>
            <div class="row">
              <div class="col-lg-12">
                <!-- Main content here -->

              </div>
  </div>
  <my-footer />
</div>
</div>
</div>

</template>

<script>


import Sidebar from 'components/Sidebar'
import MyFooter from 'components/Footer'

export default {
    name: 'S01P01',
    mounted () {
      $(document).ready(function() {

        // $("#menu-toggle").click(function(e) {
        //     e.preventDefault();
        //     $("#wrapper").toggleClass("toggled");
        // });

      });

    },
    components: {

        Sidebar,
      MyFooter
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 01',
            displayTable: true,
            segment: 'robbery'

        }
    }
}
</script>
