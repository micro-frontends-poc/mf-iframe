<template>
  <div id="app">
    <product v-for="p in products" :key="p.id" :product="p" />
  </div>
</template>

<script>
import Product from "./components/Product.vue"

export default {
  name: "App",
  components: {
    Product
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "prodname",
          description: "description of prod1",
          price: 10.0
        },
        {
          id: 2,
          name: "prodname2",
          description: "description of prod1",
          price: 11.0
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
