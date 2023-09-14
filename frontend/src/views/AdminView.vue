<template>
  <div>
    <h1 class="text-center p-3 heading-text">Admin !</h1>

    <div class="my-3 prod-table">
      <div class="mx-auto d-flex justify-content-between" style="width: 90%">
        <h3 class="text-center p-3">Products</h3>
        <add-product-comp />
      </div>
      <div class="d-flex justify-content-center media-table">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Album Name</th>
              <th>Album Artist</th>
              <th>Genre</th>
              <th>Price</th>
              <th>Quantity</th>
              <th class="media-hide-2">Product Image</th>
              <th class="media-hide">Album Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody
            v-for="product in products"
            :key="product.prodID"
            :product="product"
          >
            <tr v-if="products">
              <td>{{ product.prodID }}</td>
              <td>{{ product.albumName }}</td>
              <td>{{ product.albumArtist }}</td>
              <td>{{ product.genre }}</td>
              <td>R{{ product.price }}</td>
              <td>{{ product.quantity }}</td>
              <td class="prod-img media-hide-2">
                <img
                  :src="product.prodImg"
                  :alt="product.albumName"
                  loading="lazy"
                  class="img-fluid prod-img"
                />
              </td>
              <td class="media-font">{{ product.albumDesc }}</td>
              <td>
                <update-product-comp :product="product" />

                <button
                  type="submit"
                  class="btn del-btn media-font-2"
                  @click="deleteProduct(product.prodID)"
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr v-else>
              <spinner-comp />
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="my-3 user-table">
      <div class="mx-auto d-flex justify-content-between" style="width: 90%">
        <h3 class="text-center p-3">Users</h3>

        <add-user-comp />
      </div>

      <div class="d-flex justify-content-center media-table">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Role</th>
              <th>Email</th>
              <th class="media-hide-2">Profile Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody v-for="user in users" :key="user.userID" :user="user">
            <tr v-if="users">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userRole }}</td>
              <td class="media-font-2">{{ user.emailAdd }}</td>
              <td class="text-center user-img media-hide-2">
                <img
                  :src="user.userImg"
                  :alt="user.firstName"
                  loading="lazy"
                  class="img-fluid user-img"
                />
              </td>
              <td>
                <update-user-comp :user="user" />

                <button
                  class="btn del-btn media-font-2"
                  @click="deleteUser(user.userID)"
                >
                  Delete
                </button>
              </td>
            </tr>

            <tr v-else>
              <spinner-comp />
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import SpinnerComp from "../components/SpinnerComp.vue";
import AddProductComp from "@/components/AddProductComp.vue";
import UpdateProductComp from "@/components/UpdateProductComp.vue";
import AddUserComp from "@/components/AddUserComp.vue";
import UpdateUserComp from "../components/UpdateUserComp.vue";

export default {
  props: ["product", "user"],

  components: {
    SpinnerComp,
    AddProductComp,
    UpdateProductComp,
    AddUserComp,
    UpdateUserComp,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    product() {
      return this.$store.state.product;
    },
    users() {
      return this.$store.state.users;
    },
    user() {
      return this.$store.state.user;
    },
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
    this.$store.dispatch("fetchUsers");
  },

  methods: {
    deleteProduct(prodID) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.$store.dispatch("deleteProduct", prodID);
        setTimeout(() => {
          location.reload();
        }, 500);

        this.$swal({
          title: "Product Deleted!",
          icon: "success",
          timer: 5000,
        });
      }
    },

    deleteUser(userID) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", userID);
        setTimeout(() => {
          location.reload();
        }, 500);

        this.$swal({
          title: "User Deleted!",
          icon: "success",
          timer: 5000,
        });
      }
    },
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.heading-text {
  font-family: "Archivo Black", sans-serif;
}

tr,
th,
td {
  border: 3px solid #f4f4f4;
  color: #f4f4f4;
  padding: 5px;
}

table {
  width: 90%;
}

.del-btn {
  background: #2d1128;
  color: #ffd700;
  border: 1px solid #ffd700;
  padding: 5px;
}

.del-btn:hover {
  background: #ffd700;
  color: #2d1128;
  border: 1px solid #2d1128;
}

.user-img {
  max-width: 75px;
  border-radius: 50%;
}

@media screen and (max-width: 1100px) {
  .media-font {
    font-size: 10px;
  }
}

@media screen and (max-width: 850px) {
  .media-font,
  .media-hide {
    display: none;
  }
}

@media screen and (max-width: 850px) {
  .media-font,
  .media-hide {
    display: none;
  }
}

@media screen and (max-width: 730px) {
  .media-hide-2 {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  .media-font-2 {
    font-size: 12px;
  }

  .media-table {
    overflow: scroll;
  }
}
</style>
