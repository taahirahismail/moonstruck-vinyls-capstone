<template>
  <div class="media">
    <h1 class="p-4 text-center heading-text">Checkout !</h1>

    <div class="card m-3 p-2 text-center blue-bg">
      <div
        v-for="product in cart"
        :key="product.orderID"
        class="m-3 p-2 d-flex align-items-center justify-content-between dark-bg"
      >
        <div>
          <img
            :src="product.prodImg"
            :alt="product.albumName"
            class="img-fluid"
            style="width: 50%"
          />
        </div>

        <div class="p-3">
          <h4>{{ product.albumName }}</h4>
          <cite>{{ product.albumArtist }}</cite>
        </div>

        <span class="p-3">{{ product.price }}</span>

        <button
          type="submit"
          @click="removeFromCart(product.userID, product.prodID)"
          class="rem-btn"
        >
          X
        </button>
      </div>
    </div>

    <div
      class="m-3 p-3 d-flex align-items-center justify-content-between gold-text"
    >
      Total: R {{ total }}

      <button
        type="submit"
        @click="clearCart(this.userID)"
        class="p-2 pay-btn"
      >
        Proceed With Payment
      </button>
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

    // total() {
    //   return this.cart.reduce((acc, product) => acc + product.price, 0);
    // }
  },

  mounted() {
    this.$store.dispatch("fetchCart", this.userID);
  },

  methods: {
    clearCart(userID) {
      userID = this.userID;
      this.$store.dispatch("clearCart", userID);;

      this.$swal({
        title: "Purchase Successful!",
        text: "Your order will arrive in 5-10 business days. Thank you for shopping with Moonstruck Vinyl's !",
        icon: "success"
      });
    },

    removeFromCart(prodID) {
      if (confirm("Are you sure you want to remove this item from the cart?")) {
        this.$store.dispatch("removeFromCart", prodID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
  },
};
</script>

<style scoped>
.heading-text {
  font-family: "Archivo Black", sans-serif;
}

.gold-text {
  color: #ffd700;
  font-family: "Montserrat Alternates", sans-serif;
}

.blue-bg {
  background: #0a192f;
  border: 3px solid #f4f4f4;
}

.dark-bg {
  background: #010111;
  /* border: 2px solid #f4f4f4; */
  color: #f4f4f4;
}

.rem-btn {
  background: #010111;
  color: #f4f4f4;
  border: none;
}

.rem-btn:hover {
  color: #ffd700;
}

.pay-btn {
  background: #010111;
  color: #ffd700;
  border: 3px solid #010111;
  border-radius: 5px;
}

.pay-btn:hover {
  border: 3px solid #ffd700;
}
</style>
