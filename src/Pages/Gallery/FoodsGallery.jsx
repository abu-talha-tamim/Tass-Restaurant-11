import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const foodImages = [
  { src: "https://i.ibb.co/LXnRvNP/Carnish.jpg", title: "Carnish" },
  { src: "https://i.ibb.co/7xnj5Kpm/Taste.jpg", title: "Taste" },
  { src: "https://i.ibb.co/994psrWN/Beef-Rezala.jpg", title: "Beef Rezala" },
  {
    src: "https://i.ibb.co/pvRWHFCk/Luchi-with-Alur-Dum.jpg",
    title: "Luchi with Alur Dum",
  },
  {
    src: "https://i.ibb.co/GDJdNkn/Paneer-Tikka-Masala.jpg",
    title: "Paneer Tikka Masala",
  },
  {
    src: "https://i.ibb.co/k66NwqXM/Chicken-Biryani.jpg",
    title: "Chicken Biryani",
  },
  { src: "https://i.ibb.co/mCwCC7C6/Cheeseburger.jpg", title: "Cheeseburger" },
  {
    src: "https://i.ibb.co/PZ5RWX1T/Chicken-Caesar-Wrap.jpg",
    title: "Chicken Caesar Wrap",
  },
  { src: "https://i.ibb.co/j9zxLqCK/Steak-Frites.jpg", title: "Steak Frites" },
  {
    src: "https://i.ibb.co/jkn9gcPH/Spaghetti-Carbonara.jpg",
    title: "Spaghetti Carbonara",
  },
];

const FoodsGallery = () => {
  const [index, setIndex] = useState(-1);

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">
         Foods Gallery
      </h1>
      <p className="text-center text-gray-600 mb-8">
        Click on  image to view  full size!
      </p>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6">
        {foodImages.map((food, i) => (
          <div
            key={i}
            className="relative cursor-pointer group"
            onClick={() => setIndex(i)}
          >
            <img
              src={food.src}
              alt={food.title}
              className="w-full h-48 object-cover rounded-lg shadow-md transition-transform transform group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 opacity-0 group-hover:opacity-100 transition-opacity">
              {food.title}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        slides={foodImages.map((food) => ({ src: food.src }))}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>
  );
};

export default FoodsGallery;
