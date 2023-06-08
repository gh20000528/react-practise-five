import React ,{ useReducer } from 'react'
import CartContext from './cart-context'

const defaultCartState = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state , action) => {
  console.log(action.item.price ,action.item.amount)
  if ( action.type === 'ADD' ) {
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount
    
    const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id)

    const existingCartItem = state.items[existingCartItemIndex]
    let updateItems

    if (existingCartItem) {
      const updateItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      }
      updateItems = [...state.items]
      updateItems[existingCartItemIndex] = updateItem
    }else{
      updateItems = state.items.concat(action.item)
    }
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
    items: cardState.items,
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
