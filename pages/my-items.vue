<template>
  <div class="my-rentals-wrapper">
    <h1>My Rentals</h1>
    <div v-if="hasItems" class="my-rentals-list">
      <my-rental v-for="rental in myRentals" :key="rental.id" :rental="rental" @item:remove="removeItem">
        {{ rental }}
      </my-rental>
    </div>
    <page-not-found v-else />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import MyRental from '~/components/MyRental.vue'
export default {
  components: { MyRental },
  computed: {
    ...mapState(
      'rentals', [
        'myRentals'
      ]
    ),
    hasItems () {
      return !!this.myRentals.length
    }
  },
  methods: {
    removeItem ({ id }) {
      this.actionRemoveItem({ id })
    },
    ...mapActions(
      'rentals', [
        'actionRemoveItem'
      ]
    )
  }
}
</script>

<style>
.my-rentals-wrapper{
    padding: 40px 0px;
}
.my-rentals-wrapper h1{
    text-align: center;
}
.my-rentals-wrapper .my-rentals-list{
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>
