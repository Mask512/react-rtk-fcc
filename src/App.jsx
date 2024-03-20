/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import Modal from './components/Modal';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals, getCartItems } from './features/cart/cartSlice';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (isLoading)
    return (
      <div className="loading">
        <h1>loading....</h1>
      </div>
    );

  return (
    <>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </>
  );
}
export default App;
