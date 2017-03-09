<template>
  <section>

    <div id="wrapper">
      <!-- Sidebar -->
      <sidebar :segment="segment" />

      <!-- Page Content -->
      <div id="page-content-wrapper">
          <div id="page-context">
            <div class="row">
              <div class="col-md-12">
                <h1 id="sentences"
                class="upper page-head">Sentences</h1>
              </div>


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

</section>
</template>

<script>


import Sidebar from 'components/Sidebar'
import MyFooter from 'components/Footer'
import RenderChart from 'components/RenderChart.vue'

export default {
    name: 'S01P04',
    methods: {

    },
    mounted () {

    },
    components: {

        Sidebar,
        MyFooter,
        RenderChart
    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 04',
            displayTable: true,
            segment: 'robbery'
        }
    }
}
</script>
