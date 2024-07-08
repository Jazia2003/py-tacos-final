import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Order.css';
import { CartContext } from '../CartContext';

const Order = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [personalizedCount, setPersonalizedCount] = useState(1);
  const history = useHistory();

  const handleNext = () => {
    history.push('/checkout', { cart });
  };

  const totalPrice = cart.reduce((total, item) => total + parseFloat(item.price), 0);

  return (
    <div className="order-page">
      <div className="order-summary">
        <h2>Order Summary:</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.customized ? `Personalized Ice Cream Taco ${item.id}` : item.name}: ${parseFloat(item.price).toFixed(2)}
            </li>
          ))}
        </ul>
        <p>Total: ${totalPrice.toFixed(2)}</p>
      </div>
      <div className="add-order">
        <h2>Add to your Order:</h2>
        <button onClick={() => history.push('/menu')}>Select from Menu</button>
        <button onClick={() => {
          setPersonalizedCount(personalizedCount + 1);
          history.push('/customize');
        }}>Customize Your Own</button>
      </div>
      <button className="next-button" onClick={handleNext}>Next</button>
    </div>
  );
};

export default Order;
