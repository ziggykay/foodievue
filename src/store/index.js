import { createStore } from 'vuex'
import createPersistedState from "vuex-persistedstate";
import productsInfo from "../../public/products.json"

export default createStore({
  state: {
    productsInfo,
    userId: 6,
    cart: []
  },
  getters:{
    getProduct : state => id => {
      return state.productsInfo.find(product => product.id === id)
    },
    currentQuantity(state){
      return state.cart.reduce((productNumber, product) => parseInt(productNumber) + product.number, 0)
    }
  },
  mutations: {
    addCart(state, data){
      let isNewProduct = true
      // cart = [product, product]
      state.cart.map(function(product){
        if(product.id == data.product.id){
          product.number += data.number
          isNewProduct = false
        }
        return product
      })

      if(isNewProduct){
        let newProduct = data.product
        newProduct.number = data.number
        state.cart.push(newProduct)
      }
    }
  },
  plugins: [createPersistedState()]
})