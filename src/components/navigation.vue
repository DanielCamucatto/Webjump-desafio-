<template>
  <div id="container-nav">
      <nav id="nav-box">
          <ul id="nav-item">
              <li class="nav-itens"><router-link to="/">PÁGINA INICIAL</router-link></li>
              <li class="nav-itens"><router-link to="/camisetas">CAMISETAS</router-link></li>
              <li class="nav-itens"><router-link to="/calcas">CALÇAS</router-link></li>
              <li class="nav-itens"><router-link to="/sapatos">SAPATOS</router-link></li>
              <li class="nav-itens"><router-link to="/contato">CONTATO</router-link></li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#container-nav{
    background-color: red;
    padding: .2rem;
}
#nav-item{
    display: flex;
    justify-content: space-evenly;
    list-style: none;
}
.nav-itens a{
    text-decoration: none;
    color: white;
    cursor: pointer;
    font-weight: bold;
}
.nav-itens a:hover{
    color: #ccc;
}
@media only screen and (max-width: 360px){
    #container-nav{
        display: none;
    }   
}
</style>