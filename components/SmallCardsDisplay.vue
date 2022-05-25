<template>
  <div class="container">
    <h4>{{ title }}</h4>
    <div class="card-container">
      <small-card v-for="card in cards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script>
import SmallCard from './SmallCard.vue'
export default {
  components: {
    SmallCard
  },
  props: {
    cardsSection: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    title () {
      return this.cardsSection.title
    },
    cards () {
      return this.cardsSection.cards
    }
  }
}
</script>

<style scoped>

    .container {
        padding: 2rem 0
    }

    .header {
        font-weight: 700;
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    .card-container {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>
