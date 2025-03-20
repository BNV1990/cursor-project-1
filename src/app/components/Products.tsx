"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product A",
    price: 100,
    color: "white",
  },
  { id: 2, name: "Product B", price: 500, color: "blue" },
  { id: 3, name: "Product C", price: 900, color: "green" },
  { id: 4, name: "Product D", price: 1300, color: "purple" },
  { id: 5, name: "Product E", price: 1700, color: "orange" },
  { id: 6, name: "Product F", price: 2100, color: "yellow" },
  { id: 7, name: "Product G", price: 2500, color: "cyan" },
  { id: 8, name: "Product H", price: 2900, color: "pink" },
  { id: 9, name: "Product I", price: 3300, color: "indigo" },
  { id: 10, name: "Product J", price: 3700, color: "teal" },
  { id: 11, name: "Product K", price: 4100, color: "lime" },
  { id: 12, name: "Product L", price: 4500, color: "emerald" },
];

export default function Products() {
  const { priceRange, selectedColors } = useSelector(
    (state: RootState) => state.filter
  );

  const filteredProducts = products.filter((product) => {
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesColor =
      selectedColors.length === 0 || selectedColors.includes(product.color);
    return matchesPrice && matchesColor;
  });

  return (
    <div className="bg-white rounded-xl p-6">
      <div className="grid grid-cols-12 gap-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className={`${
              product.color === "white"
                ? "bg-white border border-gray-200"
                : `bg-${product.color}-500`
            } p-4 rounded-lg shadow-sm hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center justify-center aspect-square`}
          >
            <div className="text-center">
              <div
                className={`font-medium mb-2 ${
                  product.color === "white" ? "text-gray-800" : "text-white"
                }`}
              >
                {product.name}
              </div>
              <div
                className={`text-sm ${
                  product.color === "white" ? "text-gray-800" : "text-white"
                }`}
              >
                ${product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
