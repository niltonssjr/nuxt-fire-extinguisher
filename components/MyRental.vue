<template>
  <div class="rental">
    <b-button variant="outline-danger" @click="removeItem(id)">
      Remove
    </b-button>
    <img :src="require(`@/assets/images/${image}`)" alt="" class="image">
    <div class="text-container">
      <span class="title">{{ title }}</span>
      <span class="snippet">{{ snippet }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rental: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    image () {
      return this.rental.image || null
    },
    title () {
      return this.rental.title || null
    },
    snippet () {
      return this.rental.snippet || null
    },
    id () {
      return this.rental.id || 0
    }
  },
  methods: {
    removeItem (id) {
      this.$emit('item:remove', { id })
    }
  }
}
</script>

<style scoped>
.rental{
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: flex-start;
    align-items: center;
}
.image {
    max-width: 150px;
    height: auto;
}
.text-container{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.text-container .name {
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #333;
}
.text-container .snippet {
    font-size: 0.9rem;
    color: #888;
}
</style>
