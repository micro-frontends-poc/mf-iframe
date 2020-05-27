<template>
  <div
    class="product p-4 m-4 rounded-md flex shadow-lg"
    :class="{ 'bg-gray-800 text-white': theme === 'dark' }"
  >
    <div
      class="img-container rounded-md w-20 h-20 bg-gray-300 mr-4 overflow-hidden"
    ></div>
    <div>
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
      window.parent.postMessage(this.product, process.env.VUE_APP_CONTAINER)
    },
  },
}
</script>

<style lang="scss">
.product {
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
