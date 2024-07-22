import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Customize from './pages/Customize';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs';
import Confirmation from './pages/Confirmation';
import ContactUs from './pages/ContactUs'; // Import the ContactUs page
import { CartProvider } from './CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

function App() {
  return (
    <Router basename="/py-tacos">
      <CartProvider>
        <div className="app">
          <Header />
          <div className="main-content">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/customize" component={Customize} />
              <Route path="/order" component={Order} />
              <Route path="/checkout" component={Checkout} />
              <Route path="/confirmation" component={Confirmation} />
              <Route path="/aboutus" component={AboutUs} /> 
              <Route path="/contactus" component={ContactUs} /> {/* Add the new route */}
            </Switch>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
