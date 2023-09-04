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
          <div class="modal-header">
            <h1 class="text-center heading-text">New Product:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form class="p-3 purple-bg">
              <div class="mb-3">
                <label for="prodID" class="form-label"> Product ID: * </label>
                <input
                  v-model="model.product.prodID"
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
                  v-model="model.product.albumName"
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
                  v-model="model.product.albumArtist"
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
                  v-model="model.product.prodID"
                  type="text"
                  id="genre"
                  class="form-control input-bg"
                  placeholder="eg: pop"
                  required
                  oninvalid="this.setCustomValidity('Please enter genre.')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="price" class="form-label"> Price: * </label>
                <input
                  v-model="model.product.price"
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
                  v-model="model.product.quantity"
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
                  v-model="model.product.prodImg"
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
                  v-model="model.product.albumDesc"
                  type="text"
                  id="albumDesc"
                  class="form-control input-bg"
                  placeholder="Insert album description."
                />
              </div>

              <p>* indicates a required field</p>
            </form>
          </div>

          <div class="modal-footer">
            <button
              type="submit"
              class="m-2 btn add-prod-btn"
              data-bs-dismiss="modal"
              @click="addProduct()"
            >
              Add Product
            </button>
            <button type="reset" class="m-2 btn clr-btn">Clear Fields</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            model: {
                product: {
                    prodID: "",
                    albumName: "",
                    albumArtist: "",
                    genre: "",
                    price: "",
                    quantity: "",
                    prodImg: "",
                    albumDesc: ""
                }
            }
        }
    },

    methods: {
        addProduct() {
            this.$store.dispatch("addProduct", this.model.product);
            this.$router.push("/admin");
            setTimeout(() => {
                console.log("Reload");
                location.reload()
            }, 5000);
        }
    }
};
</script>

<style>
.button>a {
  background: #0A192F;
  color: #FFD700;
  border: 3px solid #FFD700;
  border-radius: 10px;
  box-shadow: 0 0 0 0 transparent;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.button>a:hover {
    background: #010111;
  color: #FFD700;
  box-shadow: 0 0 30px 5px #FFD700;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
}
</style>