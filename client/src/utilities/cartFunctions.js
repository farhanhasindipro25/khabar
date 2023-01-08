// Accessing the cart from local storage
const getCartFromLS = () => {
  let khabarCart = {};

  // Accessing the cart from local storage and checking if it exists
  const storedKhabarCart = localStorage.getItem("khabar-cart");

  if (storedKhabarCart) {
    khabarCart = JSON.parse(storedKhabarCart);
  }
  return khabarCart;
};

// Adding item information to the local storage
const addItemToLS = (id) => {
  let khabarCart = getCartFromLS();

  // Changing the quantity of a specific item
  const quantity = khabarCart[id];
  if (quantity) {
    const newQty = quantity + 1;
    khabarCart[id] = newQty;
  } else {
    khabarCart[id] = 1;
  }

  localStorage.setItem("khabar-cart", JSON.stringify(khabarCart));
};

// Clearing the whole cart: Deleting the cart from Local Storage
const removeItemFromLS = () => {
//   localStorage.removeItem("khabar-cart");
};

export { addItemToLS, getCartFromLS, removeItemFromLS };
