<template>
    <div>
        <h1 class="p-4 text-center heading-text">Shop Our Vinyls !</h1>

        <div>
            <!-- sort filter search goes here -->
        </div>

        <div v-if="products">
            <div class="col-6" v-for="product in products" :key="product"
            :product="product">
                <div class="card" id="prod-card">
                    <div class="prod-img">
                        <img :src="product.prodImg" :alt="product.albumName" class="img-fluid" id="image">
                    </div>

                    <div>
                        {{ product.albumName }}
                        <cite>{{ product.albumArtist }}</cite>
                        
                        <div>
                            {{ product.price }}
                            <button @click="viewProduct(product.prodID)" class="btn details-btn">View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else>
            <spinner-comp class="mx-auto my-5"/>
        </div>
    </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
    props: ["product"],
    components: {
        SpinnerComp
    },

    computed: {
        products() {
            return this.$store.state.products;
        },

        // insert search methods here
    },
    mounted() {
        this.$store.dispatch("fetchProducts");
    },

    methods: {
        viewProduct(prodID) {
            const selectedProduct = this.products.find(
                (product) => product.prodID === prodID
            );

            this.$store.commit("setSelectedProduct", selectedProduct);
            this.$router.push({name: "ProductView", params: {prodID: prodID}});
        },

        // sort by price

        // sort by name
    },

    data() {
        return {
            search: '',
            category: ''
        }
    }
}
</script>

<style scoped>
    
</style>