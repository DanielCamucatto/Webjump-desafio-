<template>
  <div id="container-store">
    <aside id="filter">
      <div class="breadcrumbs">
        <nav class="breadcrumb has-succeeds-separator is-small block" aria-label="breadcrumbs">
          <ul>
            <li><router-link to="/">Página inicial</router-link></li>
            <li class="is-active"><router-link to="/categoria">categoria</router-link></li>
          </ul>
        </nav>
      </div>
      <nav id="menu-store">
        <h2>FILTRE POR</h2>
        <section id="categories">
          <h3>CATEGORIA</h3>
          <nav>
            <ul id="categories-list">
              <li class="category-item"><router-link to="/camisetas">Roupas</router-link></li>
              <li class="category-item"><router-link to="/sapatos">Sapatos</router-link></li>
              <li class="category-item">Acessorios</li>
            </ul>
          </nav>
        </section>
        <section id="colors">
          <h3>CORES</h3>
          <ul id="colors-list">
            <li class="color-item vermelho"></li>
            <li class="color-item laranja"></li>
            <li class="color-item verde"></li>
          </ul>
        </section>
        <section id="type">
          <h3>TIPO</h3>
          <ul id="type-list">
            <li class="type-item">Corrida</li>
            <li class="type-item">Caminhada</li>
            <li class="type-item">Casual</li>
            <li class="type-item">Social</li>
          </ul>
        </section>
      </nav>
    </aside>
    <main id="content-store">
      <section>
        <h1>Sapatos</h1>
        <div id="test">
          <div class="ordenacao">
            <img src="../assets/img/grid.jpg" alt="" />
            <img src="../assets/img/grid2.jpg" alt="" />
          </div>
          <div id="filter-produtos">
            <label for="">ORDENAR POR</label>
            <select name="" id="">
              <option value="">Preço</option>
              <option value="">Cor</option>
              <option value="">Valor</option>
            </select>
          </div>
        </div>
      </section>
      <section id="main-products">
        <div class="product">
          <figure>
            <img src="../assets/img/shoes-1.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/shoes-5.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/shoes-3.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/shoes-4.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/pants-4.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/pants-1.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/pants-2.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/pants-1.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/shirt-1.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/shirt-2.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/shirt-3.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../assets/img/shirt-4.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
      </section>
      <div class="pagination">
        <nav
          class="pagination is-centered"
          role="navigation"
          aria-label="pagination"
        >
          <a class="pagination-previous">Anterior</a>
          <a class="pagination-next">Próxima</a>
          <ul class="pagination-list">
            <li><a class="pagination-link is-current">1</a></li>
            <li><a class="pagination-link">2</a></li>
            <li>
              <a
                class="pagination-link "
                aria-current="page"
                >3</a
              >
            </li>
            <li><a class="pagination-link" >4</a></li>
            <li><a class="pagination-link" >5</a></li>
          </ul>
        </nav>
      </div>
    </main>
      <Footer/>
  </div>
</template>

<script>
import Footer from '../components/footer'
export default {
  components:{
    Footer
  }
};
</script>

<style>
.vermelho {
  background-color: #cb221d;
  width: 30px;
  height: 20px;
}
.laranja {
  background-color: #f36424;
  width: 30px;
  height: 20px;
}
.verde {
  background-color: #31a3aa;
  width: 30px;
  height: 20px;
}
#container-store {
  display: grid;
  grid-template-columns: 15% 80%;
  grid-template-rows: auto;
  grid-template-areas: "aside  main";
  grid-gap: 20px;
}
.breadcrumb ul li{
    margin-left: 5%;
}   
#filter {
  grid-area: "aside";
  margin-top: 5%;
}
#menu-store {
  border: solid 1px #ccc;
  margin: 5%;
  padding: 5%;
}
#menu-store h2 {
  color: #ca2100;
  font-size: 1.2rem;
}
section h3 {
  color: #578d8a;
  font-size: 1rem;
  font-weight: 500;
}

section ul li {
  color: #7d7d7d;
  font-size: 1rem;
  line-height: 30px;
  letter-spacing: 10%;
}
#colors-list {
  display: flex;
  justify-content: flex-start;
  list-style: none;
}
.color-item{
  cursor: pointer;
  margin-right: 5px;
  margin-bottom: 5px ;
}
.color-item:hover{
    filter:blur(1px)
}
#content-store {
  grid-area: "main";
}
#content-store h1 {
  color: #ca2100;
  font-weight: 400;
  border-bottom: solid 1px #ccc;
}
#test {
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px #ccc;
}
#filter-produtos {
  width: 40%;
}
#test label {
  color: #7d7d7d;
  font-size: 0.8rem;
  font-weight: bold;
}
#test select {
  width: 60%;
  height: 50%;
  margin-left: 2%;
}
#main-products {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
}
#main-products figure {
  border: solid 1px #ccc;
}
#main-products figure img {
  width: 50%;
}
.product small {
  color: #7d7d7d;
  font-weight: 500;
}
.product p {
  color: #ca2100;
  font-weight: bold;
}
.product button {
  background-color: #31a3aa;
  color: white;
  border: none;
  border-radius: 3px;
  padding: 1% 5%;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 5%;
}
.product {
  text-align: center;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.pagination{
    margin: 3% auto;
    text-align: center;
}
@media only screen and (max-width: 360px){
  #container-store{
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
    grid-template-areas: 'aside' 'main'
  }
  #main-products {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
  }
  #main-products {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    width: 90%; 
    margin: auto;
  }
}
</style>
