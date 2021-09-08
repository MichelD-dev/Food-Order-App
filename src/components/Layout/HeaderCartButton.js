import CartIcon from '../Cart/CartIcon'
import Context from '../../store/context'
import classes from './HeaderCartButton.module.scss'
import { useContext } from 'react'

const HeaderCartButton = ({ onClick }) => {
  const context = useContext(Context)

  const productsTotalNbr = context.items.reduce((productsTotal, item) => {
    return productsTotal + item.amount
  }, 0)

  return (
    <button onClick={onClick} className={classes.button}>
      <span>
        <CartIcon className={classes.icon} />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{context.items.length}</span>
    </button>
  )
}

export default HeaderCartButton
