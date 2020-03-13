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
          name: "Product name 1",
          description: "description of prod1",
          price: 10.0
        },
        {
          id: 2,
          name: "Product name 2",
          description: "description of prod2",
          price: 11.0
        }
      ]
    }
  }
}
</script>

<style>
html,
body {
  background: #55b9f3;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
