import React, { useEffect } from "react";
import getproducts from "./services/productService";
import Header from "./components/layout/Header";
import { main } from "motion/react-client";

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
    <>
      <body className="bg-purple-900 ">
        <div className="bg-black p-2">
          <Header />
        </div>
      </body>
    </>
  );
};

export default App;
