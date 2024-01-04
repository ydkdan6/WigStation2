import React from "react";
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbars/Navbar';
import Advert from './Advert/Advert';
import AddToCart from "./component/addToCart";
import Category from "./component/category";


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Advert />
        <Home />
        <Category />
    </div>
  );
};

export default App;
