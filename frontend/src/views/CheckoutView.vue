<template>
  <div class="media">
    <h1 class="p-4 text-center heading-text">Checkout !</h1>

    <div
      v-for="product in cart"
      :key="product.orderID"
      class="card mx-auto my-3 p-5 w-75 text-center prod-card"
    >
      <div>
        <img :src="product.prodImg" :alt="product.albumName" />

        <div>
          <h4>{{ product.albumName }}</h4>
          <cite>{{ product.albumArtist }}</cite>
        </div>

        <span>{{ product.price }}</span>

        <button
          type="submit"
          @click="removeFromCart(product.userID, product.prodID)"
        >
          X
        </button>
      </div>
    </div>

    <div class="d-flex justify-content-between">
      Total: R (how do you add the total again?)

      <button type="submit" @click="clearCart(product.userID)">
        Proceed With Payment
      </button>
    </div>

    <div class="card m-3 p-2 text-center blue-bg">
      <div class="m-3 p-2 d-flex align-items-center justify-content-between dark-bg">

        <div>
          <img
            src="https://i.postimg.cc/TwF4vWGC/prop-record.png"
            alt="prop-record"
            class="img-fluid"
            style="width: 50%;"
          />
        </div>

        <div class="p-3">
          <h4><strong>Album Name goes here</strong></h4>
          <br />
          <cite>Album Artist goes here</cite>
        </div>

        <div class="p-3">
          Price goes here
        </div>

        <div class="p-3">
          <button class="btn close-btn">X</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],

  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },

  mounted() {
    this.$store.dispatch("fetchCart", this.userID);
  },
};
</script>

<style scoped>
.heading-text {
  font-family: "Archivo Black", sans-serif;
}

.blue-bg {
  background: #0a192f;
  border: 3px solid #f4f4f4;
}

.dark-bg {
  background: #010111;
  border: 2px solid #f4f4f4;
  color: #f4f4f4;
}
</style>
