<template>
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top purple-bg">
    <div class="container-fluid">
      <a class="navbar-brand px-3" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        <img
          src="https://i.postimg.cc/DzVqdyxt/moonstruck-vinyls-logo.png"
          alt="puzzles-logo"
          class="logo"
        />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-3 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/about" class="nav-link"
              >About</router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/products" class="nav-link"
              >Products</router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/contact" class="nav-link"
              >Contact</router-link
            >
          </li>

          <li class="nav-item">
            <router-link to="/checkout" class="nav-link"
              >Checkout</router-link
            > 
            <!-- <cart-comp/> -->
          </li>

          <li class="nav-item">
            <router-link to="/login" class="nav-link"
              >Login</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import CartComp from './CartComp.vue'

export default {
  components: { CartComp },
    
}
</script>

<style scoped>
    .purple-bg {
        background: #2D1128;
    }
    
    .nav-link {
        font-size: 20px;
        color: #F4F4F4;
    }

    .nav-link:hover {
        color: #ffe342;
    }
    
    .router-link-active {
        color: #FFD700;
    }

    .logo {
        width: 15%;
        border-radius: 50%;
    }
</style>