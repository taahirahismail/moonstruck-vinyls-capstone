import { createStore } from "vuex";
import axios from "axios";
import sweet from 'vue-sweetalert2'
// import authUser from '@/services/AuthenticateUser'
import { useCookies } from "vue3-cookies";
const { cookies } = useCookies();
const url = "https://moonstruck-vinyls.onrender.com";

export default createStore({
  state: {
    users: null,
    user: null || JSON.parse(localStorage.getItem("user")),
    userAuth: null,
    userLoggedIn: false,
    token: null || localStorage.getItem("token"),
    products: null,
    product: null,
    selectedProduct: null,
    orders: null,
    cart: null,
    message: null,
    asc: true,
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setUser(state, user) {
      state.user = user,
        state.userAuth = true,
        localStorage.setItem("user", JSON.stringify(user));
    },

    setUserLoggedIn(state, userLoggedIn) {
      state.userLoggedIn = userLoggedIn;
    },

    setToken(state, token) {
      state.token = token;
    },

    setProducts(state, products) {
      state.products = products;
    },

    setProduct(state, product) {
      state.product = product;
    },

    setSelectedProduct(state, product) {
      state.selectedProduct = product;
    },

    setOrders(state, orders) {
      state.orders = orders;
    },

    setCart(state, cart) {
      state.cart = cart;
    },

    setMessage(state, message) {
      state.message = message;
    },

    sortByPrice: (state) => {
      state.products.sort((a, b) => {
        return a.price - b.price;
      });

      if (!state.asc) {
        state.products.reverse();
      }

      state.asc = !state.asc;
    },

    sortByName: (state) => {
      state.products.sort((a, b) => {
        return a.albumName.localeCompare(b.albumName);
      });

      if (!state.asc) {
        state.products.reverse();
      }

      state.asc = !state.asc;
    },
  },

  actions: {
    // products functions
    async fetchProducts(context) {
      try {
        const { data } = await axios.get(`${url}/products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit(
          "setMessage",
          "An error occurred while fetching products."
        );
      }
    },

    async fetchProduct(context, payload) {
      try {
        const { data } = await axios.get(
          `${url}/product/${payload.prodID}`,
          payload.data
        );
        context.commit("setProduct", data.results);
      } catch (e) {
        context.commit(
          "setMessage",
          "An error occurred while fetching a single product."
        );
      }
    },

    async addProduct(context, payload) {
      try {
        const { res } = await axios.post(`${url}/product`, payload);
        const { message, err } = await res.data;

        console.log(message, err);

        if (message) {
          context.commit("setProduct", message);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMessage", err);
        }
      } catch (e) {
        context.commit(
          "setMessage",
          "An error occurred while adding a product."
        );
      }
    },

    async updateProduct(context, payload) {
      try {
        const res = await axios.patch(
          `${url}/product/${payload.prodID}`,
          payload
        );
        const { message, err } = await res.data;

        if (err) {
          console.log("An error has occurred: ", err);
          context.commit("setMessage", err);
        }

        if (message) {
          context.dispatch("fetchProducts");
          context.commit("setProduct", message);
          context.commit("setMessage", "Product successfully updated!");
        }
      } catch (e) {
        context.commit("setMessage", e);
      }
    },

    async deleteProduct(context, prodID) {
      try {
        const { res } = await axios.delete(`${url}/product/${prodID}`);
        const { message, err } = await res.data;

        if (err) {
          alert("An error has occurred, please try again later.");
        }

        if (message) {
          context.commit("setProduct", message);
        } else {
          context.commit("setMessage", "An error occurred.");
        }
      } catch (e) {
        context.commit(
          "setMessage",
          "An error occurred while deleting a product."
        );
      }
    },

    // user functions
    async fetchUsers(context) {
      try {
        const { data } = await axios.get(`${url}/users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMessage", "An error occurred while fetching users.");
      }
    },

    async fetchUser(context, payload) {
      try {
        const { data } = await axios.get(
          `${url}/user/${payload.userID}`,
          payload.data
        );
        context.commit("setUser", data.result);
      } catch (e) {
        context.commit(
          "setMessage",
          "An error occurred while fetching a single user."
        );
      }
    },

    async registerUser(context, payload) {
      try {
        const res = await axios.post(`${url}/register`, payload);
        const { message, err } = await res.data;

        if (err) {
          context.commit(
            "setMessage",
            "Something went wrong in the registration process!"
          );
        }

        if (message) {
          context.commit("setUser", message);
          setTimeout(() => {
            router.push('/login')
          }), 3000
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred.");
      }
    },

    async login(context, payload) {
      try {
        const res = await axios.post(`${url}/login`, payload);
        const { result, token, message, err } = await res.data;

        if (result) {
          context.commit("setUser", result);
          context.commit("setToken", token);
          localStorage.setItem("setToken", token);
          localStorage.setItem("user", JSON.stringify(result));
          // context.commit("setUserLoggedIn", true);
          
          cookies.set("AuthorizedUser", {token, message, result});
        } else {
          context.commit("setMessage", err);
        }
      } catch (e) {
        console.error(e);
      }
    },

    async updateUser(context, payload) {
      try {
        const res = await axios.patch(
          `${url}/user/${payload.userID}`,
          payload.data
        );
        const { message, err } = res.data;

        if (message) {
          context.commit("setMessage", message);
          context.commit("setUser", payload);
          context.dispatch("getUsers");
        } else {
          context.commit("setMessage", err);
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred while updating user.");
      }
    },

    async deleteUser(context, userID) {
      try {
        const { res } = await axios.delete(`${url}/user/${userID}`);
        const { message, err } = res.data;

        if (err) {
          console.error("An error has occurred: ", err);
          context.commit(
            "setMessage",
            "An error has occurred while deleting user."
          );
        }

        if (message) {
          context.commit("setUser", message);
          console.log("User deleted successfully!");
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred while deleting user.");
      }
    },

    // orders / cart functions here
    async fetchOrders(context) {
      try {
        const { data } = await axios.get(`${url}/orders`);
        context.commit("setOrders", data.results);
      } catch (e) {
        context.commit(
          "setMessage",
          "An error occurred while fetching orders."
        );
      }
    },

    async fetchCart(context) {
      try {
        const userID = context.state.user.userID;
        const response = await axios.get(`${url}/user/${userID}/carts`);
        const data = response.data;
    
        if (data != null) {
          context.commit("setCart", data);
        } else {
          context.commit("setCart", null);
        }
      } catch (error) {
        context.commit("setMessage", "An error occurred while fetching cart.");
      }
    },

    async addToCart(context, userID) {
      try {
        userID = context.state.user.userID;
        await axios.post(`${url}/user/${userID}/cart`)
        .then((res) => res.json())
        .then((data) => {
          context.dispatch("fetchCart", data);
        });
      } catch (e) {
        context.commit("setMessage", "An error occurred while adding to cart.");
      }
    },

    async updateCart(context, userID, orderID) {
      try {
        const res = await axios.patch(`${url}/user/${userID}/cart/${orderID}`);
        const { results, err } = await res.data;

        if (results) {
          context.commit("setCart", results);
        } else {
          context.commit("setMessage", err);
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred while updating cart.");
      }
    },

    async clearCart(context, userID) {
      try {
        const res = await axios.delete(`${url}/user/${userID}/cart`);
        const { message, err } = res.data;

        if (err) {
          context.commit("setMessage", err);
        }

        if (message) {
          context.commit("setCart", message);
          console.log("Cart cleared successfully!");
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred while clearing cart.");
      }
    },

    async removeFromCart(context, userID, prodID) {
      try {
        const res = await axios.delete(`${url}/user/${userID}/cart/${prodID}`);
        const { message, err } = res.data;

        if (err) {
          context.commit("setCart", message);
          console.log("");
        }
      } catch (e) {
        context.commit(
          "setMessage",
          "An error occurred while removing from cart"
        );
      }
    },
  },
});
