import React, { useEffect } from "react";
import getproducts from "./services/productService";
import { Navbar } from "./components/ui/Navbar";

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
  return (
    <div>
      <Navbar />
    </div>
  );
};

export default App;
