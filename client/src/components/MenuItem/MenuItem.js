import React from "react";
import "./MenuItem.css";

const MenuItem = ({ item, handleAddToCart }) => {
  const {
    itemimage,
    itemprice,
    menuitem,
    itemdescription,
    restuarant,
    restuarantlocation,
  } = item;
  return (
    <div>
      <div className="card-container">
        <img className="item-img" src={itemimage} alt="" />
        <h3 className="item-title">{menuitem}</h3>
        <h4 className="item-price">
          Price <span className="price-amount">{itemprice} BDT</span>
        </h4>
        <h4 className="place">
          {restuarant}, {restuarantlocation}
        </h4>
        <p className="description">{itemdescription.slice(0, 70) + "..."}</p>
        <div className="cart-btn">
          <button className="cart-btn" onClick={() => handleAddToCart(item)}>
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
