import React, { useEffect, useState } from "react";
import "./MenuPage.css";
import MenuItem from "../MenuItem/MenuItem";
import Cart from "../Cart/Cart";
import useTitle from "../../hooks/useTitle";
import { addItemToLS, getCartFromLS } from "../../utilities/cartFunctions";
import { useQuery } from "@tanstack/react-query";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router-dom";

const MenuPage = () => {
  useTitle("Menu");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const handleAddToCart = (item) => {
    const newCart = [...cart, item];
    setCart(newCart);
    addItemToLS(item.itemid);
  };

  const { data: items, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/menu", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        // console.log(data);
        return data;
      } catch (error) {
        console.error(error);
      }
    },
  });

  // Retrieving all the selected menu items of a specific user from Local Storage
  useEffect(() => {
    const khabarCart = getCartFromLS();
    const savedCart = [];
    if (items) {
      for (const id in khabarCart) {
        const selectedItem = items?.find((item) => item.itemid === id);
        if (selectedItem) {
          // console.log(selectedItem);
          savedCart.push(selectedItem);
        }
      }
    }
    setCart(savedCart);
  }, [items]);

  if (isLoading) {
    return <Loader></Loader>;
  }

  return (
    <div>
      <button onClick={handleLogOut}>Log out</button>
      <div className="menupage-container">
        {items?.length > 0 ? (
          <div className="items-container">
            {items?.map((item) => (
              <MenuItem
                key={item.itemid}
                item={item}
                handleAddToCart={handleAddToCart}
              ></MenuItem>
            ))}
          </div>
        ) : (
          <div>
            <h1>No data found</h1>
          </div>
        )}
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
