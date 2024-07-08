import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Customize from './pages/Customize';
import Order from './pages/Order';
import Checkout from './pages/Checkout';
import AboutUs from './pages/AboutUs'
import Confirmation from './pages/Confirmation';
import { CartProvider } from './CartContext';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
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
            </Switch>
          </div>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
