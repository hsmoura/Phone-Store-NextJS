import AppContext from "../store/AppContext";
import "../styles/globals.css";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [displayedPhones, setDisplayedPhones] = useState([]);
  const [savedData, setSavedData] = useState([]);
  const [cart, setCart] = useState(0);

  if (typeof window !== "undefined") {
    var timeStamp = localStorage.getItem("time");
    if (timeStamp == null) {
      var current = new Date().getTime();
      localStorage.setItem("time", current);
    } else {
      if (current - timeStamp > 3600000) {
        localStorage.clear();
        localStorage.setItem("time", current);
      }
    }
    if (localStorage.getItem("count") && cart === 0) {
      setCart(Number(localStorage.getItem("count")));
      setSavedData(JSON.parse(localStorage.getItem("cartItems")));
      console.log(savedData);
    }
  }

  async function initProducts() {
    console.log("FETCH");
    await fetch(`https://front-test-api.herokuapp.com/api/product`)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setDisplayedPhones(data);
        console.log(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    initProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        search,
        setSearch,
        displayedPhones,
        setDisplayedPhones,
        cart,
        setCart,
        savedData,
        setSavedData,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;
