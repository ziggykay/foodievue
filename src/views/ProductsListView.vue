<template>
  <section class="container-fluid">
    <div class="heading-container flex">
        <h2>冷凍宅配99元</h2>
      </div>
    <div class="row row-cols-1 row-cols-md-3 g-3 my-5">
      <template v-for="product in productsInfo" :key="product.id">
        <ProductCard v-bind="product">
          <router-link class="btn btn-warning" 
          :to="{name: 'Product', params :{productId: product.id}}">buy</router-link>
        </ProductCard>
      </template>
    </div>
  </section>
</template> 
<script>
import ProductCard from "../components/ProductCard.vue"

export default {
  data () {
    return {
      products: [],
      productsInfo: this.$store.state.productsInfo,
      userId: this.$store.state.userId,
    };
  },
  methods: {
    redirectProduct: function(id){
      this.$router.push(`/products/${id}`)
    },
  },
  computed: {
    test () {
      return this.$store.state.productsInfo
    }
  },
  components: { ProductCard }
}

</script>
