export const actionRemoveItem = ({ commit }, { id }) => {
  commit('REMOVE_RENTAL_ITEM', id)
}

export const actionRentProduct = ({ commit, rootGetters }, { id }) => {
  const productToAdd = rootGetters['products/getProductById'](id)
  commit('ADD_RENTAL_ITEM', productToAdd)
}
