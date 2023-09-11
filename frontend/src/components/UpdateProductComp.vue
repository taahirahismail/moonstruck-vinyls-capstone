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
    <div class="modal-dialog">
      <div class="modal-content purple-bg">
        <div class="modal-header">
          <h1 class="modal-title heading-text" id="edit-prod-label">Update Product:</h1>

          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="close"
          ></button>
        </div>

        <div class="modal-body">
          <!-- <div>
            <label for="productID" class="form-label">Product ID:</label>

            <input type="text" class="input-bg" v-model="editProduct.prodID" id="productID"/>
          </div> -->

          <form @submit.prevent="updateProduct(product.prodID)">          
            <div class="mb-3">
              <label for="albumName" class="form-label">Album Name:</label>
  
              <input
                type="text"
                class="form-control input-bg"
                v-model="editProduct.albumName"
              />
            </div>
  
            <div class="mb-3">
              <label for="albumArtist" class="form-label">Album Artist:</label>
  
              <input
                type="text"
                class="form-control input-bg"
                v-model="editProduct.albumArtist"
              />
            </div>
  
            <div class="mb-3">
              <label for="genre" class="form-label">Genre:</label>
  
              <input type="text" class="form-control input-bg" v-model="editProduct.genre" />
            </div>
  
            <div class="mb-3">
              <label for="price" class="form-label">Price:</label>
  
              <input type="number" class="form-control input-bg" v-model="editProduct.price" />
            </div>
  
            <div class="mb-3">
              <label for="quantity" class="form-label">Quantity:</label>
  
              <input
                type="number"
                class="form-control input-bg"
                v-model="editProduct.quantity"
              />
            </div>
  
            <div class="mb-3">
              <label for="prodImg" class="form-label">Product Image:</label>
  
              <input type="text" class="form-control input-bg" v-model="editProduct.prodImg" />
            </div>
  
            <div class="mb-3">
              <label for="albumDesc" class="form-label">Description:</label>
  
              <input
                type="text"
                class="form-control input-bg"
                v-model="editProduct.albumDesc"
              />
            </div>
          </form>
        </div>

        <div class="modal-footer">
          <button
            type="submit"
            class="btn update-btn"
            @click="this.$store.dispatch('updateProduct', editProduct)"
          >
            Update
          </button>
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

      product: {
        prodID: "",
        albumName: "",
        albumArtist: "",
        genre: "",
        price: 0,
        quantity: 0,
        prodImg: "",
        albumDesc: "",
      },
    };
  },

  // computed: {
  //   currentProduct() {
  //     return this.$store.state.product;
  //   },
  // },

  methods: {
    openEditModal(prodID) {
      this.editProductID = prodID;
      this.editProduct = {
        ...this.$store.state.products.find(
          (product) => product.prodID === prodID
        ),
      };
    },

    updateProduct(prodID) {
      this.$store
        .dispatch("updateProduct", {
          prodID: prodID,
          ...this.editProduct,
        })
        .then(() => {
          console.log("Product Updated!");
        })
        .catch((err) => {
          console.error("Error updating product: ", err);
        });
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
  background: #2D1128;
  color: #ffd700;
  border: 3px solid #2D1128;
}

.update-btn:hover {
  border: 3px solid #ffd700;
}

.modal-content {
  border: 2px solid #ffd700;
}
</style>
