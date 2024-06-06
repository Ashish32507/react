import { createContext, useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [data, setData] = useState([]);

  //   const [added, setAdded] = useState(false);

  const [cartItem, setCartItem] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log(data);
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addToCart = (id) => {
    setCartItem((prev) => [...prev, id]);
    console.log(cartItem);
    showToastMessage();
  };

  const removeFromCart = (id) => {
    setCartItem((prev) =>
      prev.filter((item) => {
        return item.id !== id;
      })
    );
    console.log(cartItem);
  };

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  const contextValue = {
    data,
    addToCart,
    cartItem,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
