import React ,{ useContext , useState , useEffect } from 'react'
import CardIcon from '../Cart/CardIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = (props) => {
  const [highlight , setHighlight] = useState(false)
  const cartCtx = useContext(CartContext)

  const { items } = cartCtx
  const numberOfCartItems = items.reduce((curNumber , item) => {
    return curNumber + item.amount
  }, 0)

  const btnClasses = `${classes.button} ${ highlight ? classes.bump : '' }`  

  useEffect(() => {
    if(items.length === 0){
      return
    }
    setHighlight(true)

    const timer = setTimeout(() => {
      setHighlight(false)
    } , 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <button className={ btnClasses } onClick={props.onClick}>
      <span className={classes.icon}>
        <CardIcon/>
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  )
}

export default HeaderCartButton
