<template>
  <div>
    <button
      type="button"
      class="btn edit-prod-btn"
      @click="openEditModal(product?.prodID)"
      data-bs-toggle="modal"
      :data-bs-target="'#edit-prod-modal' + product?.prodID"
    >
      Edit
    </button>

    <div
      class="modal"
      :id="'edit-prod-modal' + product?.prodID"
      tab-index="-1"
      :aria-labelledby="'edit-prod-label' + product?.prodID"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content purple-bg">
          <div class="modal-header">
            <h1 class="modal-title heading-text" id="edit-prod-label">
              Update Product:
            </h1>

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="close"
            ></button>
          </div>

          <div class="modal-body">
            <div class="mb-3">
              <label for="productID" class="form-label">Product ID:</label>

              <input
                type="text"
                class="form-control input-bg"
                v-model="editProduct.prodID"
                id="productID"
              />
            </div>

            <form @submit.prevent="updateProduct">
              <div class="mb-3">
                <label for="albumName" class="form-label">Album Name:</label>

                <input
                  type="text"
                  class="form-control input-bg"
                  v-model="payload.albumName"
                />
              </div>

              <div class="mb-3">
                <label for="albumArtist" class="form-label"
                  >Album Artist:</label
                >

                <input
                  type="text"
                  class="form-control input-bg"
                  v-model="payload.albumArtist"
                />
              </div>

              <div class="mb-3">
                <label for="genre" class="form-label">Genre:</label>

                <input
                  type="text"
                  class="form-control input-bg"
                  v-model="payload.genre"
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label">Price:</label>

                <input
                  type="number"
                  class="form-control input-bg"
                  v-model="payload.price"
                />
              </div>

              <div class="mb-3">
                <label for="quantity" class="form-label">Quantity:</label>

                <input
                  type="number"
                  class="form-control input-bg"
                  v-model="payload.quantity"
                />
              </div>

              <div class="mb-3">
                <label for="prodImg" class="form-label">Product Image:</label>

                <input
                  type="text"
                  class="form-control input-bg"
                  v-model="payload.prodImg"
                />
              </div>

              <div class="mb-3">
                <label for="albumDesc" class="form-label">Description:</label>

                <input
                  type="text"
                  class="form-control input-bg"
                  v-model="payload.albumDesc"
                />
              </div>

              <div class="modal-footer">
                <button type="submit" class="btn update-btn">Update</button>
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
  props: ["product"],

  data() {
    return {
      editProduct: {
        ...this.product,
      },

      editProductID: null,

      payload: {
        prodID: this.product?.prodID,
        albumName: this.product?.albumName,
        albumArtist: this.product?.albumArtist,
        genre: this.product?.genre,
        price: this.product?.price,
        quantity: this.product?.quantity,
        prodImg: this.product?.prodImg,
        albumDesc: this.product?.albumDesc,
      },
    };
  },

  computed: {
    currentProduct() {
      return this.$store.state.product;
    },
  },

  methods: {
    openEditModal(prodID) {
      this.editProductID = prodID;
      this.editProduct = {
        ...this.$store.state.products.find(
          (product) => product.prodID === prodID
        ),
      };
    },

    updateProduct() {
      this.$store.dispatch("updateProduct", this.payload);

      this.$swal({
        title: "Product Details Updated!",
        icon: "success",
        timer: 5000,
      });
    },
  },
};
</script>

<style scoped>
.purple-bg {
  background: #2d1128;
}

.heading-text {
  color: #ffd700;
  font-family: "Montserrat Alternates", sans-serif;
}

/* .btn-close {
  color: #ffd700;
} */

.edit-prod-btn {
  background: #2d1128;
  color: #ffd700;
  border: 1px solid #ffd700;
  padding: 5px;
}

.edit-prod-btn:hover {
  background: #ffd700;
  color: #2d1128;
  border: 1px solid #2d1128;
}

.update-btn {
  background: #2d1128;
  color: #ffd700;
  border: 3px solid #2d1128;
}

.update-btn:hover {
  border: 3px solid #ffd700;
}

.modal-content {
  border: 2px solid #ffd700;
}
</style>
