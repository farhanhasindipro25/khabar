import React, { useState } from "react";
import "./Cart.css";
import { toast } from "react-hot-toast";

const Cart = ({ cart }) => {
  //   console.log(cart);
  let total = 0;
  for (const product of cart) {
    total += parseInt(product.itemprice);
  }

  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = () => {
    toast.success("Order Placed Successfully.");
    setOrderPlaced(true);
  };

  return (
    <div>
      <div>
        <h2 className="cart-title">Your Cart</h2>
      </div>
      <div>
        {cart.map((item) => (
          <React.Fragment key={item.itemid}>
            <div className="item-info">
              <h2 className="item-title">{item.menuitem}</h2>
              <h4 className="item-price">
                <span className="price-amount">{item.itemprice} BDT </span>
              </h4>
            </div>
          </React.Fragment>
        ))}
        <hr />
        <div className="total-price">
          <h2 className="total-price-title">Total Price:</h2>
          <h2 className="total-price-title price-amount">{total} BDT</h2>
        </div>
        <div className="order-btn">
          <button id="place-order" onClick={handlePlaceOrder}>
            PLACE ORDER
          </button>
        </div>
      </div>

      {orderPlaced && (
        <React.Fragment>
          <div className="order-summary">
            <h2 className="summary-title">Order Summary</h2>
            <div className="total-items">
              <h2 className="total-items-title">Total items:</h2>
              <h2 className="total-items-title">{cart.length}</h2>
            </div>
            <div className="total-price">
              <h2 className="total-price-title">Total Price:</h2>
              <h2 className="total-price-title price-amount">{total} BDT</h2>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Cart;
