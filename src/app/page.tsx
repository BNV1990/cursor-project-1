"use client";

import { useState } from "react";
import Chart from "./components/Chart";
import Messages from "./components/Messages";
import ImageSlider from "./components/ImageSlider";
import Projects from "./components/Projects";
import Products from "./components/Products";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

interface StatCardProps {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
}

function StatCard({ title, value, change, icon }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 flex items-start justify-between">
      <div className="space-y-2">
        <p className="text-sm text-gray-500">{title}</p>
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <div className="flex items-center gap-1">
          <svg
            className={`w-4 h-4 ${
              change >= 0 ? "text-green-500 rotate-180" : "text-red-500"
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={`text-sm ${
              change >= 0 ? "text-green-500" : "text-red-500"
            }`}
          >
            {Math.abs(change)}%
          </span>
        </div>
      </div>
      <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500">
        {icon}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const productsTotalPrice = useSelector(
    (state: RootState) => state.filter.productsTotalPrice
  );
  const stats = [
    {
      title: "Total Transactions",
      value: `$${productsTotalPrice}`,
      change: 12.5,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.11 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM19 19H5V5H19V19Z"
            fill="currentColor"
          />
          <path
            d="M16 13H8C7.45 13 7 13.45 7 14C7 14.55 7.45 15 8 15H16C16.55 15 17 14.55 17 14C17 13.45 16.55 13 16 13Z"
            fill="currentColor"
          />
          <path
            d="M16 9H8C7.45 9 7 9.45 7 10C7 10.55 7.45 11 8 11H16C16.55 11 17 10.55 17 10C17 9.45 16.55 9 16 9Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Total Revenue",
      value: "$5.2M",
      change: -2.1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.52 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.49 11.8 10.9Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Active Users",
      value: "1,234",
      change: 8.3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 11C17.66 11 18.99 9.66 18.99 8C18.99 6.34 17.66 5 16 5C14.34 5 13 6.34 13 8C13 9.66 14.34 11 16 11ZM8 11C9.66 11 10.99 9.66 10.99 8C10.99 6.34 9.66 5 8 5C6.34 5 5 6.34 5 8C5 9.66 6.34 11 8 11ZM8 13C5.67 13 1 14.17 1 16.5V19H15V16.5C15 14.17 10.33 13 8 13ZM16 13C15.71 13 15.38 13.02 15.03 13.05C16.19 13.89 17 15.02 17 16.5V19H23V16.5C23 14.17 18.33 13 16 13Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      title: "Pending Requests",
      value: "42",
      change: -1.5,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7H11V13L16.2 16.2L17 14.9L12.5 12.2V7Z"
            fill="currentColor"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="space-y-6 p-4 lg:p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h2 className="text-2xl font-semibold text-gray-900">Dashboard</h2>
        <div className="flex flex-wrap items-center gap-2">
          <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900">
            7d
          </button>
          <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900">
            14d
          </button>
          <button className="px-3 py-1.5 text-sm text-gray-500 hover:text-gray-900">
            30d
          </button>
          <button className="px-3 py-1.5 text-sm bg-gray-900 text-white rounded-lg">
            Custom
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      <Products />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        <div className="lg:col-span-3">
          <Messages />
        </div>
        <div className="lg:col-span-6 space-y-4 lg:space-y-6">
          <ImageSlider />
          <Chart />
        </div>
        <div className="lg:col-span-3">
          <Projects />
        </div>
      </div>
    </div>
  );
}
