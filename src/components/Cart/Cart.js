import CartItem from './CartItem'
import Modal from '../UI/Modal'

import classes from './Cart.module.scss'

const Cart = ({ onHideCart }) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map(item => (
        <CartItem name={item.name} amount={item.amount} price={item.price} />
      ))}
    </ul>
  )
  return (
    <Modal onClose={onHideCart}>
      {cartItems}
      <div className={classes.total}></div>
      <span>Total Amount: </span>
      <span>35.62</span>
      <div className={classes.actions}>
        <button onClick={onHideCart} className={classes['button--alt']}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart
