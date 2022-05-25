<template>
  <div>
    <b-button id="show-btn" @click="showModal">
      Rent
    </b-button>

    <b-modal ref="my-modal" hide-footer title="Using Component Methods">
      <div class="calendar-container">
        <div class="text-container">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti ratione dicta reiciendis impedit mollitia iusto ullam minima. Voluptas, eligendi saepe.</p>
        </div>
        <vc-date-picker
          :value="null"
          color="red"
          is-dark
          is-range
        />
      </div>
      <b-button id="close" variant="outline-danger" @click="orderProduct">
        Order
      </b-button>
    </b-modal>
  </div>
</template>

<script>
export default {
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    toggleModal () {
      this.$refs['my-modal'].toggle('#toggle-btn')
    },
    orderProduct () {
      this.$emit('product:rent')
      this.hideModal()
    }
  }
}
</script>
<style scoped>
    button {
        width: 100%;
        border: none;
        padding: 0.5rem;
        color: white;
        font-weight: 700;
        padding: 1rem 4rem;
        border-radius: 100rem;
        background-color: rgb(231, 81, 43);
        color: white;
        font-weight: 700;
        transition: 0.5s;
    }
    .calendar-container {
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
    }
    p {
      color: grey
    }
    .text-container {
      padding: 0.5rem
    }
</style>
