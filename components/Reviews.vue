<template>
  <div>
    <div v-if="$fetchState.pending">
      Loading...
    </div>
    <div v-else>
      <h3>Satisfied costumers:</h3>
      <div class="reviews-wrapper">
        <review-tile v-for="(reviewer, index) in reviews" :key="index" :reviewer="reviewer" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import ReviewTile from './ReviewTile.vue'

export default {
  components: { ReviewTile },
  async fetch () {
    await this.actionListReviews()
  },
  computed: {
    ...mapState(
      'reviews', [
        'reviews'
      ]

    )
  },
  methods: {
    ...mapActions(
      'reviews', [
        'actionListReviews'
      ]
    )
  }
}
</script>

<style>
.reviews-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
.reviews-wrapper > * {
    flex: 0 0 45%;
}
</style>
