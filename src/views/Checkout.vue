<template>
  <section class="bestSell my-5">
    <div class="container-fluid col-10">
      <template v-for="product in products" :key="product">
        <ProductCard v-bind="product" :has_border="true">
          <p>選購數量: {{product.number}}</p>
        </ProductCard>
      </template>
    </div>
  </section>
</template>
<script>
import ProductCard from '../components/ProductCard.vue'
export default {
  components: { ProductCard },
  data(){
    return{
      products: this.$store.state.cart,
    }
  },
}
</script>
<style scoped>
  .bestSell{
    flex-direction:row;
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: center;
  }
</style>