import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import "./CartPage.css";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return <h2 className="empty-cart">🛒 Your cart is empty</h2>;
  }

  return (
    <div className="cart-container">
      <h2 className="cart-title">Your Shopping Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <div
            className="cart-item"
            key={`${item._id}-${item.size}-${item.color}`} // ✅ unique key per variant
          >
            <img src={item.image} alt={item.name} className="cart-img" />
            <div className="cart-info">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
              <p>
                <strong>Size:</strong> {item.size} | <strong>Color:</strong>{" "}
                {item.color}
              </p>

              {/* Quantity controls */}
              <div className="cart-controls">
                <button
                  onClick={() =>
                    updateQuantity(item._id, item.size, item.color, item.quantity - 1)
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    updateQuantity(item._id, item.size, item.color, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item._id, item.size, item.color)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="cart-summary">
        <h3>Total: ₹{totalPrice}</h3>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default CartPage;
