import services from '@/services/services.js'

const actionListReviews = async ({ commit }) => {
  try {
    const filter = 'results=8'
    const { results: reviews } = (await services.reviews.list(filter)).data
    commit('SET_REVIEWS', reviews)
    return Promise.resolve(reviews)
  } catch (error) {
    commit('SET_REVIEWS', [])
    return Promise.reject(error)
  }
}

export default {
  actionListReviews
}
