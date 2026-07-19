import { useEffect, useState } from "react";
import getproducts from "./services/productService";
import Header from "./components/layout/Header";
import ProductGrid from "./components/products/ProductGrid";
import CategoryFilter from "./components/ui/CategoryFilter";

const App = () => {
  const [product_list, setproduct_list] = useState([]);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");
  const [searchTerm, setsearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      try {
        setloading(true);
        const data = await getproducts();
        setproduct_list(data.products);
      } catch (error) {
        seterror(error.message);
        console.error(error);
      } finally {
        setloading(false);
      }
    };
    fetchproducts();
  }, []);

  const handleToggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  return (
    <div className="bg-purple-900">
      <div className="bg-black p-2">
        <Header setsearchTerm={setsearchTerm} />
      </div>

      <div>
        <CategoryFilter
          product_list={product_list}
          selectedCategories={selectedCategories}
          onToggleCategory={handleToggleCategory}
        />
      </div>

      <div>
        <ProductGrid
          product_list={product_list}
          searchTerm={searchTerm}
          selectedCategories={selectedCategories}
        />
      </div>
    </div>
  );
};

export default App;
