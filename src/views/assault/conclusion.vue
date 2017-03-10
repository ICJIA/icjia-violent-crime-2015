<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <sidebar :segment="segment" />

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div id="page-context">
          <div class="row">
          <div class="col-md-12">
            <h1 id="conclusion" class="upper page-head">Conclusion</h1>
          </div>
        </div>
            <div class="row">
              <div class="col-md-12">



              </div>

          </div>
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
            segment: 'assault'

        }
    }
}
</script>
