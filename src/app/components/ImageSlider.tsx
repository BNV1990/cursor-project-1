"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = [
  {
    url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Modern House",
    description: "Luxury 4 bedroom house",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Interior Design",
    description: "Contemporary living room",
  },
  {
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Kitchen Space",
    description: "Modern kitchen design",
  },
  {
    url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Bathroom",
    description: "Luxury bathroom with shower",
  },
  {
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    title: "Garden View",
    description: "Beautiful landscaped garden",
  },
];

export default function ImageSlider() {
  return (
    <div className="bg-white rounded-xl p-4 lg:p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">
          Featured Properties
        </h3>
        <p className="text-sm text-gray-500">Browse our latest listings</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        className="h-[200px]"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full group cursor-pointer">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex flex-col justify-end p-4">
                <h4 className="text-white font-medium">{image.title}</h4>
                <p className="text-white text-sm opacity-80">
                  {image.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
