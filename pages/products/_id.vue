<template>
  <div>
    <div v-if="selectedProduct" class="container product-container">
      <img :src="require(`@/assets/images/${selectedProduct.image}`)" alt="" class="image">
      <rent-modal @product:rent="rentProduct" />
      <h2>{{ selectedProduct.title }}</h2>
      <h3>{{ selectedProduct.snippet }}</h3>
      <p>
        {{ selectedProduct.description }}
      </p>
      <reviews />
    </div>
    <div v-else class="container">
      <page-not-found />
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import RentModal from '~/components/RentModal.vue'

export default {
  components: { RentModal },
  data () {
    return {
      productId: null
    }
  },
  computed: {
    ...mapState('products', [
      'productList'
    ]),
    ...mapGetters('products', [
      'getProductById'
    ]),
    selectedProduct () {
      return this.getProductById(this.productId)
    }
  },
  mounted () {
    this.productId = this.$route.params.id || 0
  },
  methods: {
    rentProduct () {
      this.actionRentProduct({ id: this.productId })
    },
    ...mapActions(
      'rentals', [
        'actionRentProduct'
      ]
    )
  }

}
</script>

<style scoped>
.product-container{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    margin-top:20px;
    padding:30px 50px;
}
.product-container img{
  width: 70%;
}
</style>
