<template>
     <div :class="[{border: has_border}, 'product-card']" @click="redirectProduct(id)">
         <div class="image-box">
           <img class="card-img-top" :src="img"  alt="picture">
         </div>
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">${{ price }}</p>
            <p class="card-text">{{ desc }}</p>
           <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    'id': Number,
    'title': String,
    'img': String,
    'desc': String,
    'price': Number
  },
  methods: {
    redirectProduct: function(id){
      this.$router.push(`/products/${id}`)
    },
    parseImgPath: function(){
      return this.$store.state.productsInfo.img
    }
  }
}
</script>
<style scoped>
  .border{
    border: 5px solid #f3c303;
  }
  div.product-card{
    min-width: 350px;
    width: 24%;
    text-align: center;
    margin: 1px;
    cursor: pointer;
    display: block;
  }
  div.product-card .image-box{
    width: 100%;
    height: 250px;
    display: flex;
  }
 img{
    display: block;
    width: 50%;
    margin: auto;
  }
  small{
    color: #bc0f0f
  }
</style>
