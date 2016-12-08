<template>

  <div class="section1" style="margin-top: 50px">

  <div class="hero" style="margin-top: -50px; z-index: 5000">
   <div class="intro">
   </div>
 </div>

  

    <!-- .container is main centered wrapper -->
  <div class="container">
  <div class="row">
    <div class="col s12">
        <h1 style="color: #666">
            Tortor dignissim convallis aenean et tortor faucibus ornare suspendisse sed nisi lacus
</h1>

  
  </div>
  </div>

   
 <div class="row">  
    <div class="col s12">
        <div v-phtext:1p7s></div>
        <img src="http://placehold.it/350x250" class="image left hide-on-med-and-down ">
        <div v-phtext:3p5s></div>   
    </div>     
</div>


<div class="center-align" style="margin-top: 50px; margin-bottom: 50px;">
    
    <router-link class="white-text text-darken-3 waves-effect waves-light btn btn-large light-blue darken-4" to="/section01/page01" tag="a">
    Get Started&nbsp;&raquo;
    </router-link>
    
     </div>

 
    </div>



  </div>
</template>

<script>
    export default {
        name: 's01p00',
        data() {
            return {
               
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  
    

    .hero {
    height: 650px;
    background: url(../../assets/hero2.jpg) no-repeat center center;
    background-size: cover;
    margin-top: -31px;
    margin-bottom: 2px;
}


</style>