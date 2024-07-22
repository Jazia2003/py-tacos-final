import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Customize.css';
import customizeImage from '../assets/customize-taco.png'; 
import { CartContext } from '../CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookie, faIceCream, faLemon, faRulerVertical} from '@fortawesome/free-solid-svg-icons';

const Customize = () => {
  const { addToCart } = useContext(CartContext);
  const [activeTab, setActiveTab] = useState('waffles');
  const [flavors, setFlavors] = useState([]);
  const [waffle, setWaffle] = useState('');
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState('');
  const history = useHistory();

  const handleCheckboxChange = (e, setState) => {
    const value = e.target.value;
    setState(prevState =>
      prevState.includes(value)
        ? prevState.filter(item => item !== value)
        : [...prevState, value]
    );
  };

  const handleRadioChange = (e, setState) => {
    setState(e.target.value);
  };

  const handleAddToCart = () => {
    const personalizedTaco = {
      name: `Personalized Ice Cream Taco`,
      price: '6.00', // Ensure price is a string
      description: `Waffle: ${waffle}, Flavors: ${flavors.join(', ')}, Toppings: ${toppings.join(', ')}, Size: ${size}`,
      customized: true,
    };
    addToCart(personalizedTaco);
    history.push('/order');
  };

  const handleShareCreation = () => {
    const shareData = {
      title: 'Check out my Ice Cream Taco creation!',
      text: 'I just created a personalized ice cream taco at Py\'s Tacos. Check it out!',
      url: customizeImage,
    };

    if (navigator.share) {
      navigator.share(shareData)
        .then(() => console.log('Successfully shared'))
        .catch(error => console.log('Error sharing', error));
    } else {
      alert('Sharing is not supported in this browser.');
    }
  };

  const renderOptions = () => {
    switch (activeTab) {
      case 'waffles':
        return (
          <div className="option-group">
            <label>
              <input type="radio" name="waffle" value="Plain" onChange={e => handleRadioChange(e, setWaffle)} checked={waffle === 'Plain'} /> Plain
            </label>
            <label>
              <input type="radio" name="waffle" value="Sugar" onChange={e => handleRadioChange(e, setWaffle)} checked={waffle === 'Sugar'} /> Sugar
            </label>
            <label>
              <input type="radio" name="waffle" value="Chocolate" onChange={e => handleRadioChange(e, setWaffle)} checked={waffle === 'Chocolate'} /> Chocolate
            </label>
            <label>
              <input type="radio" name="waffle" value="Vanilla" onChange={e => handleRadioChange(e, setWaffle)} checked={waffle === 'Vanilla'} /> Vanilla
            </label>
            <label>
              <input type="radio" name="waffle" value="Blueberry" onChange={e => handleRadioChange(e, setWaffle)} checked={waffle === 'Blueberry'} /> Blueberry
            </label>
            <label>
              <input type="radio" name="waffle" value="Strawberry" onChange={e => handleRadioChange(e, setWaffle)} checked={waffle === 'Strawberry'} /> Strawberry
            </label>
            <label>
              <input type="radio" name="waffle" value="Caramel" onChange={e => handleRadioChange(e, setWaffle)} checked={waffle === 'Caramel'} /> Caramel
            </label>
            <label>
              <input type="radio" name="waffle" value="Raspberry" onChange={e => handleRadioChange(e, setWaffle)} checked={waffle === 'Raspberry'} /> Raspberry
            </label>
          </div>
        );
      case 'iceCream':
        return (
          <div className="option-group">
            <label>
              <input type="checkbox" value="Chocolate" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Chocolate')} /> Chocolate
            </label>
            <label>
              <input type="checkbox" value="Vanilla" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Vanilla')} /> Vanilla
            </label>
            <label>
              <input type="checkbox" value="Strawberry" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Strawberry')} /> Strawberry
            </label>
            <label>
              <input type="checkbox" value="Mint" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Mint')} /> Mint
            </label>
            <label>
              <input type="checkbox" value="Peanut Butter" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Peanut Butter')} /> Peanut Butter
            </label>
            <label>
              <input type="checkbox" value="Caramel" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Caramel')} /> Caramel
            </label>
            <label>
              <input type="checkbox" value="Cookies and Cream" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Cookies and Cream')} /> Cookies and Cream
            </label>
            <label>
              <input type="checkbox" value="Blueberry" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Blueberry')} /> Blueberry
            </label>
            <label>
              <input type="checkbox" value="Pistachio" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Pistachio')} /> Pistachio
            </label>
            <label>
              <input type="checkbox" value="Lemon" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Lemon')} /> Lemon
            </label>
            <label>
              <input type="checkbox" value="Mango" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Mango')} /> Mango
            </label>
            <label>
              <input type="checkbox" value="Coconut" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Coconut')} /> Coconut
            </label>
            <label>
              <input type="checkbox" value="Raspberry" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Raspberry')} /> Raspberry
            </label>
            <label>
              <input type="checkbox" value="Coffee" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Coffee')} /> Coffee
            </label>
            <label>
              <input type="checkbox" value="Hazelnut" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Hazelnut')} /> Hazelnut
            </label>
            <label>
              <input type="checkbox" value="Matcha" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Matcha')} /> Matcha
            </label>
            <label>
              <input type="checkbox" value="Birthday" onChange={e => handleCheckboxChange(e, setFlavors)} checked={flavors.includes('Birthday')} /> Birthday
            </label>
          </div>
        );
      case 'toppings':
        return (
          <div className="option-group">
            <label>
              <input type="checkbox" value="Nuts" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Nuts')} /> Nuts
            </label>
            <label>
              <input type="checkbox" value="Chocolate Chips" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Chocolate Chips')} /> Chocolate Chips
            </label>
            <label>
              <input type="checkbox" value="Caramel Swirls" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Caramel Swirls')} /> Caramel Swirls
            </label>
            <label>
              <input type="checkbox" value="Rainbow Sprinkles" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Rainbow Sprinkles')} /> Rainbow Sprinkles
            </label>
            <label>
              <input type="checkbox" value="Crushed Cookies" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Crushed Cookies')} /> Crushed Cookies
            </label>
            <label>
              <input type="checkbox" value="Toffee Bits" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Toffee Bits')} /> Toffee Bits
            </label>
            <label>
              <input type="checkbox" value="Whipped Cream" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Whipped Cream')} /> Whipped Cream
            </label>
            <label>
              <input type="checkbox" value="Strawberry" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Strawberry')} /> Strawberry
            </label>
            <label>
              <input type="checkbox" value="Mint" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Mint')} /> Mint
            </label>
            <label>
              <input type="checkbox" value="Oreo" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Oreo')} /> Oreo
            </label>
            <label>
              <input type="checkbox" value="Blueberry" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Blueberry')} /> Blueberry
            </label>
            <label>
              <input type="checkbox" value="Pistachio" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Pistachio')} /> Pistachio
            </label>
            <label>
              <input type="checkbox" value="Lemon Bits" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Lemon Bits')} /> Lemon Bits
            </label>
            <label>
              <input type="checkbox" value="Mango" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Mango')} /> Mango
            </label>
            <label>
              <input type="checkbox" value="Coconut Chunks" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Coconut Chunks')} /> Coconut Chunks
            </label>
            <label>
              <input type="checkbox" value="Coffee" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Coffee')} /> Coffee
            </label>
            <label>
              <input type="checkbox" value="Raspberry" onChange={e => handleCheckboxChange(e, setToppings)} checked={toppings.includes('Raspberry')} /> Raspberry
            </label>
          </div>
        );
      case 'size':
        return (
          <div className="option-group">
            <label>
              <input type="radio" name="size" value="Small" onChange={e => handleRadioChange(e, setSize)} checked={size === 'Small'} /> Small
            </label>
            <label>
              <input type="radio" name="size" value="Medium" onChange={e => handleRadioChange(e, setSize)} checked={size === 'Medium'} /> Medium
            </label>
            <label>
              <input type="radio" name="size" value="Large" onChange={e => handleRadioChange(e, setSize)} checked={size === 'Large'} /> Large
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="customize-page">
      <div className="tabs">
        <div className={`tab ${activeTab === 'waffles' ? 'active' : ''}`} onClick={() => setActiveTab('waffles')}>
          <FontAwesomeIcon icon={faCookie} /> WAFFLES
        </div>
        <div className={`tab ${activeTab === 'iceCream' ? 'active' : ''}`} onClick={() => setActiveTab('iceCream')}>
          <FontAwesomeIcon icon={faIceCream} /> ICE CREAM
        </div>
        <div className={`tab ${activeTab === 'toppings' ? 'active' : ''}`} onClick={() => setActiveTab('toppings')}>
          <FontAwesomeIcon icon={faLemon} /> TOPPINGS
        </div>
        <div className={`tab ${activeTab === 'size' ? 'active' : ''}`} onClick={() => setActiveTab('size')}>
          <FontAwesomeIcon icon={faRulerVertical} /> SIZE</div>
      </div>
      <div className="options-section">
        {renderOptions()}
      </div>
      <div className="preview-section">
        <h2>Personalized Ice Cream Taco</h2>
        <img src={customizeImage} alt="Taco Preview" className="taco-preview" />
        <div className="preview-details">
          <p><strong>Flavors:</strong> {flavors.join(', ') || 'None'}</p>
          <p><strong>Waffle:</strong> {waffle || 'None'}</p>
          <p><strong>Toppings:</strong> {toppings.join(', ') || 'None'}</p>
          <p><strong>Size:</strong> {size || 'None'}</p>
        </div>
        <div className="button-group">
          <button className="add-to-cart-button" onClick={handleAddToCart}>Add to Cart</button>
          <button className="share-creation-button" onClick={handleShareCreation}>Share My Creation</button>
        </div>
      </div>
    </div>
  );
};

export default Customize;
