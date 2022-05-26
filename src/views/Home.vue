<template>
  <section class="swiperSection container-fluid col-10 ">
    <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img class="img-fluid d-block w-100" src="images/砂鍋.webp" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>First slide label</h5>
            <p>Some representative placeholder content for the first slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="img-fluid d-block w-100" src="images/滷味.webp" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Second slide label</h5>
            <p>Some representative placeholder content for the second slide.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img class="img-fluid d-block w-100" src="images/日舒醒1688.jpeg" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Third slide label</h5>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </section>

  <!-- best sell 回購熱銷 -->

  <section class="bestSell my-5">
    <div class="container-fluid col-10">
      <div class="heading-container flex">
        <h2>回購熱賣</h2>
      </div>
      <div class="row-fluid flex row-cols-4 row-cols-md-6" style="justify-content:space-around;">
        <!-- <div class="card" style="width: 18rem;"> -->
            <div class="col" v-for="product in products" :key="product.id">
              <ProductCard v-bind="product"></ProductCard>
            </div>
        <!-- </div> -->
      </div> 

      <div class="btn-fluid flex my-5 allFood" style="justify-content:center;">
      <router-link class="link-warning" to="/products">全部商品</router-link>
      </div>
    </div>
  </section>

  <!-- 本月精選-->
  <section class="limitedMeal">
      <div class="container-fluid col-10">
        <div class="heading-container flex">
          <h2>私廚料理｜限量精選</h2>
        </div>
        <div class="row flex">
          <div class="col-md-6">
            <div class="box flex" style="justify-content:center;">
              <div class="img-box text_align_center" >
                <img src="images/bestsale1.webp" alt="">
              </div>
              <div class="detail-box">
                <h5>皮蛋豆腐素餃</h5>
                <p>素食饕客在家也能輕鬆上菜只要10分鐘</p>
                <a class="link-warning" href="">線上購買</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box flex" style="justify-content:center;">
              <div class="img-box"><img src="images/bestsale3.webp" alt=""></div>
              <div class="detail-box">
                <h5>皮蛋豆腐素餃</h5>
                <p>素食饕客在家也能輕鬆上菜只要10分鐘</p>
                <a class="link-warning" href="">線上購買</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box flex" style="justify-content:center;">
              <div class="img-box"><img src="images/bestsale2.webp" alt=""></div>
              <div class="detail-box">
                <h5>皮蛋豆腐素餃</h5>
                <p>素食饕客在家也能輕鬆上菜只要10分鐘</p>
                <a class="link-warning" href="">線上購買</a>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="box flex" style="justify-content:center;">
              <div class="img-box"><img src="images/bestsale4.webp" alt=""></div>
              <div class="detail-box">
                <h5>皮蛋豆腐素餃</h5>
                <p>素食饕客在家也能輕鬆上菜只要10分鐘</p>
                <a class="link-warning" href="">線上購買</a>
              </div>
            </div>
          </div>
        </div>
  
      </div>
    </section>

 
  <!-- About us 關於我們-->
  <section class="aboutUs my-5" id="aboutUs">
    <div class="container-fluid col-10 flex" style="text-align: center;">
        <div class="about col-md-6" > 
          <div class="about-img " >
            <img class="img-fluid d-block w-40" src="images/Orange.png"  alt="...">
          </div>
        </div>
        <div class="about col-md-6" >
          <div class="detail-box">
            <div class="heading-container">
              <h2>關於我們</h2>
            </div>
            <p class="text-start">在品牌創立之初，陸續收到許多有同樣精神理念的認同與支持。也我們無時無刻都可以有意識地決定自己的飲食。
               好吃的秘密在於嚴選自然好食材，美味是靠著時間的醞釀而非化學添加，理念與時間正是我們最豪邁的用料，
               『一匙舒醒、美味舒醒』是我們的Slogan，也是我們努力的目標，期望能解決人們不方便、不會煮、與不好吃的問題，
               做出無論葷食者或素食者都喜歡的食品。<br><br>
               『一匙舒醒、美味舒醒』是我們的Slogan，也是我們努力的目標，期望能解決人們不方便、不會煮、與不好吃的問題，
               做出無論葷食者或素食者都喜歡的食品，進而為食物浪費與促進健康議題盡一份心。
            </p>
          </div>
        </div>
    </div>
  </section>

  <!-- cook 美味食譜-->
  <section class="cook">
    <div class="container-fluid col-10">
      <div class="heading-container flex">
        <h2>美味食譜</h2>
      </div>
      <div class="row flex">
        <div class="col-md-6">
          <div class="box flex" style="justify-content:center;">
            <div class="img-box ">
              <img src="images/red-cooked meat.jpeg" alt="">
            </div>
            <div class="detail-box">
              <h5>皮蛋豆腐素餃</h5>
              <p>素食饕客在家也能輕鬆上菜只要10分鐘</p>
              <router-link class="link-warning" to="/recipe">Read more</router-link>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="box flex" style="justify-content:center;">
            <div class="img-box"><img src="images/meal3.webp" alt=""></div>
            <div class="detail-box">
              <h5>皮蛋豆腐素餃</h5>
              <p>素食饕客在家也能輕鬆上菜只要10分鐘</p>
             <router-link class="link-warning" to="/recipe">Read more</router-link>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
import ProductCard from "../components/ProductCard.vue"

export default {
  data () {
    return {
      products: [
        {
    "id": 1,
    "title": "XO醬料",
    "img": "./images/bestsale1.webp",
    "price":210,
    "desc":"Some quick example text"
  },
  {
    "id": 2,
    "title": "XO醬料",
    "img": "./images/bestsale2.webp",
    "price":210,
    "desc":"Some quick example text"
  },
  {
    "id": 3,
    "title": "XO醬料",
    "img": "./images/bestsale3.webp",
    "price":210,
    "desc":"Some quick example text"
  },
  {
    "id": 4,
    "title": "XO醬料",
    "img": "./images/bestsale4.webp",
    "price":210,
    "desc":"Some quick example text"
  },
      ],
    }
  },
  computed:{
    test () {
      return this.$store.state.product
    }
  },
  components: {
    ProductCard,
  }
}

</script>