<template>
    <div>
        <button
        type="button"
        class="btn cart-btn"
        data-bs-toggle="modal"
        data-bs-target="#cart-modal">Cart</button>

        <div 
        class="modal"
        id="cart-modal"
        tab-index="-1"
        aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title heading-text">Your Cart: </h1>
                <button
                type="button"
                class="btn-close"
                data-bs-modal="modal"
                aria-label="close"></button>
            </div>

            <div class="modal-body" v-for="product in fetchCart" :key="product.orderID">
            <img :src="product.prodImg" :alt="product.albumName">
            
            </div>
        </div>
    </div>
    </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    
</style>