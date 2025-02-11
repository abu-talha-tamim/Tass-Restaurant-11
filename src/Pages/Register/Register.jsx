import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import LottiData from "../../assets/Animation - 1739195283777.json";
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import AuthContext from "../../Contex/AuthContex/AuthContext";

const Register = () => {
  const { createUser, googleLogin } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // Validate password
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert(
        "Password must be at least 6 characters long, contain at least one uppercase letter and one number"
      );
      return;
    }

    // Create the user 
    createUser(email, password)
      .then((result) => {
        console.log("User registered successfully:", result.user);
        // Optionally update user profile with `name` or navigate after registration
      })
      .catch((error) => {
        console.error("Error registering user:", error.message);
      });

    console.log({ name, email, password });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("Google login successful:", result.user);
      })
      .catch((error) => {
        console.error("Google login error:", error.message);
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 gap-8">
      {/* Registration Form Card */}
      <div className="card bg-white w-full max-w-md shadow-2xl p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          Register
        </h1>

        <form onSubmit={handleRegister} className="space-y-4">
          {/* Name Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Email Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Photo URL Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Photo URL</span>
            </label>
            <input
              type="text"
              name="photoURL"
              placeholder="Enter your photo URL"
              className="input input-bordered"
            />
          </div>

          {/* Password Field */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
              pattern="^(?=.*[A-Z])(?=.*\d).{6,}$"
              title="Password must be at least 6 characters long, contain at least one uppercase letter and one number"
            />
          </div>

          {/* Register Button */}
          <div className="form-control mt-4">
            <button className="btn btn-primary w-full">Register</button>
          </div>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login Button */}
        <div className="form-control">
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline w-full flex items-center justify-center gap-2"
          >
            <FcGoogle size={24} />
            Continue with Google
          </button>
        </div>

        {/* Redirect to Login */}
        <p className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login here
          </Link>
        </p>
      </div>

      {/* Lottie Animation Section */}
      <div>
        <Lottie animationData={LottiData} loop={true} className="w-60 h-auto" />
      </div>
    </div>
  );
};

export default Register;
