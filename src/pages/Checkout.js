import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Checkout.css';
import { CartContext } from '../CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCreditCard, faClock } from '@fortawesome/free-solid-svg-icons';

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
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: '',
    exp: '',
    cvv: '',
  });
  const [orderType, setOrderType] = useState('');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name in customerInfo) {
      if (name === 'phone') {
        const rawValue = value.replace(/\D/g, ''); // Remove non-digit characters
        let formattedValue = rawValue;
        if (rawValue.length > 3 && rawValue.length <= 6) {
          formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3)}`;
        } else if (rawValue.length > 6) {
          formattedValue = `${rawValue.slice(0, 3)}-${rawValue.slice(3, 6)}-${rawValue.slice(6, 10)}`;
        }
        setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: formattedValue }));
        validateInput(name, formattedValue);
      } else {
        setCustomerInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
        validateInput(name, value);
      }
    } else if (name in paymentInfo) {
      if (name === 'cardNumber') {
        const rawValue = value.replace(/\D/g, ''); // Remove non-digit characters
        const formattedValue = rawValue.replace(/(.{4})/g, '$1 ').trim().slice(0, 19); // Format and limit length
        setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: formattedValue }));
        validateInput(name, formattedValue);
      } else if (name === 'exp') {
        const rawValue = value.replace(/\D/g, '').slice(0, 4); // Remove non-digit characters and limit length
        const formattedValue = rawValue.replace(/(\d{2})/, '$1/'); // Add slash after first 2 digits
        setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: formattedValue }));
        validateInput(name, formattedValue);
      } else if (name === 'cvv') {
        const formattedValue = value.replace(/\D/g, '').slice(0, 3);
        setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: formattedValue }));
        validateInput(name, formattedValue);
      } else {
        setPaymentInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
        validateInput(name, value);
      }
    } else if (name === 'orderType') {
      setOrderType(value);
    }
  };

  const validateInput = (name, value) => {
    let error = '';

    switch (name) {
      case 'fullName':
        if (!value) error = 'Full name is required';
        break;
      case 'address':
        if (!value) error = 'Address is required';
        break;
      case 'phone':
        if (!/^\d{3}-\d{3}-\d{4}$/.test(value)) error = 'Phone number must be 10 digits';
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) error = 'Email is invalid';
        break;
      case 'cardNumber':
        if (!/^\d{4} \d{4} \d{4} \d{4}$/.test(value)) error = 'Card number must be 16 digits';
        break;
      case 'exp':
        if (!/^\d{2}\/\d{2}$/.test(value)) error = 'Expiration date must be in MM/YY format';
        break;
      case 'cvv':
        if (!/^\d{3}$/.test(value)) error = 'CVV must be 3 digits';
        break;
      case 'orderType':
        if (!value) error = 'Order type is required';
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleOrder = () => {
    const newErrors = {};
    Object.keys(customerInfo).forEach((key) => {
      validateInput(key, customerInfo[key]);
      if (!customerInfo[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    Object.keys(paymentInfo).forEach((key) => {
      validateInput(key, paymentInfo[key]);
      if (!paymentInfo[key]) {
        newErrors[key] = `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });
    if (!orderType) {
      newErrors.orderType = 'Order type is required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const orderDetails = {
      cart,
      customerInfo,
      paymentInfo,
      orderType,
      total: cart.reduce((total, item) => total + parseFloat(item.price), 0).toFixed(2),
    };
    clearCart();
    history.push('/confirmation', { orderDetails });
  };

  const handleBack = () => {
    history.push('/order');
  };

  return (
    <div className="checkout-page-container">
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress" style={{ width: '66%' }}></div>
        </div>
        <p>Step 2/3: Checkout</p>
      </div>
      <div className="order-form-page">
        <h2>
          <FontAwesomeIcon icon={faUser} /> Customer Information
        </h2>
        {errors.fullName && <span className="error">{errors.fullName}</span>}
        <input
          type="text"
          name="fullName"
          placeholder="Enter Full Name"
          onChange={handleChange}
        />
        
        {errors.address && <span className="error">{errors.address}</span>}
        <input
          type="text"
          name="address"
          placeholder="Enter Full Address"
          onChange={handleChange}
        />
        
        {errors.phone && <span className="error">{errors.phone}</span>}
        <input
          type="tel"
          name="phone"
          placeholder="Enter Phone Number"
          onChange={handleChange}
          maxLength="12"
          value={customerInfo.phone}
        />
        
        {errors.email && <span className="error">{errors.email}</span>}
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleChange}
        />
        
        <h2>
          <FontAwesomeIcon icon={faCreditCard} /> Payment Information
        </h2>
        {errors.cardNumber && <span className="error">{errors.cardNumber}</span>}
        <input
          type="tel"
          name="cardNumber"
          placeholder="Card Number"
          onChange={handleChange}
          maxLength="19"
          value={paymentInfo.cardNumber}
        />
        
        {errors.exp && <span className="error">{errors.exp}</span>}
        <input
          type="tel"
          name="exp"
          placeholder="EXP"
          onChange={handleChange}
          maxLength="5"
          value={paymentInfo.exp}
        />
        
        {errors.cvv && <span className="error">{errors.cvv}</span>}
        <input
          type="number"
          name="cvv"
          placeholder="CVV"
          onChange={handleChange}
          maxLength="3"
          value={paymentInfo.cvv}
          onInput={(e) => {
            if (e.target.value.length > 3) {
              e.target.value = e.target.value.slice(0, 3);
            }
          }}
        />
        
        <h2>
          <FontAwesomeIcon icon={faClock} /> Order Information
        </h2>
        {errors.orderType && <span className="error">{errors.orderType}</span>}
        <div className="radio-group">
          <label>
            <input type="radio" name="orderType" value="Pick-Up" onChange={handleChange} /> Pick-Up
          </label>
          <label>
            <input type="radio" name="orderType" value="Delivery" onChange={handleChange} /> Delivery
          </label>
        </div>
        
        <div className="date-time-group">
          <input type="time" />
          <input type="date" />
        </div>
        <div className="button-group">
          <button className="back-button" onClick={handleBack}>
            Back
          </button>
          <button className="confirm-order-button" onClick={handleOrder}>
            Confirm Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
