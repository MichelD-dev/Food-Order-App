import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.scss'

const HeaderCartButton = () => {
  return (
    <button className={classes.button}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Votre carte</span>
      <span className={classes.badge}>3</span>
    </button>
  )
}

export default HeaderCartButton
