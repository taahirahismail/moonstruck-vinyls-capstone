<template>
  <div>
    <div class="button">
      <a
        data-bs-toggle="modal"
        data-bs-target="#add-prod-modal"
        href="#add-prod-modal"
        class="m-2 text-center btn add-prod-btn"
      >
        Add Product
      </a>
    </div>

    <div class="modal" id="add-prod-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header purple-bg">
            <h1 class="text-center heading-text">New Product:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form @submit.prevent="addProduct" class="p-3 purple-bg">
              <div class="mb-3">
                <label for="prodID" class="form-label"> Product ID: * </label>
                <input
                  v-model="product.prodID"
                  type="text"
                  id="prodID"
                  class="form-control input-bg"
                  placeholder="eg: MUS001"
                  required
                  oninvalid="this.setCustomValidity('Please enter a product ID')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="albumName" class="form-label">
                  Album Name: *
                </label>
                <input
                  v-model="product.albumName"
                  type="text"
                  id="albumName"
                  class="form-control input-bg"
                  placeholder="eg: This Album"
                  required
                  oninvalid="this.setCustomValidity('Please enter an album name')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="albumArtist" class="form-label">
                  Album Artist: *
                </label>
                <input
                  v-model="product.albumArtist"
                  type="text"
                  id="albumArtist"
                  class="form-control input-bg"
                  placeholder="eg: Musicians"
                  required
                  oninvalid="this.setCustomValidity('Please enter an album artist.')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="genre" class="form-label"> Genre: * </label>
                <input
                  v-model="product.genre"
                  type="text"
                  id="genre"
                  class="form-control input-bg"
                  placeholder="eg: Pop"
                  required
                  oninvalid="this.setCustomValidity('Please enter genre.')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label"> Price: * </label>
                <input
                  v-model="product.price"
                  type="number"
                  id="price"
                  class="form-control input-bg"
                  placeholder="eg: 300.00"
                  required
                  oninvalid="this.setCustomValidity('Please enter a price')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="quantity" class="form-label"> Quantity: * </label>
                <input
                  v-model="product.quantity"
                  type="number"
                  id="quantity"
                  class="form-control input-bg"
                  placeholder="eg: 100"
                  required
                  oninvalid="this.setCustomValidity('Please enter quantity')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="prodImg" class="form-label"> Product Image: </label>
                <input
                  v-model="product.prodImg"
                  type="text"
                  id="prodImg"
                  class="form-control input-bg"
                  placeholder="Insert image link."
                />
              </div>

              <div class="mb-3">
                <label for="albumDesc" class="form-label">
                  Album Description:
                </label>
                <input
                  v-model="product.albumDesc"
                  type="text"
                  id="albumDesc"
                  class="form-control input-bg"
                  placeholder="Insert album description."
                />
              </div>

              <p>* indicates a required field</p>

              
              <div class="modal-footer purple-bg">
                <button
                  type="submit"
                  class="m-2 btn add-prod-btn"
                  data-bs-dismiss="modal"
                >
                  Add Product
                </button>
                <button type="reset" class="m-2 btn clr-btn">Clear Fields</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['product'],

  data() {
    return {
        product: {
          prodID: "",
          albumName: "",
          albumArtist: "",
          genre: "",
          price: "",
          quantity: "",
          prodImg: "",
          albumDesc: "",
        },
    };
  },

  methods: {
    addProduct() {
      this.$store.dispatch("addProduct", this.product);
      this.$router.push("/admin");
      setTimeout(() => {
        console.log("Reload");
        location.reload();
      }, 5000);
    },
  },
};
</script>

<style scoped>
.purple-bg {
  background: #2D1128;
}

.heading-text {
  color: #ffd700;
  font-family: "Montserrat Alternates", sans-serif;
}

/* .btn-close {
  color: #ffd700;
} */

.button > a {
  background: #010111;
  color: #ffd700;
  border: 3px solid #010111;
  border-radius: 10px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.button > a:hover {
  background: #010111;
  color: #ffd700;
  box-shadow: 0 0 15px 2.5px #ffd700;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}

.add-prod-btn, .clr-btn {
  background: #2D1128;
  color: #ffd700;
  border: 3px solid #2D1128;
}

.add-prod-btn:hover, .clr-btn:hover {
  border: 3px solid #ffd700;
}

.modal-content {
  border: 2px solid #ffd700;
}
</style>
