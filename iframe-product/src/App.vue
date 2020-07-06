<template>
  <div  class=" mt-4">
    <img
      src="./assets/logo.png"
      alt="VueJS logo"
      class="object-contain opacity-50 mx-auto h-16"
    />
    <product v-for="p in products" :key="p.id" :product="p" :theme="theme" />
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
      } else if (e.data.type === "theme") {
        that.theme = e.data.value
      }
    })
  },
  data() {
    return {
      theme: "light",
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

<style lang="scss">
</style>
<style global>
  @tailwind base;
  h1 {
  @apply text-2xl;
}

h2 {
  @apply text-xl font-bold;
}

h3 {
  @apply text-lg font-bold;
}

ul {
  @apply list-disc;
}

ol {
  @apply list-decimal;
}

a {
  @apply text-blue-600;
}

table {
  @apply border border-gray-600 w-full;
}

th {
  @apply bg-gray-400 px-4;
}

td {
}
  @tailwind components;
  @tailwind utilities;
  html,
body,
#app {
  height: 100%;
}

#app {
  display: flex;
  flex-direction: column;
}
</style>
