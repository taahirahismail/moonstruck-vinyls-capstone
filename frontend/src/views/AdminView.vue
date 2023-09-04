<template>
    <div>
        <h1 class="text-center p-3 heading-text">Admin !</h1>

        <div>
            <div class="d-flex justify-content-between">
                <h3 class="text-center p-3">Products</h3>
                <add-product-comp/>
            </div>
            <div class="d-flex justify-content-center">
                <table>
                    <thead>
                        <tr>
                            <th>Product ID</th>
                            <th>Album Name</th>
                            <th>Album Artist</th>
                            <th>Genre</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Product Image</th>
                            <th>Album Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody v-for="product in products" :key="product.prodID">
                        <tr v-if="products">
                            <td>{{ product.prodID }}</td>
                            <td>{{ product.albumName }}</td>
                            <td>{{ product.albumArtist }}</td>
                            <td>{{ product.genre }}</td>
                            <td>R{{ product.price }}</td>
                            <td>{{ product.quantity }}</td>
                            <td class="prod-img">
                                <img :src="product.prodImg" :alt="product.albumName"
                                loading="lazy"
                                class="img-fluid prod-img">
                            </td>
                            <td>{{ product.albumDesc }}</td>
                            <td>
                                <!-- insert update button here -->
                                <button class="btn del-btn" @click="deleteProduct(product.prodID)">Delete</button>
                            </td>
                        </tr>

                        <tr v-else>
                            <!-- insert spinner here -->
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import SpinnerComp from "../components/SpinnerComp.vue";
import AddProductComp from "@/components/AddProductComp.vue";

export default {
    components: {
        SpinnerComp,
        AddProductComp
    },

    computed: {
        products() {
            return this.$store.state.products;
        },
        product() {
            return this.$store.state.product;
        }
    },

    mounted() {
        this.$store.dispatch("fetchProducts");
    },

    methods: {
        deleteProduct(prodID) {
            if (confirm("Are you sure you want to delete this product?")) {
                this.$store.dispatch("deleteProduct", prodID);
                setTimeout(() => {
                    location.reload();
                }, 500);
            }
        }
    }
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.heading-text {
  font-family: "Archivo Black", sans-serif;
}

tr, th, td {
    border: 3px solid #f4f4f4;
    color: #f4f4f4;
    padding: 5px;
}
</style>