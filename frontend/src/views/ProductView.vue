<template>
  <div>
    <div
      v-if="product"
      :product="product"
      class="card mx-auto my-3 p-5 w-75 text-center prod-card"
    >
      <div class="text-center">
        <img
          :src="product.prodImg"
          :alt="product.albumName"
          class="img-fluid mb-5"
        />
      </div>

      <h1 class="heading-text">{{ product.albumName }}</h1>
      <cite class="gold-text">by {{ product.albumArtist }}</cite> <br />
      <p>Genre: {{ product.genre }}</p>
      <p>{{ product.albumDesc }}</p>

      <div class="d-flex justify-content-between mt-5">
        <h3 class="gold-text">R{{ product.price }}</h3>
        <button class="btn add-cart-btn" @click="addToCart(product.prodID)">Add to Cart</button>
      </div>
    </div>

    <div v-else>
      <spinner-comp class="mx-auto my-5" />
    </div>
  </div>
</template>

<script>
import SpinnerComp from "../components/SpinnerComp.vue";

export default {
  // props: ["product"],

  components: { SpinnerComp },

  computed: {
    product() {
      return this.$store.state.selectedProduct;
    },

    mounted() {
      return this.$store.dispatch("fetchProduct");
    },
  },

  methods: {
    async addToCart() {
      this.$store.dispatch("addToCart", {userID: this.userID, product: this.$store.state.selectedProduct});
    }
  }
};
</script>

<style scoped>
.heading-text {
  font-family: "Archivo Black", sans-serif;
  color: #ffd700;
}

.gold-text {
  color: #ffd700;
  font-family: "Montserrat Alternates", sans-serif;
}

.prod-card {
  background: #0a192f;
  border: 3px solid #ffd700;
  color: #f4f4f4;
}

.add-cart-btn {
  background: #0a192f;
  color: #ffd700;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.add-cart-btn:hover {
  box-shadow: 0 0 10px 1px #ffd700;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
</style>
