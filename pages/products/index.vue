<template>
  <div class="">
    <div class="container">
      <large-card-display
        v-for="cardInfo in largeCardSections.slice(0,1)"
        :key="cardInfo.id"
        :cards-section="cardInfo"
      />
      <small-cards-display
        v-for="cardInfo in smallCardSections"
        :key="cardInfo.id"
        :cards-section="cardInfo"
      />
    </div>
  </div>
</template>

<script>
import LargeCardDisplay from '~/components/LargeCardDisplay.vue'
import SmallCardsDisplay from '~/components/SmallCardsDisplay.vue'
import { largeCardSections, smallCardSections } from '@/assets/data/data.js'

export default {
  components: {
    LargeCardDisplay,
    SmallCardsDisplay
  },
  data () {
    return {
      largeCardSections,
      smallCardSections
    }
  }
}
</script>

<style>

</style>
