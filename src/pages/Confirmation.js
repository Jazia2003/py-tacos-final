import React from 'react';
import { useLocation } from 'react-router-dom';
import './Confirmation.css';

const Confirmation = () => {
  const location = useLocation();
  const { orderDetails } = location.state || { orderDetails: { cart: [], customerInfo: {}, total: '0.00' } };

  return (
    <div className="confirmation-page-container">
      <div className="progress-container">
        <div className="progress-bar">
          <div className="progress" style={{ width: '100%' }}></div>
        </div>
        <p>Step 3/3: Confirmation</p>
      </div>
      <div className="confirmation-page">
        <h2>Thank you for your order!</h2>
        <div className="order-details">
          <h3>Order Details:</h3>
          <ul>
            {orderDetails.cart.map((item, index) => (
              <li key={index}>
                {item.customized ? `Personalized Ice Cream Taco ${item.id}` : item.name}: ${item.price}
              </li>
            ))}
          </ul>
          <p>Total: ${orderDetails.total}</p>
        </div>
        <div className="customer-info">
          <h3>Customer Information:</h3>
          <p><strong>Name:</strong> {orderDetails.customerInfo.fullName}</p>
          <p><strong>Address:</strong> {orderDetails.customerInfo.address}</p>
          <p><strong>Phone:</strong> {orderDetails.customerInfo.phone}</p>
          <p><strong>Email:</strong> {orderDetails.customerInfo.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
