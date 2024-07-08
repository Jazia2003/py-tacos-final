import React, { useState, useContext } from 'react';
import './Menu.css';
import ChocolateDelight from '../assets/menu/ChocolateDelight.webp'; 
import VanillaHeaven from '../assets/menu/VanillaHeaven.webp';
import StrawberryBliss from '../assets/menu/StrawberryBliss.webp';
import MintyFresh from '../assets/menu/MintyFresh.webp';
import PeanutButterCrunch from '../assets/menu/PeanutButterCrunch.webp';
import CaramelSwirl from '../assets/menu/CaramelSwirl.webp';
import CookiesandCream from '../assets/menu/CookiesandCream.webp';
import BlueberryBurst from '../assets/menu/BlueberryBurst.webp';
import PistachioDream from '../assets/menu/PistachioDream.webp';
import LemonZest from '../assets/menu/LemonZest.webp';
import MangoTango from '../assets/menu/MangoTango.webp';
import CoconutParadise from '../assets/menu/CoconutParadise.webp';
import RaspberryRipple from '../assets/menu/RaspberryRipple.webp';
import CoffeeCrunch from '../assets/menu/CoffeeCrunch.webp';
import HazelnutHeaven from '../assets/menu/HazelnutHeaven.webp';
import MatchaMagic from '../assets/menu/MatchaMagic.webp';
import BirthdayBash from '../assets/menu/BirthdayBash.webp';
import { CartContext } from '../CartContext';

const Menu = () => {
  const [filters, setFilters] = useState({
    flavor: '',
    shell: '',
    topping: '',
    theme: '',
    sort: 'popularity'
  });

  const { addToCart } = useContext(CartContext);

  const tacos = [
    { name: 'Chocolate Delight', price: 5.00, description: 'Rich chocolate ice cream in a crispy waffle shell.', image: ChocolateDelight, shell: 'Chocolate', topping: 'Chocolate Chips, Whipped Cream', theme:''},
    { name: 'Vanilla Heaven', price: 4.50, description: 'Smooth vanilla ice cream with rainbow sprinkles.', image: VanillaHeaven, shell: 'Vanilla', topping: 'Rainbow Sprinkles, Whipped Cream', theme:'Carnival'},
    { name: 'Strawberry Bliss', price: 4.75, description: 'Fresh strawberry ice cream with chocolate chips.', image: StrawberryBliss, shell: 'Strawberry', topping: 'Strawberry' , theme:'Valentines'},
    { name: 'Minty Fresh', price: 5.25, description: 'Mint ice cream with a hint of chocolate and a crispy waffle shell.', image: MintyFresh, shell: 'Chocolate', topping: 'Mint, Chocolate Chips', theme:''},
    { name: 'Peanut Butter Crunch', price: 5.50, description: 'Peanut butter ice cream with caramel swirls.', image: PeanutButterCrunch, shell: 'Plain', topping: 'Nuts, Caramel Swirls', theme:''},
    { name: 'Caramel Swirl', price: 5.00, description: 'Caramel ice cream with chocolate chips in a soft waffle shell.', image: CaramelSwirl, shell: 'Caramel', topping: 'Chocolate Chips, Caramel Swirls', theme:'Carnival'},
    { name: 'Cookies and Cream', price: 5.00, description: 'Oreo ice cream with crushed cookies in a crispy waffle shell.', image: CookiesandCream, shell: 'Chocolate, Vanilla', topping: 'Whipped Cream, Chocolate Chips, Crushed Cookies, Oreo', theme:''},
    { name: 'Blueberry Burst', price: 5.75, description: 'Blueberry ice cream with a hint of lemon.', image: BlueberryBurst, shell: 'Blueberry', topping: 'Blueberry', theme:''},
    { name: 'Pistachio Dream', price: 5.25, description: 'Pistachio ice cream with almonds and a crispy waffle shell.', image: PistachioDream, shell: 'Plain', topping: 'Pistachio, Nuts', theme:''},
    { name: 'Lemon Zest', price: 4.75, description: 'Lemon ice cream with a sweet and tangy flavor.', image: LemonZest, shell: 'Sugar', topping: 'Whipped Cream, Lemon Bits', theme:'Tropical, Carnival'},
    { name: 'Mango Tango', price: 5.50, description: 'Mango ice cream with a tropical twist.', image: MangoTango, shell: 'Sugar', topping: 'Mango', theme:'Tropical'},
    { name: 'Coconut Paradise', price: 5.00, description: 'Coconut ice cream with coconut chunks.', image: CoconutParadise, shell: 'Vanilla', topping: 'Whipped Cream, Coconut Chunks', theme:'Tropical'},
    { name: 'Raspberry Ripple', price: 5.25, description: 'Raspberry ice cream with swirls of raspberry sauce.', image: RaspberryRipple, shell: 'Raspberry', topping: 'Raspberry, Whipped Cream', theme:'Valentines'},
    { name: 'Coffee Crunch', price: 5.50, description: 'Coffee ice cream with toffee bits.', image: CoffeeCrunch, shell: 'Sugar', topping: 'Coffee, Toffee Bits', theme:''},
    { name: 'Hazelnut Heaven', price: 5.75, description: 'Hazelnut ice cream with chocolate chunks.', image: HazelnutHeaven, shell: 'Chocolate', topping: 'Chocolate Chips, Nuts, Whipped Cream', theme:''},
    { name: 'Matcha Magic', price: 5.25, description: 'Matcha ice cream with a hint of vanilla.', image: MatchaMagic, shell: 'Vanilla', topping: 'Whipped Cream', theme:''},
    { name: 'Birthday Bash', price: 5.00, description: 'Vanilla ice cream with sprinkles and a birthday cake flavor.', image: BirthdayBash, shell: 'Strawberry', topping: 'Whipped Cream, Rainbow Sprinkles', theme:'Birthday'},
  ];

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleAddToCart = (taco) => {
    addToCart(taco);
  };

  const filteredTacos = tacos
    .filter(taco => {
      return (
        (!filters.flavor || taco.name.includes(filters.flavor)) &&
        (!filters.shell || taco.shell.includes(filters.shell)) &&
        (!filters.topping || taco.topping.includes(filters.topping)) &&
        (!filters.theme || taco.theme.includes(filters.theme))
      );
    })
    .sort((a, b) => {
      if (filters.sort === 'popularity') {
        return a.popularity - b.popularity;
      }
      if (filters.sort === 'alphabetical') {
        return a.name.localeCompare(b.name);
      }
      if (filters.sort === 'price') {
        return parseFloat(a.price) - parseFloat(b.price);
      }
      return 0;
    });

  return (
    <div className="menu-page">
      <div className="filter-bar">
        <div className="filter-group">
          <label>Filter By:</label>
          <select name="flavor" onChange={handleFilterChange}>
            <option value="">Ice Cream Flavor</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Mint">Mint</option>
            <option value="Peanut Butter">Peanut Butter</option>
            <option value="Caramel">Caramel</option>
            <option value="Cookies and Cream">Cookies and Cream</option>
            <option value="Blueberry">Blueberry</option>
            <option value="Pistachio">Pistachio</option>
            <option value="Lemon">Lemon</option>
            <option value="Mango">Mango</option>
            <option value="Coconut">Coconut</option>
            <option value="Raspberry">Raspberry</option>
            <option value="Coffee">Coffee</option>
            <option value="Hazelnut">Hazelnut</option>
            <option value="Matcha">Matcha</option>
            <option value="Birthday">Birthday</option>
          </select>
          <select name="shell" onChange={handleFilterChange}>
            <option value="">Waffle Shell</option>
            <option value="Plain">Plain</option>
            <option value="Sugar">Sugar</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Blueberry">Blueberry</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Caramel">Caramel</option>
            <option value="Raspberry">Raspberry</option>
          </select>
          <select name="topping" onChange={handleFilterChange}>
            <option value="">Topping</option>
            <option value="Nuts">Nuts</option>
            <option value="Chocolate Chips">Chocolate Chips</option>
            <option value="Caramel Swirls">Caramel Swirls</option>
            <option value="Rainbow Sprinkles">Rainbow Sprinkles</option>
            <option value="Crushed Cookies">Crushed Cookies</option>
            <option value="Toffee Bits">Toffee Bits</option>
            <option value="Whipped Cream">Whipped Cream</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Mint">Mint</option>
            <option value="Oreo">Oreo</option>
            <option value="Blueberry">Blueberry</option>
            <option value="Pistachio">Pistachio</option>
            <option value="Lemon Bits">Lemon Bits</option>
            <option value="Mango">Mango</option>
            <option value="Coconut Chunks">Coconut Chunks</option>
            <option value="Coffee">Coffee</option>
            <option value="Raspberry">Raspberry</option>
          </select>

          <select name="theme" onChange={handleFilterChange}>
            <option value="">Theme</option>
            <option value="Valentines">Valentines</option>
            <option value="Birthday">Birthday</option>
            <option value="Tropical">Tropical</option>
            <option value="Carnival">Carnival</option>
          </select>
        </div>
        <div className="sort-group">
          <label>Sort By:</label>
          <select name="sort" onChange={handleFilterChange}>
            <option value="popularity">Popularity</option>
            <option value="alphabetical">Alphabetical</option>
            <option value="price">Price</option>
          </select>
        </div>
      </div>
      <div className="taco-results">
        {filteredTacos.map((taco, index) => (
          <div key={index} className="taco-item">
            <img src={taco.image} alt={taco.name} className="taco-image" />
            <h3>{taco.name}</h3>
            <p>${taco.price.toFixed(2)}</p>
            <p>{taco.description}</p>
            <button className="add-to-cart-button" onClick={() => handleAddToCart(taco)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
