import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Foods = () => {
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => setFoods(data))
      .catch((error) => console.error("Error fetching foods:", error));
  }, []);

  // Filter foods based on search input
  const filteredFoods = foods
    .filter((food) =>
      food.foodName.toLowerCase().includes(searchTerm.toLowerCase())
    )
    // .slice(0, 20); // Show only 12 cards

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-center text-4xl font-bold my-4">All Foods</h1>

      {/* Search Bar */}
      <div className="flex justify-center my-6">
        <input
          type="text"
          placeholder="Search Food..."
          className="input input-bordered w-full max-w-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Food Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {filteredFoods.map((food) => (
          <div key={food._id} className="card bg-base-100 shadow-xl">
            <figure className="px-2 pt-1">
              <img
                src={food.foodImage}
                alt={food.foodName}
                className="rounded-xl w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{food.foodName}</h2>
              <p>{food.description}</p>
              <div className="card-actions">
                <Link
                  to={`/foods/${food._id}`} // Set the food ID dynamically
                  className="btn btn-info"
                >
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

export default Foods;
