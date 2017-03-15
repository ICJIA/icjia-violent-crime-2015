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
              <div class="col-lg-12">
                <!-- Main content here -->

                <p>In 2015, the City of Chicago experienced 86 percent of all robberies in Cook County and 66 percent of all robberies in Illinois. However, robbery rates indicate Winnebago and Peoria counties also are experiencing more violence associated with robbery than other counties.</p>

<p>Data show black males averaging around 20 years of age are most often arrested for robbery.
   Data also indicates that because the majority of robbery offenders have previous
   criminal histories, earlier intervention is needed. Offender risk and needs
   assessments with resources to address the identified risks and needs
   could help reduce recidivism among this population and improve public safety.</p>
<citation />
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
import Citation from 'components/Citation'

export default {
    name: 'RobberyConclusion',
    metaInfo() {
    return {
      title: this.title

    }
  },
    mounted () {
      this.$ga.trackPage(this.$route.path,'ICJIA | ' + this.title)
      $(document).ready(function() {

        // $("#menu-toggle").click(function(e) {
        //     e.preventDefault();
        //     $("#wrapper").toggleClass("toggled");
        // });

      });

    },
    components: {

        Sidebar,
      MyFooter,
      SegmentHeader,
      Citation
    },
    data() {
        return {
            title: 'Robbery -- Conclusion',
            displayTable: true,
            segment: 'robbery'

        }
    }
}
</script>
