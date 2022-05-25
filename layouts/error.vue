<template>
  <div>
    <page-not-found v-if="isPageNotFoundError" />
    <div v-else>
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import PageNotFound from '~/components/PageNotFound.vue'
export default {
  components: {
    PageNotFound
  },
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      errorMap: {
        404: 'Página não encontrada',
        500: 'Erro interno no servidor'
      },
      isPageNotFoundError () {
        const { statusCode } = this.error
        return statusCode === '404'
      }
    }
  },
  computed: {
    errorMessage () {
      const { statusCode } = this.error
      const standardMessage = `Erro não identificado: ${statusCode}`
      return this.errorMap[statusCode] || standardMessage
    }
  }
}
</script>

<style>

</style>
