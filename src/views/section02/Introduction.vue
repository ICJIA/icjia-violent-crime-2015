<template>

  <div class="section1" style="margin-top: 50px">

  

  

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
        <img src="http://placehold.it/450x350" class="image left hide-on-med-and-down">
        <div v-phtext:4p7s></div>   
    </div>     
</div>


<div class="center-align" style="margin-top: 30px">
    
    <router-link class="white-text text-darken-2 waves-effect waves-light btn  light-blue darken-4" to="/section01/page01">Get Started&nbsp;&raquo;</router-link>
    
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