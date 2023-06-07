import React , {Fragment} from 'react'
import mealImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'
import classes from './Header.module.css'

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton>Cart</HeaderCartButton>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="" />
      </div>
    </Fragment>
  )
}

export default Header
