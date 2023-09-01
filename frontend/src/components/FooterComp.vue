<template>
    <div class="d-flex align-items-center justify-content-between footer purple-bg">
        <div>
            <router-link to="/profile" class="nav-link">Profile</router-link>
        </div>
        <div class="text-center">
            <span>&copy; Moonstruck Vinyl's <br> Yet Another Taahirah Ismail Production <br> 2023</span>
        </div>
        <div>
            <router-link to="/admin" class="nav-link">Admin</router-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .purple-bg {
        background: #2D1128;
    }

    .footer {
        padding: 20px;
    }

    .nav-link {
        font-size: 25px;
        color: #F4F4F4;
    }

    .nav-link:hover {
        color: #ffe342;
    }
    
    .router-link-active {
        color: #010111;
    }
</style>