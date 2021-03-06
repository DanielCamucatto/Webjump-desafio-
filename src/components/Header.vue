<template>
  <div id="container-header">
    <div class="access">
        <a class="access-itens" title="Acesse sua conta">Acesse sua conta</a>
        <span>ou</span>
        <a class="access-itens" title="Cadastre-se">Cadastre-se</a>
    </div>
    <div class="header-box">
        <div class="menuMobile">
            <div @click="btnMenu()">&equiv;</div>
        </div>
        <figure id="logo">
            <img src="../assets/img/logo.jpeg" alt="logo-webjump">
        </figure>
        <div class="search">
            <input value="" type="search">
            <button id="btn-header">BUSCAR</button>
        </div>
        <figure id="glass">
            <img src="../assets/img/glass.jpg" alt="">
        </figure>
    </div>
    
  </div>
</template>

<script>
export default {
 methods:{
        btnMenu(){
            let btnMobile = document.getElementById('main-navigation'); 
            console.log(btnMobile); 
            if(btnMobile.style.display == 'none'){
                btnMobile.style.display = 'block'
            }else{
                btnMobile.style.display = 'none'
            }
        }
    }
}
</script>

<style>

.access{
    background-color: black;
    color: white;
    display: flex;
    justify-content: end;
    padding: 1%;
}
.access-itens{
    color: white;
    padding: 0px 1%;
    cursor: pointer;
    transition: 2ms;
    -webkit-text-decoration-line:underline;
            text-decoration-line:underline;
}
.access-itens:hover{
    color: #ccc;
}
.search{
    display: flex;
    justify-content: end;
    margin: 2% ;
}
.header-box{
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items:center;
    width: 90%;
    margin: auto
}

.menuMobile{
    display: none;
}
#logo{
    margin-left: auto;
}
.search input{
    background-color: white;
    border: solid 1px #ccc;
    width: 60%;
    height: 30%;
    padding: 1%;
    margin-right: -1%;
}
#btn-header{
    color: white;
    background-color: #e62822;
    border: none;
    font-weight: bold;
    cursor: pointer;
}
#glass{
    display: none;
}
@media only screen and (max-width: 360px){
    .access{
        justify-content: center;
    }
    .search {
        display: none;
    }
    
    #glass{
        display: block;
        cursor: pointer;
        font-size: 20px;
    }
    .header-box{
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        width: 90%; 
        margin: 2%;

    }
    .menuMobile{
        display: block;
        font-size: 50px;
        text-align: center;
        cursor: pointer;
        margin-right: 40px;
        padding: 20%;
    }
    #logo{
        margin: auto;
        display: block;
    }
    @keyframes slide {
         from{opacity: 0; transform: translateX(-100px) ;}
         to{opacity: 1; transform: translateX(0);}
    }
}


</style>