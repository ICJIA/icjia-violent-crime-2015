<template>
  <div id="app">
    
    <navbar></navbar>
    
    <transition name="fade" mode="out-in">
    <keep-alive>
      <router-view class="view"></router-view>
      </keep-alive>
       
    </transition>
    <my-footer></my-footer>

   
    
  
    
  </div>
</template>

<script>
import Navbar from './components/Navbar'
import MyFooter from './components/Footer'

export default {
  name: 'app',
    created: function () {

    },
  
  components: {
    MyFooter,
    Navbar
  }
}
</script>

<style>
 .fade-enter-active,
    .fade-leave-active {
        transition: opacity .1s
    }
    
    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
    
    .slide-fade-enter-active {
        transition: all .1s ease;
    }
    
    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    
    .slide-fade-enter,
    .slide-fade-leave-active {
        transform: translateX(400px);
        opacity: 0;
    }
    
    body {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        min-height: 100vh;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
        font-family: 'Lato', sans-serif;
        font-size: 16px;
        color: #555;
    }

     h1, h2, h3, h4, h5 {
    font-family: "Oswald",sans-serif;
    font-weight: 700 !important;
    text-transform: uppercase;
}
    
    
    .hc {
        margin-top: 60px;
        margin-bottom: 50px;
        padding: 30px 0px 30px 0px;
    }
    .dt {
        padding: 0px; margin-top: -1px;
    }
   
    .graphic-container {padding: 40px 0px 0; margin-bottom: 80px; margin-top: 80px}

    h3.pageTitle {margin-bottom: 50px; border-bottom: 1px solid #ddd; padding-bottom: 18px}

    .hc-table table tbody tr td {padding-left: 25px;}
    .carousel {margin-top: 30px; margin-bottom: 50px}

    .image {margin: 0; padding: 0}
    .image.left {float: left; padding-right: 20px; margin-bottom: 10px;}

    .image.right {float: right; padding-left: 20px;}

</style>
