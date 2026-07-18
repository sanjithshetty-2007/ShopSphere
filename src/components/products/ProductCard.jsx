import React from "react";

const ProductCard = ({
  title,
  price,
  description,
  thumbnail,
  rating,
  category,
}) => {
  return (
    <div className=" bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
      {/* Product Image Frame */}
      <div className="bg-gray-50 aspect-square flex items-center justify-center p-6 overflow-hidden relative">
        <img
          className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-300 ease-out"
          src={thumbnail}
          alt="Product"
        />
      </div>

      {/* Card Content Wrapper */}
      <div className="p-5">
        {/* Title */}
        <div className="text-xl font-bold text-gray-800 mb-1 truncate hover:text-indigo-600 transition-colors cursor-pointer">
          {title}
        </div>

        {/* Price */}
        <div className="text-2xl font-extrabold text-gray-900 mb-2">
          ${price}
        </div>

        {/* Description */}
        <div className="text-sm text-gray-500 line-clamp-2 mb-4 leading-relaxed">
          {description}
        </div>

        {/* Meta Details Row (Rating & Category) */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-3 mb-4">
          {/* Rating */}
          <div className="flex items-center space-x-1 bg-amber-50 px-2 py-1 rounded-md">
            <span className="text-amber-500 text-sm">★</span>
            <span className="text-xs font-bold text-amber-800">{rating}</span>
          </div>
          {/* Category */}
          <div className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {category}
          </div>
        </div>

        {/* Add to Cart Action */}
        <button className="w-full bg-purple-600 hover:bg-purple-950 active:bg-purple-950 text-white font-semibold py-2.5 px-4 rounded-xl shadow-sm hover:shadow transition-all duration-200 text-sm tracking-wide">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
