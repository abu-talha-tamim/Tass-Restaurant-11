import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const MyFoods = () => {
  const { user } = useAuth();
  const [myFoods, setMyFoods] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/foods?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log("Fetched Foods:", data);
          setMyFoods(data);
        })
        .catch((error) => console.error("Error fetching user foods:", error));
    }
  }, [user?.email]);

  // Navigate to Purchase Page with Food ID
  const handleUpdate = (id) => {
    navigate(`/purchase/${id}`); // Navigate dynamically
  };

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-bold mb-4">My Foods</h2>
      <table className="table w-full border-collapse border border-gray-300">
        {/* Table Head */}
        <thead className="bg-gray-200">
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Food Info</th>
            <th>Category</th>
            <th>Price</th>
            <th>Update</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody>
          {myFoods.length > 0 ? (
            myFoods.map((food) => (
              <tr key={food._id} className="text-center">
                {/* Checkbox */}
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>

                {/* Food Info with Image */}
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-16 h-16">
                        <img
                          src={
                            food.foodImage ||
                            "https://via.placeholder.com/100?text=No+Image"
                          }
                          alt={food.foodName}
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{food.foodName}</div>
                      <div className="text-sm opacity-50">
                        {food.foodOrigin}
                      </div>
                    </div>
                  </div>
                </td>

                {/* Food Category */}
                <td>{food.foodCategory}</td>

                {/* Price */}
                <td>${food.price}</td>

                {/* Update Button */}
                <th>
                  <button
                    className="btn btn-info btn-sm flex items-center gap-1"
                    onClick={() => handleUpdate(food._id)} // Navigate to Purchase page
                  >
                    <FaEdit /> Update
                  </button>
                </th>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="5"
                className="text-center text-gray-500 border border-gray-300 p-4"
              >
                No food items found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyFoods;
