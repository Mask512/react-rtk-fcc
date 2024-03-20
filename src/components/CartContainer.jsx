import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch } from 'react-redux';
// import { clearCart } from '../features/cart/cartSlice';
import { openModal } from '../features/modal/modalSlice';

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return <EmptyCart />;
  }

  return (
    <section className="cart">
      <h2>Your Bag</h2>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
