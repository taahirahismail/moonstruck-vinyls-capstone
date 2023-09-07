<template>
  <div>
    <div class="card mx-auto my-5 p-5 w-50 blue-bg">
      <form @submit.prevent="login">
        <h1 class="text-center heading-text">Login :</h1>

        <div class="mb-3">
          <label for="emailAdd" class="form-label">Email: </label>
          <input type="text" id="emailAdd" class="form-control" v-model="payload.emailAdd" required />
        </div>

        <div class="mb-3">
          <label for="userPass" class="form-label">Password: </label>
          <input type="text" id="userPass" class="form-control" v-model="payload.userPass" required />
        </div>

        <div class="text-center p-3">
          <button type="submit" class="btn m-1 p-2 login-btn">Login</button>
          <button type="reset" class="btn m-1 p-2 clr-btn">Clear Fields</button>
        </div>
      </form>

      <div class="text-center">
        <router-link to="/register" class="reg-link"
          >Don't have an account yet? Click here to register now !</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            payload: {
                emailAdd: '',
                userPass: ''
            }
        }
    },

    computed: {
        message() {
            return this.$store.state.message
        },

        user() {
            return this.$store.state.user
        }
    },

    methods: {
        login() {
            this.$store.dispatch('login', this.payload)
        }
    }
};
</script>

<style scoped>
.blue-bg {
  background: #0a192f;
  color: #f4f4f4;
  border: 3px solid #ffd700;
}

.heading-text {
  font-family: "Archivo Black", sans-serif;
  color: #ffd700;
}

.login-btn,
.clr-btn {
  background: #0a192f;
  color: #ffd700;
  border: 2px solid #ffd700;
}

.login-btn:hover,
.clr-btn:hover {
  background: #ffd700;
  color: #0a192f;
}

.reg-link {
    color: #f4f4f4;
    font-size: 20px;
}
</style>
