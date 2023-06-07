import React ,{ useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state , action) => {
  if ( action.type === 'ADD' ) {
    const updateItems = state.items.concat(action.item)
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount
    return{
      items: updateItems,
      totalAmount: updateTotalAmount
    }
  }
  return defaultCartState
}

const CartProvider = props => {
  const [cardState, dispatchCArtAction] = useReducer(cartReducer, defaultCartState)
  const addItemToCartHandler = (item) => {
    dispatchCArtAction({type: 'ADD', item: item})
  }
  const removeItemFromCartHandler = (id) => {
    dispatchCArtAction({type: 'ID', id: id})
  }

  const cartContext = {
    item: cardState.items,
    totalAmount: cardState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  }

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
