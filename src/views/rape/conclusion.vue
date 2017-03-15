<template>
  <div id="wrapper">
    <!-- Sidebar -->
    <sidebar :segment="segment" />

    <!-- Page Content -->
    <div id="page-content-wrapper">
        <div id="page-context">
          <segment-header :segment="segment" />
            <div class="row">
                <div class="col-lg-12">


   <!-- //app root -->
   <!-- <h1 id="conclusion" class="upper"><a href="#menu-toggle" id="menu-toggle"><i class="fa fa-bars "></i></a>&nbsp;&nbsp;Conclusion</h1> -->
   <h1 id="conclusion" class="upper page-head">Conclusion</h1>


<p>
While Cook County has experienced the majority of rapes, rape rates are highest in other counties, such as Vermilion, Jersey, Marion, and Richland.
</p>

<p>
Data indicates that because the majority of rape offenders have previous criminal histories, earlier intervention is needed. Offender risk and needs assessments with resources to address the identified risks and needs could help reduce recidivism among this population and improve public safety.
</p>

<citation />

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
    name: 'RapeConclusion',
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
    metaInfo() {
    return {
      title: this.title

    }
  },
    data() {
        return {
            title: 'Rape -- Conclusion',
            displayTable: true,
            segment: 'rape'

        }
    }
}
</script>
