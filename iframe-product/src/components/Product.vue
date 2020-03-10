<template>
  <div>
    <img src="" alt="" />
    <h3>{{ product.name }}</h3>
    <p>{{ product.description }}</p>
    <span>{{ product.price }}</span>
    <button>Add to cart</button>
  </div>
</template>

<script>
export default {
  props: ["product"]
}
</script>

<style></style>
