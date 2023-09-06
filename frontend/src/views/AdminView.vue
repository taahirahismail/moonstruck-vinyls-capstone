<template>
  <div>
    <h1 class="text-center p-3 heading-text">Admin !</h1>

    <div class="prod-table">
      <div class="d-flex justify-content-between">
        <h3 class="text-center p-3">Products</h3>
        <add-product-comp />
      </div>
      <div class="d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th>Product ID</th>
              <th>Album Name</th>
              <th>Album Artist</th>
              <th>Genre</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Product Image</th>
              <th>Album Description</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody v-for="product in products" :key="product.prodID">
            <tr v-if="products">
              <td>{{ product.prodID }}</td>
              <td>{{ product.albumName }}</td>
              <td>{{ product.albumArtist }}</td>
              <td>{{ product.genre }}</td>
              <td>R{{ product.price }}</td>
              <td>{{ product.quantity }}</td>
              <td class="prod-img">
                <img
                  :src="product.prodImg"
                  :alt="product.albumName"
                  loading="lazy"
                  class="img-fluid prod-img"
                />
              </td>
              <td>{{ product.albumDesc }}</td>
              <td>
                <update-product-comp />

                <button
                  class="btn del-btn"
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

    <div class="user-table">
      <div class="d-flex justify-content-between">
        <h3 class="text-center p-3">Users</h3>

        <!-- insert add user comp here -->
      </div>

      <div class="d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th>User ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>User Role</th>
              <th>Email</th>
              <th>Password</th>
              <th>Profile Image</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody v-for="user in users" :key="user.userID">
            <tr v-if="users">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userRole }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userPass }}</td>
              <td class="user-img">
                <img
                  :src="user.userImg"
                  :alt="user.firstName"
                  loading="lazy"
                  class="img-fluid user-img"
                />
              </td>
              <td>
                <!-- insert update user comp here -->

                <button class="btn del-btn" @click="deleteUser(user.userID)">
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

    <div class="order-table">
      <div class="d-flex justify-content-between">
        <h3 class="text-center p-3">Orders</h3>
      </div>

      <div class="d-flex justify-content-center">
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>User ID</th>
              <th>Product ID</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody v-for="cart in orders" :key="cart.orderID">
            <tr v-if="orders">
              <td>{{ cart.orderID }}</td>
              <td>{{ cart.userID }}</td>
              <td>{{ cart.prodID }}</td>
              <td>{{ cart.quantity }}</td>
              <td>
                <update-product-comp />

                <button class="btn del-btn" @click="deleteOrder(cart.orderID)">
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

export default {
  components: {
    SpinnerComp,
    AddProductComp,
    UpdateProductComp,
  },

  computed: {
    products() {
      return this.$store.state.products;
    },
    product() {
      return this.$store.state.product;
    },
  },

  mounted() {
    this.$store.dispatch("fetchProducts");
  },

  methods: {
    deleteProduct(prodID) {
      if (confirm("Are you sure you want to delete this product?")) {
        this.$store.dispatch("deleteProduct", prodID);
        setTimeout(() => {
          location.reload();
        }, 500);
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
</style>
