import { Component } from "react";
import Header from "./components/Header";
import Products from ".components/Products";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="bg_container">
        <Header />
        <hr />
        <h1 className="heading">DISCOVER OUR PRODUCTS</h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          scelerisque. Dolor integer scelerisque nibh amet mi ut elemetum dolor.
        </p>
        <hr />
        <div className="recommend">
          <p>3425 Items</p>
          <select>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>POPULAR</option>
            <option>PRICE : HIGH TO LOW</option>
            <option>PRICE : LOW TO HIGH</option>
          </select>
        </div>
        <hr />
        <Products />
      </div>
    );
  }
}

export default App;
