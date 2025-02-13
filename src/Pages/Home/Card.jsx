import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching foods:", error));
  }, []);

  return (
    <div className="py-10 bg-gray-50">
      {/* Beautiful Section Title */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold text-blue-600">
          <span className="text-gray-800">Explore Our</span> Delicious Foods
        </h1>
        <p className="mt-2 text-lg text-gray-600">
          Taste the best dishes from around the world!
        </p>
        <div className="w-24 h-1 bg-blue-500 mx-auto mt-2 rounded-full"></div>
      </div>

      {/* Food Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {foods.slice(0, 10).map((food) => (
          <div
            key={food._id}
            className="card bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg overflow-hidden"
          >
            <figure className="px-2 pt-1">
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-xl font-semibold text-gray-800">
                {food.foodName}
              </h2>
              <p className="text-gray-600">{food.description}</p>
              <div className="card-actions">
                <Link to={`/foods/${food._id}`} className="btn btn-info">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
