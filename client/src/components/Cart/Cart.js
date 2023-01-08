import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  //   console.log(cart);
  let total = 0;
  for (const product of cart) {
    total += parseInt(product.itemprice);
  }

  return (
    <div>
      <div>
        <h2 className="cart-title">Your Cart</h2>
      </div>
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
      <div className="total-items">
        <h2 className="total-items-title">Total items:</h2>
        <h2 className="total-items-title">{cart.length}</h2>
      </div>
      <div className="total-price">
        <h2 className="total-price-title">Total Price:</h2>
        <h2 className="total-price-title price-amount">{total} BDT</h2>
      </div>
      <div className="order-btn">
        <button>PLACE ORDER</button>
      </div>
    </div>
  );
};

export default Cart;
