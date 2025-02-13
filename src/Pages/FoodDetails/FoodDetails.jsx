import { Link, useLoaderData } from "react-router-dom";

const FoodDetails = () => {
  const food = useLoaderData(); // ✅ Load food details

  // ✅ Destructure food object
  const {
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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        {/* ✅ Display dynamic image */}
        <img
          src={foodImage}
          alt={foodName}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          {/* ✅ Display dynamic food name */}
          <h1 className="text-5xl font-bold">{foodName}</h1>
          {/* ✅ Display dynamic description */}
          <p className="py-6">{description}</p>
          <p className="font-bold text-lg">Price: ${price}</p>
          <p className="font-bold text-lg">Quantity: {quantity}</p>
          <p className="font-bold text-lg">Origin: {foodOrigin}</p>

          {/* ✅ Display Added By details */}
          {addedBy && (
            <div className="mt-4">
              <p className="text-lg font-semibold">Added By:</p>
              <p>Name: {addedBy.name}</p>
              <p>Email: {addedBy.email}</p>
            </div>
          )}

          {/* ✅ Display Buyer Name */}
          {buyerName && (
            <div className="mt-4">
              <p className="text-lg font-semibold">Buyer:</p>
              <p>{buyerName}</p>
            </div>
          )}

          <Link to={`/purchase/${food._id}`}><button className="btn btn-primary mt-4">Purchase</button></Link>
        </div>
      </div>
    </div>
  );
};

export default FoodDetails;
