const CategoryCard = ({ category, isChecked, onToggle }) => {
  return (
    <div className="pl-4 pt-4">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={() => onToggle(category)}
      />
      <label className="text-white"> {category.toUpperCase()} </label>
    </div>
  );
};

export default CategoryCard;
