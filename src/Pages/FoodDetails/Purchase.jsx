import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import {
  FaShoppingCart,
  FaUser,
  FaEnvelope,
  FaBox,
  FaUtensils,
  FaDollarSign,
} from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Purchase = () => {
  const { id } = useParams();
  const {user} = useAuth();
  const [food, setFood] = useState({});
 

  useEffect(() => {
    // Fetch food details by ID
    fetch(`http://localhost:5000/foods/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data))
      .catch((error) => console.error(" Error fetching food:", error));
  }, [id]);

  const submitPurchase = (e) => {
    e.preventDefault();
    const form = e.target;

    const purchaseData = {
        foodId: id,
        foodName: food.foodName,
        price: food.price,
        quantity: form.quantity.value,
        buyerName: user?.displayName || "Unknown Buyer",
        buyerEmail: user?.email || "No Email Provided",
        purchaseDate: new Date().toISOString(),
      };
    // Send order data to the backend
    fetch("http://localhost:5000/food-purchase", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(purchaseData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire({
            title: " Order Successful!",
            text: data.message,
            icon: "success",
            confirmButtonText: "OK",
          });
          form.reset();
        } else {
          Swal.fire({
            title: " Order Failed!",
            text: "Something went wrong. Please try again.",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => {
        console.error("Error placing order:", error);
        Swal.fire({
          title: "❌ Error!",
          text: "Failed to process order.",
          icon: "error",
          confirmButtonText: "OK",
        });
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white w-full max-w-md shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6 flex items-center justify-center gap-2">
          <FaShoppingCart /> Order Your Food
        </h1>

        <form onSubmit={submitPurchase} className="space-y-4">
          {/* Food Name */}
          <div className="flex items-center gap-2">
            <FaUtensils className="text-lg text-blue-600" />
            <label className="font-medium">Food Name</label>
          </div>
          <input
            type="text"
            value={food.foodName || ""}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />

          {/* Price */}
          <div className="flex items-center gap-2">
            <FaDollarSign className="text-lg text-blue-600" />
            <label className="font-medium">Price</label>
          </div>
          <input
            type="text"
            value={`$${food.price || 0}`}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />

          {/* Quantity */}
          <div className="flex items-center gap-2">
            <FaBox className="text-lg text-blue-600" />
            <label className="font-medium">Quantity</label>
          </div>
          <input
            type="number"
            name="quantity"
            placeholder="Enter quantity"
            className="input input-bordered w-full"
            required
          />

          {/* Buyer Name */}
          <div className="flex items-center gap-2">
            <FaUser className="text-lg text-blue-600" />
            <label className="font-medium">Buyer Name</label>
          </div>
          <input
            type="text"
            value={user?.displayName || "Unknown Buyer"}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />

          {/* Buyer Email */}
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-lg text-blue-600" />
            <label className="font-medium">Buyer Email</label>
          </div>
          <input
            type="text"
            value={user?.email || "No Email Provided"}
            readOnly
            className="input input-bordered w-full bg-gray-200"
          />

          {/* Purchase Button */}
          <Link to="myfoods"><button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2"
          >
            <FaShoppingCart /> Purchase Now
          </button></Link>
        </form>
      </div>
    </div>
  );
};

export default Purchase;
