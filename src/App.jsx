import React, { useEffect } from "react";
import getproducts from "./services/productService";

const App = () => {
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const data = await getproducts();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchproducts();
  }, []);
  return <div>APP</div>;
};

export default App;
