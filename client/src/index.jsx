import React from "react";
import ReactDOM from "react-dom";
import axios from 'axios';
import AddToCart from './components/addToCart.jsx';
import BestSellers from './components/bestSellers.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: []
    };
  }

  render() {
    return (
      <div className="aside">
        <AddToCart />
        <BestSellers />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);