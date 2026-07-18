import ProductCard from "./ProductCard";

const Errorcard = () => {
  return <div className="justify-center">Product not found</div>;
};

const ProductGrid = ({ product_list, searchTerm }) => {
  const filtered_list = product_list.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-6 py-8">
      {filtered_list.map((product) => (
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
      {filtered_list.length === 0 && <Errorcard />}
    </div>
  );
};

export default ProductGrid;
