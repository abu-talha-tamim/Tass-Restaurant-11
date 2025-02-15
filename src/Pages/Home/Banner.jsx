import { easeIn, motion } from "framer-motion"
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(https://i.ibb.co/TM5x6s4b/Restaurant-1.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <motion.h1
          animate={{x:60,}}
          transition={{duration: 3, delay: 1, ease: easeIn, repeat: Infinity}}
          className="mb-5 text-5xl font-bold"><motion.span
          animate={{color: ['#e2f437 ', '#8ff6c9', '#f7dc6f']}}
          transition={{duration: 1.5, repeat: Infinity}}
          >Tass</motion.span> Restaurant</motion.h1 >
          <p className="mb-5">
            Experience a vibrant restaurant offering a diverse menu, exceptional
            service, and a warm, inviting ambiance.
          </p>
         
          <Link to="/foods"><button className="btn btn-info mt-5">Learn More</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
