<template>
  <div class="product">
    <div class="img-container">
      <img src=" https://www.placecage.com/c/100/100" :alt="product.name" />
    </div>
    <div>
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <span>{{ product.price }}</span>
    </div>
    <button @click="addToCart">+</button>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addToCart() {
      window.parent.postMessage(this.product, "http://localhost:3000")
    }
  }
}
</script>

<style lang="scss">
.product {
  padding: 1rem;
  margin: 1rem;
  border-radius: 10px;
  background: #55b9f3;
  box-shadow: 20px 20px 40px #489dcf;
  display: flex;

  .img-container {
    background: white;
    height: 5rem;
    width: 5rem;
    margin-right: 1rem;
    border-radius: 10px;
    overflow: hidden;
  }

  h3 {
    margin-top: 0;
  }

  button {
    border-width: 0px;
    border-radius: 50%;
    line-height: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #ff4848;
    align-self: flex-end;
    margin-left: auto;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
}
</style>
