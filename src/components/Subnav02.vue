<template>
 <div>
<nav>
    <div class="nav-wrapper grey darken-4">
     
      <span style="clear:both"></span>
      <ul id="nav-mobile" class="hide-on-med-and-down">
         <li><router-link to="/section02">Introduction</router-link></li>
        <li><router-link to="/section02/page01">Page 1</router-link></li>
        <li><router-link to="/section02/page02">Page 2</router-link></li>
        <li><router-link to="/section02/page03">Page 3</router-link></li>
        <li><router-link to="/section02/page04">Page 4</router-link></li>
        <li><router-link to="/section02/page05">Page 5</router-link></li>
        
      </ul>
    </div>
  </nav>



  

  
<div style="clear: both"></div>



  </div>



</template>

<script>
export default {
  
};
</script>

<style scoped>



nav ul a {
    font-weight: 700;
    font-size: 1.3rem !important;
    text-transform: uppercase;
    
}

nav ul{
  transform: translateX(23%);
  webkit-transform: translateX(-23%);
}
</style>