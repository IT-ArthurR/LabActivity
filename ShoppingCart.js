import React from "react";

const ShoppingCart = ({ cart, removeFromCart, clearCart }) => {
    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>Cart is empty</p> : (
                <div>
                    {cart.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>Price: ${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <button onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))}
                    <h3>Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h3>
                    <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
                </div>
            )}
        </div>
    );
};

export default ShoppingCart;
item.id