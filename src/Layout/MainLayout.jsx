
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";

const MainLayout = () => {
  return (
    <div className="max-w-7xl w-full mx-auto min-h-screen flex flex-col">
      <Navbar />
      {/* Added padding to avoid navbar overlap */}
      <div className="flex-1 px-4 py-6 mt-16">
        <Outlet />
        <Footer/>
      </div>
    </div>
  );
};

export default MainLayout;
