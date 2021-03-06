<template>
<div>
  <Header/>
  <Navigation/>
<div id="container-store">
    <aside id="filter">
      <div class="breadcrumbs">
        <nav
          class="breadcrumb has-succeeds-separator is-small block"
          aria-label="breadcrumbs"
        >
          <ul>
            <li><router-link to="/">Página inicial</router-link></li>
            <li><router-link to="/categoria">categoria</router-link></li>
            <li class="is-active">
              <router-link to="/sapatos">sapatos</router-link>
            </li>
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
            <img src="../../assets/img/grid.jpg" alt="" />
            <img src="../../assets/img/grid2.jpg" alt="" />
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
            <img src="../../assets/img/shoes-1.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../../assets/img/shoes-5.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../../assets/img/shoes-3.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../../assets/img/shoes-4.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../../assets/img/shoes-5.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../../assets/img/shoes-6.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../../assets/img/shoes-7.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../../assets/img/shoes-8.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../../assets/img/shoes-9.jpg" alt="" />
          </figure>
          <small>Tênis</small>
          <p>R$ 299.90</p>
          <button>COMPRAR</button>
        </div>
        <div class="product">
          <figure>
            <img src="../../assets/img/shoes-10.jpg" alt="" />
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
    <Footer />
  </div>
</div>
  
</template>

<script>
import Header from '../../components/Header'
import Navigation from '../../components/navigation'
import Footer from "../../components/footer"
export default {
  components: {
    Header,
    Navigation,
    Footer,
  },
};
</script>