import { Link, useLoaderData } from "react-router-dom";
import { motion } from "framer-motion";

const FoodDetails = () => {
  const food = useLoaderData();

  // Destructure food object
  const {
    _id,
    foodName,
    foodImage,
    description,
    price,
    quantity,
    foodOrigin,
    addedBy,
    buyerName,
  } = food || {};

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 flex justify-center items-center p-6">
      <motion.div
        className="bg-white shadow-2xl rounded-lg p-8 max-w-4xl flex flex-col lg:flex-row items-center gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Food Image */}
        <motion.img
          src={foodImage}
          alt={foodName}
          className="w-80 h-80 object-cover rounded-xl shadow-lg border-4 border-gray-200"
          whileHover={{ scale: 1.05 }}
        />

        {/* Food Details */}
        <div className="text-gray-800 space-y-4">
          <h1 className="text-4xl font-bold text-blue-600">{foodName}</h1>
          <p className="text-lg text-gray-600">{description}</p>
          <p className="text-xl font-semibold text-gray-700">
            Price: <span className="text-blue-500">${price}</span>
          </p>
          <p className="text-lg font-medium">
            Quantity: <span className="text-gray-700">{quantity}</span>
          </p>
          <p className="text-lg font-medium">
            Origin: <span className="text-gray-700">{foodOrigin}</span>
          </p>

          {/* Added By Info */}
          {addedBy && (
            <div className="bg-blue-50 p-4 rounded-lg shadow-inner">
              <p className="text-lg font-semibold">Added By:</p>
              <p className="text-gray-600">Name: {addedBy.name}</p>
              <p className="text-gray-600">Email: {addedBy.email}</p>
            </div>
          )}

          {/* Buyer Name */}
          {buyerName && (
            <div className="bg-green-50 p-4 rounded-lg shadow-inner">
              <p className="text-lg font-semibold text-green-700">Buyer:</p>
              <p className="text-gray-600">{buyerName}</p>
            </div>
          )}

          {/* Purchase Button */}
          <Link to={`/purchase/${_id}`}>
            <motion.button
              className="mt-6 px-6 py-3 bg-blue-500 text-white font-semibold text-lg rounded-lg shadow-lg hover:bg-blue-600 transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Purchase Now
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default FoodDetails;
