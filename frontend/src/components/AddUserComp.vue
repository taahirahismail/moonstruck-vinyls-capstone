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
          <div class="modal-header purple-bg">
            <h1 class="text-center heading-text">Register User:</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div>
            <form class="p-3 blue-bg">
              <div class="mb-3">
                <label for="firstName" class="form-label">
                  First Name: *
                </label>
                <input
                  v-model="model.user.firstName"
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
                <label for="lastName" class="form-label">
                  Last Name: *
                </label>
                <input
                  v-model="model.user.lastName"
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
                <label for="userRole" class="form-label">
                  User Role: *
                </label>
                <input
                  v-model="model.user.userRole"
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
                  v-model="model.user.emailAdd"
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
                  v-model="model.user.password"
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
                  v-model="model.user.userImg"
                  type="text"
                  id="userImg"
                  class="form-control input-bg"
                  placeholder="Insert image link."
                />
              </div>

              <p>* indicates a required field</p>

              
              <div class="modal-footer purple-bg">
                <button
                  type="submit"
                  class="m-2 btn add-prod-btn"
                  data-bs-dismiss="modal"
                  @click="register()"
                >
                  Register
                </button>
                <button type="reset" class="m-2 btn clr-btn">Clear Fields</button>
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
    data() {
        return {
            addUserID: null,

            model: {
                user: {
                    firstName: "",
                    lastName: "",
                    userRole: "",
                    emailAdd: "",
                    userPass: "",
                    userImg: ""
                }
            }
        }
    },

    methods: {
        register() {
            this.$store.dispatch("register", this.model.user);
            console.log(this.model.user);
            setTimeout(() => {
                location.reload();
            }, 50000);
        }
    }
}
</script>

<style>
    
</style>