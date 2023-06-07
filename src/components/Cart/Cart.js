import React , {useContext} from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem'
import CartContext from '../../store/cart-context'

const Cart = (props) => {
	const cartCtx = useContext(CartContext)

	const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
	const hasItem = cartCtx.item.length > 0

  const cartItemRemoveHandler = (id) => {

  }

  const cartItemAddHandler = (item) =>{

  }

	const cartItem =(
	<ul className={classes['cart-items']}>
		{cartCtx.item.map((item)=>(
			<CartItem 
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null , item.id)}
        onAdd={cartItemAddHandler(null , item.id)}
			/>
		))}
	</ul>)


  return (
    <Modal onClose={props.onClose}>
		{cartItem}
      	<div className={classes.total}>
			<span>Total amount</span>
			<span>{totalAmount}</span>
		</div>
      	<div className={classes.actions}>
			<button className={classes['button--alt']} onClick={props.onClose}>Close</button>
			{hasItem && <button className={classes.button}>Other</button>}
		</div>
    </Modal>
  )
}

export default Cart
