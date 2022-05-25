const getProductById = state => id => state.productList.find(
  product => String(product.id) === id
)

export default {
  getProductById
}
