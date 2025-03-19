"use client";

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
    color: "bg-white border border-gray-200",
  },
  { id: 2, name: "Product B", price: 500, color: "bg-blue-500" },
  { id: 3, name: "Product C", price: 900, color: "bg-green-500" },
  { id: 4, name: "Product D", price: 1300, color: "bg-purple-500" },
  { id: 5, name: "Product E", price: 1700, color: "bg-orange-500" },
  { id: 6, name: "Product F", price: 2100, color: "bg-yellow-500" },
  { id: 7, name: "Product G", price: 2500, color: "bg-cyan-500" },
  { id: 8, name: "Product H", price: 2900, color: "bg-pink-500" },
  { id: 9, name: "Product I", price: 3300, color: "bg-indigo-500" },
  { id: 10, name: "Product J", price: 3700, color: "bg-teal-500" },
  { id: 11, name: "Product K", price: 4100, color: "bg-lime-500" },
  { id: 12, name: "Product L", price: 4500, color: "bg-emerald-500" },
];

export default function Products() {
  return (
    <div className="bg-white rounded-xl p-6">
      <div className="grid grid-cols-12 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className={`${product.color} p-4 rounded-lg shadow-sm hover:scale-105 transition-transform duration-200 cursor-pointer flex items-center justify-center aspect-square`}
          >
            <div className="text-center">
              <div
                className={`font-medium mb-2 ${
                  product.color === "bg-white" ? "text-gray-800" : "text-white"
                }`}
              >
                {product.name}
              </div>
              <div
                className={`text-sm ${
                  product.color === "bg-white" ? "text-gray-800" : "text-white"
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
