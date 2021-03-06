<template>
  <div id="container-main">
    <div id="main-box">
        <aside id="main-navigation" class="main-menu">
            <ul class="main-nav-items">
                <li class=".main-nav-item"><router-link to="/">PÁGINA INICIAL</router-link></li>
                <li class=".main-nav-item"><router-link to="/camisetas">CAMISETAS</router-link></li>
                <li class=".main-nav-item"><router-link to="/calcas">CALÇAS</router-link></li>
                <li class=".main-nav-item"><router-link to="/sapatos">SAPATOS</router-link></li>
                <li class=".main-nav-item"><router-link to="/contato">CONTATO</router-link></li>
            </ul>
        </aside>
        <header></header>
        <main id="content">
            <h1>Seja bem-vindo!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde quae totam, pariatur placeat fuga eveniet labore iusto consequatur temporibus provident, dicta sint dolor nemo at corrupti numquam quasi deleniti!Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde quae totam, pariatur placeat fuga eveniet labore iusto consequatur temporibus provident, dicta sint dolor nemo at corrupti numquam quasi deleniti!Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde quae totam, pariatur placeat fuga eveniet labore iusto consequatur temporibus provident, dicta sint dolor nemo at corrupti numquam quasi deleniti!Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde quae totam, pariatur placeat fuga eveniet labore iusto consequatur temporibus provident, dicta sint dolor nemo at corrupti numquam quasi deleniti!Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda unde quae totam, pariatur placeat fuga eveniet labore iusto consequatur temporibus provident, dicta sint dolor nemo at corrupti numquam quasi deleniti!</p>
        </main>
        <footer></footer>
    </div>
  </div>
</template>

<script>

export default {
   
}
</script>

<style>
#main-box{
    display: grid;
    grid-template-columns: 20vh 3fr;
    grid-template-rows: 25vh 1fr 25vh;
    grid-template-areas: 
        "aside header"
        "aside main"
        "footer footer";

    grid-gap: 15px;
    margin: .8rem;
}
#main-navigation{
    background-color: #E2DEDB;
    grid-area: "aside";
    grid-row: 1/3;
}
.main-nav-items{
    margin-top: 5%;
}
.main-nav-item{
    cursor: pointer;
    margin-top: 5%;
}
.main-nav-item a {
    text-decoration: none;
    color: black!important;
    font-weight: 400;
}
.main-nav-item a:hover{
    border-bottom: solid 1px black;
    color: gray;
}
header{
    background-color:#ACACAC;
    grid-area: "header";
}
#content{
    grid-area: "main";
    grid-column-start: 2;
}
footer{
    background-color: #e62822;
    grid-area: "footer";
    grid-column: 1/3;
}
@media only screen and (max-width: 360px){
    #main-box{
        grid-template-columns: auto;
    }
    #main-navigation{
        display: none;
        position: absolute;
        width: 90%;
        animation: slide;
        animation-duration: 1s;
    }
    .main-nav-item a:hover{
    border-bottom: solid 1px black;
    color: gray;
    }
    header{
        grid-column: 1/3;
        height: 10vh;
    }
    #content h1{
        margin-top: -15%;
    }
}
</style>