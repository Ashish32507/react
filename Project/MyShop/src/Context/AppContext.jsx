import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [product, setProduct] = useState();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProduct(data); // Set the fetched data to the products state
        console.log(data);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const value = {
    product,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
