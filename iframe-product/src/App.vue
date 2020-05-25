<template>
  <div id="app" class=" mt-4">
    <product v-for="p in products" :key="p.id" :product="p" />
    <img
      src="./assets/logo.png"
      alt="VueJS logo"
      class="object-contain opacity-50 h-16"
    />
  </div>
</template>

<script>
import Product from "./components/Product.vue"
export default {
  name: "App",
  components: {
    Product,
  },
  mounted() {
    const that = this
    window.addEventListener("message", function(e) {
      if (e.data.type === "removed") {
        const product = that.products.find((x) => x.id == e.data.id)
        product.stock++
      }
    })
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Children of Men",
          description: `Children of Men is a 2006 dystopian action thriller film directed and co-written
           by Alfonso Cuarón.`,
          stock: 3,
        },
        {
          id: 2,
          name: "Hunt for the Wilderpeople",
          description: `A national manhunt is ordered for a rebellious kid and his foster uncle who go 
            missing in the wild New Zealand bush.`,
          stock: 2,
        },
        {
          id: 3,
          name: "The Handmaiden",
          description: `With help from an orphaned pickpocket, a Korean con man devises an elaborate plot to seduce and bilk a Japanese woman out of her inheritance.`,
          stock: 2,
        },
      ],
    }
  },
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
