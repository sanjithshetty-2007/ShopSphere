import CategoryCard from "./CategoryCard";

const CategoryFilter = ({
  product_list,
  selectedCategories,
  onToggleCategory,
}) => {
  const uniqueCategories = [...new Set(product_list.map((p) => p.category))];

  return (
    <div className="flex flex-wrap">
      {uniqueCategories.map((category) => (
        <CategoryCard
          key={category}
          category={category}
          isChecked={selectedCategories.includes(category)}
          onToggle={onToggleCategory}
        />
      ))}
    </div>
  );
};

export default CategoryFilter;
