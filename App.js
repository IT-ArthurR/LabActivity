import React, { Component } from "react";
import ProductList from "./ProductList";
import ShoppingCart from "./ShoppingCart";
import "./style.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            cart: [],
            search: "",
        };
    }

    // Simulating fetching product data from an external source
    componentDidMount() {
        const sampleProducts = [
            { id: 1, name: "Laptop", price: 1000, image: "https://via.placeholder.com/100" },
            { id: 2, name: "Smartphone", price: 700, image: "https://via.placeholder.com/100" },
            { id: 3, name: "Headphones", price: 200, image: "https://via.placeholder.com/100" },
        ];
        this.setState({ products: sampleProducts });
    }

    // Detect cart updates and update total price
    componentDidUpdate(prevProps, prevState) {
        if (prevState.cart !== this.state.cart) {
            console.log("Cart updated!", this.state.cart);
        }
    }

    // Add product to cart
    addToCart = (product) => {
        const existingItem = this.state.cart.find((item) => item.id === product.id);
        if (existingItem) {
            this.setState({
                cart: this.state.cart.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                ),
            });
        } else {
            this.setState({ cart: [...this.state.cart, { ...product, quantity: 1 }] });
        }
    };

    
}

export default App;