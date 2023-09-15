<template>
  <div class="star-bg">
    <h1 class="text-center p-3 heading-text">My Account</h1>

    <div class="card mx-auto my-3 p-5 w-75 user-card">
      <div class="m-3 text-center">
        <img
          :src="$store.state.user?.userImg"
          :alt="$store.state.user?.firstName"
          class="img-fluid mb-5"
          style="max-width: 60%; border-radius: 50%"
        />

        <h2 class="gold-text">
          {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
        </h2>
        <cite>{{ $store.state.user?.userRole }}</cite>
      </div>

      <div>
        <div class="card mb-5 p-3 info-card">
          <span><strong>User ID: </strong>{{ $store.state.user?.userID }}</span>
          <br />
          <br />
          <span><strong>Email: </strong>{{ $store.state.user?.emailAdd }}</span>
          <br />
          <br />
          <span
            ><strong>Password: </strong>{{ $store.state.user?.userPass }}</span
          >
        </div>

        <div class="d-flex justify-content-between detail-btns">
          <button
            type="button"
            class="btn edit-users-btn"
            @click="openEditModal(user.userID)"
            data-bs-toggle="modal"
            :data-bs-target="'#edit-user-modal' + user.userID"
          >
            Edit
          </button>

          <div
            class="modal"
            :id="'edit-user-modal' + user.userID"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content blue-bg">
                <div class="modal-header">
                  <h1 class="modal-title text-center modal-heading-text">
                    Update User:
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="close"
                  ></button>
                </div>

                <div class="modal-body">
                  <div class="mb-3">
                    <label class="form-label">First Name :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="editUser.firstName"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Last Name :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="editUser.lastName"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Email :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="editUser.emailAdd"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Password :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="editUser.userPass"
                    />
                  </div>

                  <div class="mb-3">
                    <label class="form-label">Profile Image :</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="editUser.userImg"
                    />
                  </div>
                </div>

                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn edit-user-btn"
                    @click="updateUser(user.userID)"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>

          <button type="submit" class="btn logout-btn">
            <router-link to="/logout" class="logout-text">Log Out</router-link>
          </button>
          <button
            type="submit"
            class="btn del-btn"
            @click="deleteUser(user.userID)"
          >
            Delete Account
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["user"],

  data() {
    return {
      editUser: {
        ...this.user,
      },

      editUserID: null,

      user: {
        firstName: "",
        lastName: "",
        emailAdd: "",
        userPass: "",
        userImg: "",
      },
    };
  },

  computed: {
    user() {
      return this.$store.state.user;
    },

    mounted() {
      return this.$store.dispatch("fetchUser");
    },
  },

  methods: {
    openEditModal(userID) {
      this.editUserID = userID;
      this.editUser = {
        ...this.$store.state.users.find((user) => user.userID === userID),
      };
    },

    updateUser(userID) {
      this.$store
        .dispatch("updateUser", {
          userID: userID,
          data: { ...this.editUser },
        })
        .then(() => {
          console.log("User updated!");
          setTimeout(() => {
            window.location.reload();
          }, 500);
        })
        .catch((err) => {
          console.error("Error updating: ", err);
        });

      this.$swal({
        title: "Profile Updated!",
        icon: "success",
        timer: 5000,
      });
    },

    deleteUser(userID) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", userID);
        localStorage.removeItem('setToken');
        localStorage.removeItem('user');

        setTimeout(() => {
          router.push({name: 'register'});
        }, 500);

        this.$swal({
          title: "Profile Deleted!",
          icon: "success",
          timer: 5000,
        });
      }
    },
  },
};
</script>

<style scoped>
.star-bg {
  background-image: url('https://i.postimg.cc/tC6TPGSj/other-stars.png');
  background-repeat: no-repeat;
  background-position: fixed;
  background-size: cover;
  background-attachment: fixed;
}

.heading-text {
  font-family: "Archivo Black", sans-serif;
}

.gold-text {
  color: #ffd700;
  font-family: "Montserrat Alternates", sans-serif;
}

.user-card {
  background: #0a192f;
  border: 3px solid #f4f4f4;
  color: #f4f4f4;
}

.info-card {
  background: #010111;
  border: 3px solid #f4f4f4;
  color: #f4f4f4;
}

.logout-text {
  text-decoration: none;
  color: #0a192f;
}

.logout-text:hover {
  color: #ffd700;
}

.del-btn,
.edit-users-btn,
.logout-btn {
  color: #0a192f;
  background: #ffd700;
  border: 2px solid #ffd700;
}

.del-btn:hover,
.edit-users-btn:hover,
.logout-btn:hover {
  background: #0a192f;
  color: #ffd700;
}

/* edit user modal styling */
.blue-bg {
  background: #0a192f;
}

.modal-heading-text {
  color: #ffd700;
  font-family: "Montserrat Alternates", sans-serif;
}

.edit-user-btn {
  background: #0a192f;
  color: #ffd700;
  border: 3px solid #0a192f;
}

.edit-user-btn:hover {
  border: 3px solid #ffd700;
}

.modal-content {
  border: 2px solid #ffd700;
}

@media screen and (max-width: 430px) {
  .detail-btns {
    display: flex;
    flex-direction: column;
  }

  .edit-btn,
  .del-btn {
    margin: 5px;
  }

  .info-card {
    font-size: 15px;
  }

  .user-card {
    margin: 10px !important;
    padding: 10px !important;
    width: 95% !important;
  }
}
</style>
