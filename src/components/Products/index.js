import { Component } from "react";
import ProductItem from "../ProductItem";
import "./index.css";

class Products extends Component {
  state = { productsList: [] };
  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    const fetchedData = data.map((each) => ({
      id: each.id,
      image: each.image,
      price: each.price,
      description: each.description,
      category: each.category,
      title: each.title,
    }));
    this.setState((productsList: fetchedData));
  };

  render() {
    const { productsList } = this.state;
    return (
      <div className="bg_container">
        <ul>
        {productsList.map(each =>({
            <ProductItem details={each} key={each.id}/>
        }))}
        </ul>
      </div>
    );
  }
}

export default Products
