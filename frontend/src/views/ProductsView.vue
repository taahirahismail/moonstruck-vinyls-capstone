<template>
  <div>
    <h1 class="p-4 text-center heading-text">Shop Our Vinyls !</h1>

    <div class="m-3 p-3 d-flex justify-content-between">
      <select v-model="genre" class="select">
        <option value="All">All Genres</option>
        <option value="Rock">Rock</option>
        <option value="Soul">Soul</option>
        <option value="Punk">Punk</option>
        <option value="Reggae">Reggae</option>
      </select>
      
      <input type="text" v-model="search" placeholder="search" class="search"/>

      <div>
        <button class="sort-btn" @click="sortByPrice">Price Sorting</button>
        <button class="sort-btn" @click="sortByName">Name Sorting</button>
      </div>
    </div>

    <div v-if="products" class="row m-3 d-flex justify-content-center">
      <div
        v-for="product in products"
        :key="product"
        :product="product"
        class="col-6"
      >
        <div class="card m-3 p-5" id="prod-card">
          <div class="text-center prod-img">
            <img
              :src="product.prodImg"
              :alt="product.albumName"
              class="img-fluid"
              id="image"
            />
          </div>

          <div class="text-center">
            <h2 class="heading-text">{{ product.albumName }}</h2>
            <cite class="gold-text">{{ product.albumArtist }}</cite>

            <div class="p-3 d-flex justify-content-between">
              R {{ product.price }}
              <button
                @click="viewProduct(product.prodID)"
                class="btn details-btn"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-else>
      <spinner-comp class="mx-auto my-5" />
    </div>

    <h3 class="text-center my-5 gold-text">More coming soon... !</h3>
  </div>
</template>

<script>
import SpinnerComp from "@/components/SpinnerComp.vue";

export default {
  props: ["product"],

  components: {
    SpinnerComp,
  },

  data() {
    return {
      search: "",
      genre: "All",
    };
  },

  computed: {
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (
          !product.albumName.toLowerCase().includes(this.search.toLowerCase())
        ) {
          isMatch = false;
        }
        if (this.genre !== "All" && this.genre !== product.genre) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
  },

  methods: {
    viewProduct(prodID) {
      const selectedProduct = this.products.find(
        (product) => product.prodID === prodID
      );

      this.$store.commit("setSelectedProduct", selectedProduct);
      this.$router.push({ name: "product", params: { prodID: prodID } });
    },

    sortByPrice() {
      this.$store.commit("sortByPrice");
    },

    sortByName() {
      this.$store.commit("sortByName");
    }
  },
};
</script>

<style scoped>
#prod-card {
  background: #0a192f;
  border: 3px solid #f4f4f4;
  color: #f4f4f4;
  min-height: 100vh;
}

.heading-text {
  font-family: "Archivo Black", sans-serif;
}

.gold-text {
  color: #ffd700;
  font-family: "Montserrat Alternates", sans-serif;
}

.select {
  background: #010111;
  padding: 5px;
  border: 1px solid #ffd700;
  border-radius: 5px;
  color: #ffd700;
}

.search {
  background: #010111;
  color: #ffd700;
  border: 1px solid #ffd700;
  border-radius: 5px;
  padding: 5px;
}

.sort-btn {
  margin-inline: 3px;
  padding: 5px;
  background: #010111;
  color: #ffd700;
  border: 1px solid #ffd700;
  border-radius: 5px;
}

.sort-btn:hover {
  background: #ffd700;
  color: #010111;
}

.details-btn {
  background: #0a192f;
  color: #ffd700;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.details-btn:hover {
  box-shadow: 0 0 10px 1px #ffd700;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.straighten {
  min-height: 100vh;
}
</style>
