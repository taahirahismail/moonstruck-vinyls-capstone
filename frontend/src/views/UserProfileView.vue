<template>
  <div>
    <h1 class="text-center p-3 heading-text">My Account</h1>

    <div class="card mx-auto my-3 p-5 w-75 user-card">
      <div class="m-3 text-center">
        <img
          :src="$store.state.user?.userImg"
          :alt="$store.state.user?.firstName"
          class="img-fluid mb-5"
          style="max-width: 60%; border-radius: 50%;"
        />

        <h2 class="gold-text">
          {{ $store.state.user?.firstName }} {{ $store.state.user?.lastName }}
        </h2>
        <cite>{{ $store.state.user?.userRole }}</cite>
      </div>

      <div>
        <div class="card mb-5 p-3 info-card">
          <span><strong>User ID: </strong>{{ $store.state.user?.userID }}</span> <br> <br>
          <span><strong>Email: </strong>{{ $store.state.user?.emailAdd }}</span> <br> <br>
          <span><strong>Password: </strong>{{ $store.state.user?.userPass }}</span>
        </div>

        <div class="d-flex justify-content-between">
          <update-user-comp class="btn edit-btn"/>
          <button type="submit" class="btn del-btn" @click="deleteUser(user.userID)">Delete Account</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateUserComp from "../components/UpdateUserComp.vue";

export default {
  props: ["user"],

  components: {
    UpdateUserComp,
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
    deleteUser(userID) {
      if (confirm("Are you sure you want to delete this user?")) {
        this.$store.dispatch("deleteUser", userID);
        setTimeout(() => {
          location.reload();
        }, 500);
      }
    },
  }
};
</script>

<style scoped>
.heading-text {
  font-family: "Archivo Black", sans-serif;
}

.gold-text {
  color: #ffd700;
  font-family: 'Montserrat Alternates', sans-serif;
}

.user-card {
    background: #0A192F;
    border: 3px solid #f4f4f4;
    color: #f4f4f4;
}

.info-card {
    background: #010111;
    border: 3px solid #f4f4f4;
    color: #f4f4f4;
}

.del-btn, .edit-btn {
    color: #0A192F;
    background: #FFD700;
    border: 2px solid #FFD700;
}

.del-btn:hover {
    background: #0A192F;
    color: #FFD700;
}
</style>
