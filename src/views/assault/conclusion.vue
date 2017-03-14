<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <sidebar :segment="segment" />

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div id="page-context">
            <segment-header :segment="segment" />
          <div class="row">
          <div class="col-md-12">
            <h1 id="conclusion" class="upper page-head">Conclusion</h1>
          </div>
        </div>
            <div class="row">
              <div class="col-md-12">

                <p>While Chicago has experienced the majority of aggravated assaults and batteries, aggravated assault rates are also high in smaller counties, such as Alexander, Washington, and Sangamon.</p>

<p>Data also show that because the majority of those arrested for violence have previous criminal histories, earlier intervention is needed. Offender risk and needs assessments with resources to address the identified risks and needs could help reduce recidivism among this population and improve public safety.</p>

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
import SegmentHeader from 'components/SegmentHeader'

export default {
    name: 'Assault -- Conclusion',
    mounted () {
      $(document).ready(function() {

      });

    },
    components: {

        Sidebar,
      MyFooter,
      SegmentHeader
    },
    metaInfo() {
    return {
      title: this.title

    }
  },
    data() {
        return {
            title: 'Assault -- Conclusion',
            displayTable: true,
            segment: 'assault'

        }
    }
}
</script>
