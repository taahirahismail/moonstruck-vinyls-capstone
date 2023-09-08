<template>
    <div class="media">
        <h1 class="p-4 text-center heading-text">Checkout !</h1>

        <div v-for="product in fetchCart" :key="product.orderID" class="card mx-auto my-3 p-5 w-75 text-center prod-card">
            <div>
                <img :src="product.prodImg" :alt="product.albumName">

                <div>
                    <h4>{{ product.albumName }}</h4>
                    <cite>{{ product.albumArtist }}</cite>
                </div>

                <span>{{ product.price }}</span>

                <button type="submit" @click="removeFromCart(product.userID, product.prodID)">X</button>
            </div>
        </div>

        <div class="d-flex justify-content-between">
            Total: R (how do you add the total again?)

            <button type="submit" @click="clearCart(product.userID)">Proceed With Payment</button>
        </div>
    </div>
</template>

<script>
export default {
    props: ['product'],

    computed: {
        cart() {
            return this.$store.state.cart
        }
    },
    
    mounted() {
        this.$store.dispatch('fetchCart', this.userID)
    }
}
</script>

<style>
    
</style>