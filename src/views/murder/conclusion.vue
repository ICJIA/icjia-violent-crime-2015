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

<p>In 2015, the City of Chicago accounted for 89 percent of all murders in Cook County and 64 percent of all murders in Illinois. Murder rates were also high in St. Clair, Marion, Marshall, Peoria, and Winnebago counties.</p>

<p>Data on individual characteristics of victims and offenders are limited, but the cities of Chicago and Rockford, data indicated black males were most often 1) perpetrators of murder and 2) victims of murder. More than 73 percent of all murder arrestees in Illinois were black, more than 94 percent were males, and their median age was 25 years old.</p>

<p>These data also indicate that because the majority of these offenders have previous criminal histories, earlier intervention is needed. Offender risk and needs assessment with resources to address the identified risks and needs could help reduce recidivism among this population and improve public safety.</p>

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
    name: 'MurderConclusion',
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
        SegmentHeader,
        Citation,
      MyFooter
    },
    metaInfo() {
    return {
      title: this.title

    }
  },
    data() {
        return {
            title: 'Murder -- Conclusion',
            displayTable: true,
            segment: 'murder'

        }
    }
}
</script>
