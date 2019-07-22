<template>
        <div id='wrapper'>
        <Nav/>
        <transition name="fade">
        <router-view></router-view>      
        </transition>
        <Footer/>
</div>
 </template>


<script>
import Nav from './script/template/Nav.vue'
import Footer from './script/template/Footer.vue'
export default {
    components:{
        Nav, Footer
    }
}
</script>

<style lang="scss">
@import './assets/style/index.scss';
</style>


