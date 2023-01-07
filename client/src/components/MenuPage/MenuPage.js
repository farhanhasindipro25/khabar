import React, { useState } from "react";
import "./MenuPage.css";
import MenuItem from "../MenuItem/MenuItem";
import Cart from "../Cart/Cart";

const MenuPage = () => {
  const [items, setItems] = useState([]);
  fetch("http://localhost:5000/menu", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `bearer ${localStorage.getItem("accessToken")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setItems(data);
    })
    .catch((error) => console.error(error));
  return (
    <div>
      <div className="menupage-container">
        <div className="items-container">
          {items.map((item) => (
            <MenuItem key={item.itemid} item={item}></MenuItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
