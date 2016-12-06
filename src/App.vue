<template>
  <div id="app">
    <header>
    <navbar></navbar>
   
    </header>
    

<!--<center>
      <img src="./assets/logo.png">
  </center>-->
  <main id="main">
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <div style="height: 100px"></div>
</main>

<my-footer></my-footer>

            
             
            
  </div>
</template>

<script>
    import Navbar from './components/Navbar.vue'
    import MyFooter from './components/Footer.vue'

    export default {
        name: 'app',
        components: {
            
            Navbar,
            MyFooter
        },

    }
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s
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
    
    #main {
        flex: 1 0 auto;
    }
    
    footer.page-footer {
        margin-top: 20px;
        padding-top: 0px;
    }

     .hc {
        margin-top: 50px;
        margin-bottom: 50px;
        padding: 30px 0px 30px 0px;
    }
    
    .hc.last {
        margin-bottom: 50px
    }

    .image {margin: 0; padding: 0}
    .image.left {float: left; padding-right: 20px; margin-bottom: 10px;}

    .image.right {float: right; padding-left: 20px;}

h2.light, h3.light, h4.light {font-weight: 300; border-bottom: 1px solid #eee; padding-bottom: 12px}
</style>