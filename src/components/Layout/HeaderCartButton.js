import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.scss'

const HeaderCartButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.button}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton
