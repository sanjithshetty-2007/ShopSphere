import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ product_list }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-6 py-8 ">
      {product_list.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          rating={product.rating}
          category={product.category}
          thumbnail={product.thumbnail}
        />
      ))}
    </div>
  );
};

export default ProductGrid;
