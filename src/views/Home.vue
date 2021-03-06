<template>
<div id="container-home">
    <Header/>
    <Navigation/>
    <Main/>
</div>
</template>

<script>
import Header from '../components/Header';
import Navigation from '../components/navigation';
import Main from '../components/main';
export default {
    name: 'Home',
    components:{
        Header, 
        Navigation, 
        Main
    }

}
</script>

<style>
html,body{
  margin: 0;
  padding: 0;
  box-sizing: border-box;

}
</style>