"use client";

import { useParams } from "next/navigation";

interface Product {
  id: number;
  name: string;
  price: number;
  color: string;
  rating: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Product A",
    price: 100,
    color: "white",
    rating: 4,
  },
  { id: 2, name: "Product B", price: 500, color: "blue", rating: 3 },
  { id: 3, name: "Product C", price: 900, color: "green", rating: 4 },
  { id: 4, name: "Product D", price: 1300, color: "purple", rating: 2 },
  { id: 5, name: "Product E", price: 1700, color: "orange", rating: 4 },
  { id: 6, name: "Product F", price: 2100, color: "yellow", rating: 3 },
  { id: 7, name: "Product G", price: 2500, color: "cyan", rating: 5 },
  { id: 8, name: "Product H", price: 2900, color: "pink", rating: 2 },
  { id: 9, name: "Product I", price: 3300, color: "indigo", rating: 4 },
  { id: 10, name: "Product J", price: 3700, color: "teal", rating: 3 },
  { id: 11, name: "Product K", price: 4100, color: "lime", rating: 5 },
  { id: 12, name: "Product L", price: 4500, color: "emerald", rating: 1 },
];

const description =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

export default function ProductPage() {
  const { id } = useParams();
  const productId = parseInt(id as string);
  const product = products.find((product) => product.id === productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div
              className="md:w-1/2 p-8 flex items-center justify-center"
              style={{ backgroundColor: product.color }}
            >
              <div className="w-64 h-64 rounded-full"></div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex justify-between items-center">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="text-yellow-500 text-xl">4.7 ★</div>
              </div>
              <p className="text-gray-600 mt-4">{description}</p>
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">In your basket</h2>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <button className="bg-gray-200 rounded-full w-8 h-8">
                      -
                    </button>
                    <span className="mx-2 text-lg">3</span>
                    <button className="bg-gray-200 rounded-full w-8 h-8">
                      +
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-gray-200 rounded-full w-8 h-8">
                      -
                    </button>
                    <span className="mx-2 text-lg">8</span>
                    <button className="bg-gray-200 rounded-full w-8 h-8">
                      +
                    </button>
                  </div>
                  <div className="flex items-center">
                    <button className="bg-gray-200 rounded-full w-8 h-8">
                      -
                    </button>
                    <span className="mx-2 text-lg">2</span>
                    <button className="bg-gray-200 rounded-full w-8 h-8">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <h2 className="text-xl font-semibold mb-2">Additional Info</h2>
                <div className="flex items-center justify-between">
                  <div className="bg-gray-200 rounded-lg p-3 text-sm">
                    Storage: 10-12 days
                  </div>
                  <div className="bg-gray-200 rounded-lg p-3 text-sm">
                    Type: Mix of vegetables
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8">
            <h2 className="text-xl font-semibold mb-4">You also can add</h2>
            <div className="flex items-center justify-between space-x-4">
              <div className="rounded-2xl p-4 shadow-md">
                <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
                <p className="text-center">$2.00</p>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-full w-10 h-10">
                  +
                </button>
              </div>
              <div className="rounded-2xl p-4 shadow-md">
                <div className="w-32 h-32 rounded-2xl bg-purple-500"></div>
                <p className="text-center">$0.80</p>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-full w-10 h-10">
                  +
                </button>
              </div>
              <div className="rounded-2xl p-4 shadow-md">
                <div className="w-32 h-32 rounded-2xl bg-green-800"></div>
                <p className="text-center">$1.40</p>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-full w-10 h-10">
                  +
                </button>
              </div>
              <div className="rounded-2xl p-4 shadow-md">
                <div className="w-32 h-32 rounded-2xl bg-red-500"></div>
                <p className="text-center">$2.20</p>
                <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold rounded-full w-10 h-10">
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
