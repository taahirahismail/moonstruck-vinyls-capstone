<template>
  <div>
    <button
      type="button"
      class="btn edit-prod-btn"
      @click="openEditModal(product.prodID)"
      data-bs-toggle="modal"
      :data-bs-target="'#edit-prod-modal' + product.prodID"
    >
      Edit
    </button>

    <div
      class="modal"
      :id="'edit-prod-modal' + product.prodID"
      tab-index="-1"
      :aria-labelledby="'edit-prod-label' + product.prodID"
      aria-hidden="true"
    >
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title">Update Product:</h1>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="close"
          ></button>
        </div>

        <div class="modal-body">
          <div>
            <label for="prodID" class="form-label">Product ID:</label>

            <input type="text" class="input-bg" v-model="editProduct.prodID" />
          </div>

          <div>
            <label for="albumName" class="form-label">Album Name:</label>

            <input
              type="text"
              class="input-bg"
              v-model="editProduct.albumName"
            />
          </div>

          <div>
            <label for="albumArtist" class="form-label">Album Artist:</label>

            <input
              type="text"
              class="input-bg"
              v-model="editProduct.albumArtist"
            />
          </div>

          <div>
            <label for="genre" class="form-label">Genre:</label>

            <input type="text" class="input-bg" v-model="editProduct.genre" />
          </div>

          <div>
            <label for="price" class="form-label">Price:</label>

            <input type="number" class="input-bg" v-model="editProduct.price" />
          </div>

          <div>
            <label for="quantity" class="form-label">Quantity:</label>

            <input
              type="number"
              class="input-bg"
              v-model="editProduct.quantity"
            />
          </div>

          <div>
            <label for="prodImg" class="form-label">Product Image:</label>

            <input type="text" class="input-bg" v-model="editProduct.prodImg" />
          </div>

          <div>
            <label for="albumDesc" class="form-label">Description:</label>

            <input
              type="text"
              class="input-bg"
              v-model="editProduct.albumDesc"
            />
          </div>
        </div>

        <div class="modal-footer">
          <button
            type="button"
            class="btn update-btn"
            @click="updateProduct(product.prodID)"
          >
            Update
          </button>
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

            model: {
                product: {
                    prodID: "",
                    albumName: "",
                    albumArtist: "",
                    genre: "",
                    price: 0,
                    quantity: 0,
                    prodImg: "",
                    albumDesc: ""
                }
            }
        };
    },

    computed: {
        currentProduct() {
            return this.$store.state.product;
        }
    },

    methods: {
        openEditModal(prodID) {
            this.editProductID = prodID;
            this.editProduct = {
                ...this.$store.state.products.find((product) => product.prodID === prodID)
            };
        },

        updateProduct(prodID) {
            this.$store.dispatch("updateProduct", {
                prodID: prodID,
                ...this.editProduct
            }).then(() => {
                console.log("Product Updated!");
            }).catch((err) => {
                console.error("Error updating product: ", err);
            })
        }
    }
};
</script>

<style scoped></style>
