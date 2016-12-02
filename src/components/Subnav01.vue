<template>
 <div>
<nav>
    <div class="nav-wrapper grey darken-4">
     
      <ul id="nav-mobile" class="hide-on-med-and-down">
         <li><router-link to="/">Introduction</router-link></li>
        <li><router-link to="/section01/page01">Page 1</router-link></li>
        <li><router-link to="/section01/page02">Page 2</router-link></li>
        <li><router-link to="/section01/page03">Page 3</router-link></li>
        <li><router-link to="/section01/page04">Page 4</router-link></li>
        <li><router-link to="/section01/page05">Page 5</router-link></li>
        
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
    font-size: 1.6rem !important;
    text-transform: uppercase;
    
}

nav ul{
  transform: translateX(23%);
  webkit-transform: translateX(-23%);
}
</style>