import Context from './context'

const Provider = ({children}) => {
  const addItemToCartHandler = item => {}
  const removeItemFromCartHandler = id => {}

  const context = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }
  return <Context.Provider value={context}>{children}</Context.Provider>
}

export default Provider
