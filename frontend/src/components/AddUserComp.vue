<template>
  <div>
    <div class="button">
      <a
        data-bs-toggle="modal"
        data-bs-target="#add-user-modal"
        href="#add-user-modal"
        class="m-2 text-center btn add-user-btn"
      >
        Add User
      </a>
    </div>

    <div class="modal" id="add-user-modal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header blue-bg">
            <h1 class="text-center heading-text">Register User:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form @submit.prevent="registerUser" class="p-3 blue-bg">
              <div class="mb-3">
                <label for="firstName" class="form-label">
                  First Name: *
                </label>
                <input
                  v-model="user.firstName"
                  type="text"
                  id="firstName"
                  class="form-control input-bg"
                  placeholder="eg: Clayton"
                  required
                  oninvalid="this.setCustomValidity('Please enter your first name')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="lastName" class="form-label"> Last Name: * </label>
                <input
                  v-model="user.lastName"
                  type="text"
                  id="lastName"
                  class="form-control input-bg"
                  placeholder="eg: Sherman"
                  required
                  oninvalid="this.setCustomValidity('Please enter your last name.')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="userRole" class="form-label"> User Role: * </label>
                <input
                  v-model="user.userRole"
                  type="text"
                  id="userRole"
                  class="form-control input-bg"
                  placeholder="eg: Admin"
                  required
                  oninvalid="this.setCustomValidity('Please enter your user role.')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="emailAdd" class="form-label"> Email: * </label>
                <input
                  v-model="user.emailAdd"
                  type="text"
                  id="emailAdd"
                  class="form-control input-bg"
                  placeholder="eg: claytonsherman@gmail.com"
                  required
                  oninvalid="this.setCustomValidity('Please enter a valid email address.')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="userPass" class="form-label"> Password: * </label>
                <input
                  v-model="user.userPass"
                  type="text"
                  id="password"
                  class="form-control input-bg"
                  required
                  oninvalid="this.setCustomValidity('Please enter a password')"
                  oninput="this.setCustomValidity('')"
                />
              </div>

              <div class="mb-3">
                <label for="userImg" class="form-label"> User Profile: </label>
                <input
                  v-model="user.userImg"
                  type="text"
                  id="userImg"
                  class="form-control input-bg"
                  placeholder="Insert image link."
                />
              </div>

              <p>* indicates a required field</p>

              <div class="modal-footer blue-bg">
                <button
                  type="submit"
                  class="m-2 btn add-user-btn"
                  data-bs-dismiss="modal"
                >
                  Register
                </button>
                <button type="reset" class="m-2 btn clr-btn">
                  Clear Fields
                </button>
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
  props: ['user'],

  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        userRole: "",
        emailAdd: "",
        userPass: "",
        userImg: "https://i.postimg.cc/t4K6NhxQ/default-profile.png",
      },
    };
  },

  methods: {
      registerUser() {
      this.$store.dispatch("registerUser", this.user);
      this.$router.push('/admin');
      setTimeout(() => {
        location.reload();
      }, 5000);
    },
  },
};
</script>

<style scoped>
.blue-bg {
  background: #0a192f;
}

.heading-text {
  color: #ffd700;
  font-family: "Montserrat Alternates", sans-serif;
}
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

.add-user-btn,
.clr-btn {
  background: #0a192f;
  color: #ffd700;
  border: 3px solid #0a192f;
}

.add-user-btn:hover,
.clr-btn:hover {
  border: 3px solid #ffd700;
}

.modal-content {
  border: 2px solid #ffd700;
}
</style>
