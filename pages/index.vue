<template>
  <div class="">
    <hero-page />
    <large-card-display
      v-for="cardInfo in largeCardInfo"
      :key="cardInfo.id"
      :cards-section="cardInfo"
    />
    <small-cards-display
      v-for="cardInfo in smallCardInfo"
      :key="cardInfo.id"
      :cards-section="cardInfo"
    />
  </div>
</template>

<script>
import HeroPage from '~/components/HeroPage.vue'
import LargeCardDisplay from '~/components/LargeCardDisplay.vue'
import { largeCardSections, smallCardSections } from '@/assets/data/data'
import SmallCardsDisplay from '~/components/SmallCardsDisplay.vue'

export default {
  name: 'IndexPage',
  components: {
    HeroPage,
    LargeCardDisplay,
    SmallCardsDisplay
  },
  data () {
    return {
      largeCardInfo: largeCardSections,
      smallCardInfo: smallCardSections
    }
  }
}
</script>
