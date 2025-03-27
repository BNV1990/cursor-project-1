"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  setPriceRange,
  setSelectedColors,
  setRating,
} from "../store/slices/filterSlice";

interface FilterProps {
  onFilterChange?: (filters: any) => void;
}

export default function Filter({ onFilterChange }: FilterProps) {
  const dispatch = useDispatch();
  const { priceRange, selectedColors, rating } = useSelector(
    (state: RootState) => state.filter
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>([]);
  const [selectedRating, setSelectedRating] = useState<string>("all");

  const categories = [
    { id: "bag", label: "Bag" },
    { id: "bag-with-belt", label: "Bag with Belt" },
    { id: "waist-bags", label: "Waist Bags" },
    { id: "baskets", label: "Baskets" },
  ];

  const colors = [
    { id: "white", color: "bg-white border border-gray-200" },
    { id: "blue", color: "bg-blue-500" },
    { id: "green", color: "bg-green-500" },
    { id: "purple", color: "bg-purple-500" },
    { id: "orange", color: "bg-orange-500" },
    { id: "yellow", color: "bg-yellow-500" },
    { id: "cyan", color: "bg-cyan-500" },
    { id: "pink", color: "bg-pink-500" },
    { id: "indigo", color: "bg-indigo-500" },
    { id: "teal", color: "bg-teal-500" },
    { id: "lime", color: "bg-lime-500" },
    { id: "emerald", color: "bg-emerald-500" },
  ];

  const materials = [
    { id: "in-a-cage", label: "In a Cage" },
    { id: "leather", label: "Leather" },
    { id: "wallet", label: "Wallet" },
    { id: "plastic", label: "Plastic" },
    { id: "fabric", label: "Fabric" },
    { id: "clay", label: "Clay" },
  ];

  const ratings = [
    { id: "all", label: "All", value: 0 },
    { id: "5", label: "5", value: 5 },
    { id: "4", label: "4", value: 4 },
    { id: "3", label: "3", value: 3 },
    { id: "2", label: "2", value: 2 },
    { id: "1", label: "1", value: 1 },
  ];

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(categoryId)
        ? prev.filter((id) => id !== categoryId)
        : [...prev, categoryId];

      onFilterChange?.({
        categories: newCategories,
        colors: selectedColors,
        materials: selectedMaterials,
        rating: selectedRating,
        priceRange,
      });
      return newCategories;
    });
  };

  const handleColorChange = (colorId: string) => {
    const newColors = selectedColors.includes(colorId)
      ? selectedColors.filter((id) => id !== colorId)
      : [...selectedColors, colorId];

    dispatch(setSelectedColors(newColors));
    onFilterChange?.({
      categories: selectedCategories,
      colors: newColors,
      materials: selectedMaterials,
      rating: selectedRating,
      priceRange,
    });
  };

  const handleMaterialChange = (materialId: string) => {
    setSelectedMaterials((prev) => {
      const newMaterials = prev.includes(materialId)
        ? prev.filter((id) => id !== materialId)
        : [...prev, materialId];

      onFilterChange?.({
        categories: selectedCategories,
        colors: selectedColors,
        materials: newMaterials,
        rating: selectedRating,
        priceRange,
      });
      return newMaterials;
    });
  };

  const handleRatingChange = (ratingId: string) => {
    setSelectedRating(ratingId);
    const ratingValue = ratingId === "all" ? 0 : Number(ratingId);
    dispatch(setRating(ratingValue));
    onFilterChange?.({
      categories: selectedCategories,
      colors: selectedColors,
      materials: selectedMaterials,
      rating: ratingId,
      priceRange,
    });
  };

  const handlePriceChange = (value: number) => {
    dispatch(setPriceRange([100, value]));
    onFilterChange?.({
      categories: selectedCategories,
      colors: selectedColors,
      materials: selectedMaterials,
      rating: selectedRating,
      priceRange: [100, value],
    });
  };

  return (
    <div className="space-y-6">
      {/* Price Range */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-medium text-gray-900">Price</h3>
          <span className="text-sm text-gray-500">${priceRange[1]}</span>
        </div>
        <input
          type="range"
          min="100"
          max="5000"
          value={priceRange[1]}
          onChange={(e) => handlePriceChange(Number(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="flex justify-between mt-2">
          <span className="text-sm text-gray-500">$100</span>
          <span className="text-sm text-gray-500">$5000</span>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Colors</h3>
        <div className="grid grid-cols-6 gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => handleColorChange(color.id)}
              className={`w-8 h-8 rounded-full ${color.color} ${
                selectedColors.includes(color.id)
                  ? "ring-2 ring-offset-2 ring-primary"
                  : ""
              }`}
            />
          ))}
        </div>
      </div>

      {/* Store Rating */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Store Rating</h3>
        <div className="space-y-2">
          {ratings.map((rating) => (
            <label key={rating.id} className="flex items-center">
              <input
                type="checkbox"
                name="rating"
                checked={selectedRating === rating.id}
                onChange={() => handleRatingChange(rating.id)}
                className="w-4 h-4 text-primary border-gray-300 focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700 flex items-center">
                {rating.label !== "All" &&
                  [...Array(Number(rating.label))].map((_, i) => (
                    <svg
                      key={i}
                      className="w-4 h-4 text-orange-400 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                {rating.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <label key={category.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedCategories.includes(category.id)}
                onChange={() => handleCategoryChange(category.id)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">
                {category.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Material */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Material</h3>
        <div className="space-y-2">
          {materials.map((material) => (
            <label key={material.id} className="flex items-center">
              <input
                type="checkbox"
                checked={selectedMaterials.includes(material.id)}
                onChange={() => handleMaterialChange(material.id)}
                className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"
              />
              <span className="ml-2 text-sm text-gray-700">
                {material.label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Sale / New Season */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Sale / New Season
        </h3>
        {/* Add content here */}
      </div>

      {/* Gender */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Gender</h3>
        {/* Add content here */}
      </div>

      {/* Brand */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Brand</h3>
        {/* Add content here */}
      </div>

      {/* Size */}
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Size</h3>
        {/* Add content here */}
      </div>
    </div>
  );
}
