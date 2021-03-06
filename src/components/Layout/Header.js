import HeaderCartButton from './HeaderCartButton'

import classes from './Header.module.scss'
import image from '../../assets/img/meals.jpg'

const Header = ({ onShowCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1>King Meals</h1>
        <HeaderCartButton onClick={onShowCart}>Cart</HeaderCartButton>
      </header>
      <div className={classes.main_image}>
        <img src={image} alt='table full of meals' />
      </div>
    </>
  )
}

export default Header
