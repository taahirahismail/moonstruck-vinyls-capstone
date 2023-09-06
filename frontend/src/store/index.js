import { createStore } from 'vuex';
import axios from 'axios';
import {useCookies} from 'vue3-cookies';
const {cookies} = useCookies();
const url = "https://moonstruck-vinyls.onrender.com";

export default createStore({
  state: {
    users: null,
    user: null,
    userAuth: null,
    userLoggedIn: false,
    token: null,
    products: null,
    product: null,
    selectedProduct: null,
    orders: null,
    cart: null,
    spinner: null,
    message: null,
    asc: true
  },

  mutations: {
    setUsers(state, users) {
      state.users = users;
    },

    setUser(state, user) {
      state.user = user;
      state.userAuth = true;
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

    setSpinner(state, spinner) {
      state.spinner = spinner;
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

      state.asc = !state.asc
    },

    sortByName: (state) => {
      state.products.sort((a,b) => {
        return a.albumName.localeCompare(b.albumName);
      });

      if (!state.asc) {
        state.products.reverse();
      }

      state.asc = !state.asc
    }
  },

  actions: {
    // products functions
    async fetchProducts(context) {
      try {
        const {data} = await axios.get(`${url}/products`);
        context.commit("setProducts", data.results);
      } catch (e) {
        context.commit("setMessage", "An error occurred while fetching products.");
      }
    },

    async fetchProduct(context, payload) {
        try {
        const {data} = await axios.get(`${url}/product/${payload.prodID}`, payload.data);
        context.commit("setProduct", data.results);
      } catch (e) {
        context.commit("setMessage", "An error occurred while fetching a single product.");
      }
    },

    async addProduct(context, payload) {
      try {
        const {res} = await axios.post(`${url}/product`, payload);
        const {message, err} = await res.data;

        console.log(message, err);

        if (message) {
          context.commit("setProduct", message);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMessage", err);
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred while adding a product.");
      }
    },

    async updateProduct(context, payload) {
      try {
        const res = await axios.patch(`${url}/product/${payload.prodID}`, payload);
        const {message, err} = await res.data;

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
        const {res} = await axios.delete(`${url}/product/${prodID}`);
        const {message, err} = await res.data;

        if (err) {
          alert("An error has occurred, please try again later.");
        }

        if (message) {
          context.commit("setProduct", message);
          context.commit("setSpinner", false);
        } else {
          context.commit("setMessage", "An error occurred.");
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred while deleting a product.");
      }
    },

    // user functions
    async fetchUsers(context) {
      try {
        const {data} = await axios.get(`${url}/users`);
        context.commit("setUsers", data.results);
      } catch (e) {
        context.commit("setMessage", "An error occurred while fetching users.");
      }
    },

    async fetchUser(context, payload) {
      try {
        const {data} = await axios.get(`${url}/user/${payload.userID}`, payload.data);
        context.commit("setUser", data.result);
      } catch (e) {
        context.commit("setMessage", "An error occurred while fetching a single user.");
      }
    },

    async registerUser(context, payload) {
      try {
        const res = await axios.post(`${url}/register`, payload);
        const {message, err} = await res.data;

        if (err) {
          context.commit("setMessage", "Something went wrong in the registration process!");
        }

        if (message) {
          context.commit("setUser", message);
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred.")
      }
    },

  async userLogin(context, payload) {
    // insert function here 
  },

    async updateUser(context, payload) {
      try {
        const res = await axios.patch(`${url}/user/${payload.userID}`, payload.data);
        const {message, err} = res.data

        if (message) {
          context.commit("setUser", message)
        } else {
          context.commit("setMessage", err)
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred while updating user.");
      }
    },

    async deleteUser(context, userID) {
      try {
        const {res} = await axios.delete(`${url}/user/${userID}`);
        const {message, err} = res.data

        if (err) {
          console.error("An error has occurred: ", err)
          context.commit("setMessage", "An error has occurred while deleting user.")
        }

        if (message) {
          context.commit("setUser", message)
          console.log("User deleted successfully!")
        }
      } catch (e) {
        context.commit("setMessage", "An error occurred while deleting user.")
      }
    },

    // orders / cart functions here

  }
});
