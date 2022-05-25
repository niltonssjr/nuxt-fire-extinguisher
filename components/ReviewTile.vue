<template>
  <div class="review-wrapper">
    <img :src="image" alt="" class="image">
    <div class="text-info">
      <span class="name">{{ name }}</span>
      <span class="location">{{ location }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    reviewer: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    name () {
      if (this.reviewer.name) {
        const { first, last, title } = this.reviewer.name
        return `${title}. ${first} ${last}`
      }

      return null
    },
    location () {
      if (this.reviewer.location) {
        const { state, country } = this.reviewer.location
        return `${state}, ${country}`
      }
      return null
    },
    image () {
      if (this.reviewer.picture) {
        return this.reviewer.picture.thumbnail
      }
      return null
    }
  }
}
</script>

<style>
.review-wrapper{
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
}

.review-wrapper .image {
    border-radius: 50%;
}
.review-wrapper .text-info{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.review-wrapper .text-info .name {
    color: #333;
    font-size: 1.2rem;
}

.review-wrapper .text-info .location {
    color: #888;
    font-size: 1rem;
}
</style>
