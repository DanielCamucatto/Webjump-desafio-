<template>
  <div id="container-category">
      <Header/>
      <Navigation/>
      <Store/>

  </div>
</template>

<script>
import Header from '../components/Header'
import Navigation from '../components/navigation'
import Store from '../components/Store'
export default {
    name: 'Category', 
    components:{
        Header, 
        Navigation,
        Store
    },
    
}
</script>

