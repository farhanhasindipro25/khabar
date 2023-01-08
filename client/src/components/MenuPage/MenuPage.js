import React, { useEffect, useState } from "react";
import "./MenuPage.css";
import MenuItem from "../MenuItem/MenuItem";
import Cart from "../Cart/Cart";
import useTitle from "../../hooks/useTitle";
import { addItemToLS, getCartFromLS } from "../../utilities/cartFunctions";

const MenuPage = () => {
  useTitle("Menu");
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/menu", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const [cart, setCart] = useState([]);

  // Retrieving all the selected menu items of a specific user from Local Storage
  useEffect(() => {
    const khabarCart = getCartFromLS();
    const savedCart = [];
    for (const id in khabarCart) {
      const selectedItem = items.find((item) => item.itemid === id);
      if (selectedItem) {
        // console.log(selectedItem);
        savedCart.push(selectedItem);
      }
    }
    setCart(savedCart);
  }, [items]);

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    addItemToLS(item.itemid);
  };

  return (
    <div>
      <div className="menupage-container">
        <div className="items-container">
          {items.map((item) => (
            <MenuItem
              key={item.itemid}
              item={item}
              handleAddToCart={handleAddToCart}
            ></MenuItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
