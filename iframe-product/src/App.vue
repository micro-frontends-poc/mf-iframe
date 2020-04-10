<template>
  <div id="app" class=" mt-4">
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
          name: "Children of Men",
          description: `Children of Men is a 2006 dystopian action thriller film directed and co-written
           by Alfonso Cuarón.`,
          price: 10.0
        },
        {
          id: 2,
          name: "Hunt for the Wilderpeople",
          description: `A national manhunt is ordered for a rebellious kid and his foster uncle who go 
            missing in the wild New Zealand bush.`,
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
  color: #2c3e50;
}
</style>
