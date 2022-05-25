export const REMOVE_RENTAL_ITEM = (state, id) => {
  const rentalItemIndex = state.myRentals.findIndex(
    rental => String(rental.id) === String(id)
  )
  state.myRentals.splice(rentalItemIndex, 1)
}

export const ADD_RENTAL_ITEM = (state, product) => {
  state.myRentals = [
    ...state.myRentals,
    product
  ]
}
