<template>
  <div
    class="product p-4 m-4 grid border-4 border-indigo-800"
    :class="{ 'bg-gray-800 text-white': theme === 'dark' }"
  >
    <div
      class="img-container rounded-md col-span-6 sm:col-span-1 h-20 bg-gray-300 mr-4 overflow-hidden"
    ></div>
    <div class="col-span-5 sm:col-span-4">
      <h3 class="mt-0">{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <span>Stock: {{ product.stock }}</span>
    </div>
    <button class="btn-main text-white font-bold px-4" @click="addToCart">
      +
    </button>
  </div>
</template>

<script>
export default {
  props: ["product", "theme"],

  methods: {
    addToCart() {
      this.product.stock--
      window.parent.postMessage({
        type: 'added',
        product: this.product
      }, process.env.VUE_APP_CONTAINER)
    },
  },
}
</script>

<style lang="scss">
.product {
  grid-template-columns: 6rem repeat(5, minmax(0, 1fr));
  button {
    border-width: 0px;
    border-radius: 50%;
    line-height: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #5fdab1;
    align-self: flex-end;
    margin-left: auto;
    cursor: pointer;
    transition: all 0.5s;
    &:hover {
      outline: none;
      transform: scale(1.05);
      background: lighten(#5fdab1, 5%);
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
