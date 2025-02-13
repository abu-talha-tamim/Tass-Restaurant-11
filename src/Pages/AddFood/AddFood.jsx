import { useState } from "react";
import {
  FaUtensils,
  FaImage,
  FaTag,
  FaSortNumericUp,
  FaDollarSign,
  FaGlobe,
  FaFileAlt,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useAuth from "../../hooks/useAuth"; // Ensure you have the `useAuth` hook for getting user info.

const AddFood = () => {
  const { user } = useAuth();
  const navigate = useNavigate(); // Initialize useNavigate for redirection

  const [foodData, setFoodData] = useState({
    foodName: "",
    foodImage: "",
    foodCategory: "",
    quantity: "",
    price: "",
    foodOrigin: "",
    description: "",
    addedByName: user?.displayName || "",
    addedByEmail: user?.email || "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFoodData({ ...foodData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/foods", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(foodData),
      });

      if (!response.ok) {
        throw new Error("Failed to add food item");
      }

      const data = await response.json();

      Swal.fire({
        title: "Success!",
        text: "Food item added successfully!",
        icon: "success",
        confirmButtonColor: "#2563EB",
      });

      setFoodData({
        foodName: "",
        foodImage: "",
        foodCategory: "",
        quantity: "",
        price: "",
        foodOrigin: "",
        description: "",
        addedByName: user?.displayName || "",
        addedByEmail: user?.email || "",
      });

      navigate("/foods"); // Redirect after success
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message || "Something went wrong.",
        icon: "error",
        confirmButtonColor: "#E74C3C",
      });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
        Add New Food Item
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Food Name */}
        <div className="form-control">
          <label className="label text-blue-500 flex items-center gap-2">
            <FaUtensils /> Food Name
          </label>
          <input
            type="text"
            name="foodName"
            value={foodData.foodName}
            onChange={handleChange}
            placeholder="Enter food name"
            className="input input-bordered w-full bg-gray-100 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Food Image */}
        <div className="form-control">
          <label className="label text-blue-500 flex items-center gap-2">
            <FaImage /> Food Image URL
          </label>
          <input
            type="text"
            name="foodImage"
            value={foodData.foodImage}
            onChange={handleChange}
            placeholder="Paste image URL"
            className="input input-bordered w-full bg-gray-100 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Food Category */}
        <div className="form-control">
          <label className="label text-blue-500 flex items-center gap-2">
            <FaTag /> Food Category
          </label>
          <input
            type="text"
            name="foodCategory"
            value={foodData.foodCategory}
            onChange={handleChange}
            placeholder="e.g. Bangladeshi, Chinese, Italian"
            className="input input-bordered w-full bg-gray-100 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Quantity & Price */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label text-blue-500 flex items-center gap-2">
              <FaSortNumericUp /> Quantity
            </label>
            <input
              type="number"
              name="quantity"
              value={foodData.quantity}
              onChange={handleChange}
              placeholder="Enter quantity"
              className="input input-bordered w-full bg-gray-100 focus:ring focus:ring-blue-300"
              required
            />
          </div>
          <div className="form-control">
            <label className="label text-blue-500 flex items-center gap-2">
              <FaDollarSign /> Price (৳)
            </label>
            <input
              type="number"
              name="price"
              value={foodData.price}
              onChange={handleChange}
              placeholder="Enter price"
              className="input input-bordered w-full bg-gray-100 focus:ring focus:ring-blue-300"
              required
            />
          </div>
        </div>

        {/* Food Origin */}
        <div className="form-control">
          <label className="label text-blue-500 flex items-center gap-2">
            <FaGlobe /> Food Origin (Country)
          </label>
          <input
            type="text"
            name="foodOrigin"
            value={foodData.foodOrigin}
            onChange={handleChange}
            placeholder="e.g. Bangladesh, India"
            className="input input-bordered w-full bg-gray-100 focus:ring focus:ring-blue-300"
            required
          />
        </div>

        {/* Description */}
        <div className="form-control">
          <label className="label text-blue-500 flex items-center gap-2">
            <FaFileAlt /> Food Description
          </label>
          <textarea
            name="description"
            value={foodData.description}
            onChange={handleChange}
            placeholder="Enter ingredients, making procedure..."
            className="textarea textarea-bordered w-full bg-gray-100 focus:ring focus:ring-blue-300"
            required
          ></textarea>
        </div>

        {/* Added By (Disabled Fields) */}
        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label text-gray-500">Added By (Name)</label>
            <input
              type="text"
              value={foodData.addedByName}
              className="input input-bordered w-full bg-gray-200 text-gray-500"
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label text-gray-500">Added By (Email)</label>
            <input
              type="email"
              value={foodData.addedByEmail}
              className="input input-bordered w-full bg-gray-200 text-gray-500"
              disabled
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary w-full">
            Add Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
