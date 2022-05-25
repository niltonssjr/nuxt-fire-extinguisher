const SET_REVIEWS = (state, reviews) => {
  state.reviews = Object.freeze(reviews)
}

export default {
  SET_REVIEWS
}
