import React, { useEffect, useState } from "react";
import getproducts from "./services/productService";
import Header from "./components/layout/Header";
import { main } from "motion/react-client";
import ProductGrid from "./components/products/ProductGrid";

const App = () => {
  const [product_list, setproduct_list] = useState([]);
  useEffect(() => {
    const fetchproducts = async () => {
      try {
        const data = await getproducts();
        setproduct_list(data.products);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchproducts();
  }, []);
  return (
    <>
      <div className="bg-purple-900 ">
        <div className="bg-black p-2">
          <Header />
        </div>
        <div>
          <ProductGrid product_list={product_list} />
        </div>
      </div>
    </>
  );
};

export default App;
