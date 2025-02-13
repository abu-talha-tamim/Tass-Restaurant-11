import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import loginData from "../../assets/register- 1736793070223.json"; // Your Lottie animation JSON
import { FcGoogle } from "react-icons/fc";
import { useContext } from "react";
import AuthContext from "../../Contex/AuthContex/AuthContext";

const Login = () => {
  const { logInUser, googleLogin } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  console.log('in login page', location)
  const from = location.state || '/';

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        console.log("Login successful:", result.user);
        navigate(from);
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log("Google login successful:", result.user);
      })
      .catch((error) => {
        console.error("Google login error:", error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gray-100 px-4 gap-8">
      {/* Login Form Card */}
      <div className="card bg-white w-full max-w-md shadow-2xl p-6 rounded-lg">
        <h1 className="text-4xl font-bold text-center mb-6 text-blue-600">
          Login
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
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
            />
          </div>

          {/* Login Button */}
          <div className="form-control mt-4">
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
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

        {/* Redirect to Register */}
        <p className="text-center mt-4 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline"
          >
            Register here
          </Link>
        </p>
      </div>

      {/* Lottie Animation Section */}
      <div>
        <Lottie
          animationData={loginData}
          loop={true}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Login;
