<template>
<div class="app">
   <!-- app root -->
   <div id="wrapper">
     <!-- Sidebar -->
    <sidebar :segment="segment" />

     <!-- Page Content -->
     <div id="page-content-wrapper">
         <div id="page-context">
           <div class="row">
             <div class="col-md-12">
               <h1 id="rates" class="upper page-head">Convictions</h1>
             </div>


           </div>
             <div class="row">
               <div class="col-lg-12">
                 <!-- Main content here -->

               </div>

</div>
</div>
</div>
<my-footer />
</div>
</div>
   <!-- //app root -->
  </div>
</template>

<script>


import Sidebar from 'components/Sidebar'
import RenderChart from 'components/RenderChart'
// import TableToggle from '../../components/TableToggle.vue'
import MyFooter from 'components/Footer'
export default {
    name: 'S01P03',
    methods: {

    },
    mounted () {
      $(document).ready(function() {

      });

    },
    components: {

        RenderChart,
        Sidebar,
        MyFooter

    },
    data() {
        return {
            pageTitle: 'Section 01 - Page 03',
            displayTable: true,
            segment: 'robbery'
        }
    }
}
</script>
