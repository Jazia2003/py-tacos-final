import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Checkout.css';
import { CartContext } from '../CartContext';

const Checkout = () => {
  const { cart } = useHistory().location.state || { cart: [] };
  const { clearCart } = useContext(CartContext);
  const history = useHistory();
  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    address: '',
    phone: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const handleOrder = () => {
    const orderDetails = {
      cart,
      customerInfo,
      total: cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2),
    };
    clearCart();
    history.push('/confirmation', { orderDetails });
  };

  return (
    <div className="order-form-page">
      <h2>Customer Information</h2>
      <input type="text" name="fullName" placeholder="Enter Full Name" onChange={handleChange} />
      <input type="text" name="address" placeholder="Enter Full Address" onChange={handleChange} />
      <input type="text" name="phone" placeholder="Enter Phone Number" onChange={handleChange} />
      <input type="email" name="email" placeholder="Enter Email" onChange={handleChange} />
      
      <h2>Payment Information</h2>
      <input type="text" placeholder="Card Number" />
      <input type="text" placeholder="EXP" />
      <input type="text" placeholder="CVV" />
      
      <h2>Order Information</h2>
      <div className="radio-group">
        <label>
          <input type="radio" name="orderType" value="Pick-Up" /> Pick-Up
        </label>
        <label>
          <input type="radio" name="orderType" value="Delivery" /> Delivery
        </label>
      </div>
      <div className="date-time-group">
        <input type="time" />
        <input type="date" />
      </div>
      <button className="confirm-order-button" onClick={handleOrder}>Confirm Order</button>
    </div>
  );
};

export default Checkout;
