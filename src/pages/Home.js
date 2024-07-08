import React from 'react';
import './Home.css';
import logo from '../assets/home.png'; 

const Home = () => {
  return (
    <div className="home-page">
      <div className="top-section">
        <img src={logo} alt="Welcome to Py's Tacos" className="top-image" />
        <div className="welcome-message">
          {/* <p className="small-text">Your Sweet Adventure Starts with Ice Cream Tacos!</p> */}
          <h1>Welcome to Py's Tacos</h1>
          <button className="deals-button" onClick={() => window.location.href='/summer-deals'}>SUMMER DEALS</button>
        </div>
      </div>
      <div className="middle-section">
        <p>
          Py's Tacos is your go-to place for delicious ice cream tacos. We blend the best of both worlds – the cool, creamy delight of ice cream with the fun, crunchy taco shell. Come and enjoy our unique flavors and exciting atmosphere!
        </p>
      </div>
      <div className="bottom-section">
        <div className="bottom-left">
          <h2>Business Hours</h2>
          <br/><p>Monday - Friday: 9am - 9pm</p>
          <br/><p>Saturday: 10am - 8pm</p>
          <br/><p>Sunday: Closed</p>
        </div>
        <div className="bottom-middle">
          <h2>Location & Phone Number</h2><br/>
          <p>1 Elgin Street</p>
          <p>Ottawa, ON, Canada</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="bottom-right">
          <h2>Find Us Here</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.486904762089!2d-75.6925!3d45.4215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce050b1e6b1a1b%3A0x28a85a59e1e44d7e!2s1%20Elgin%20St%2C%20Ottawa%2C%20ON%20K1P%205W1%2C%20Canada!5e0!3m2!1sen!2sus!4v1622990923017!5m2!1sen!2sus"
            style={{border:0}}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
