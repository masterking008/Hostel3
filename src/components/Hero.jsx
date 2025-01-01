import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex justify-center items-center">


      {/* Content Section */}
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-36">
        <div className="text-center ">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Welcome to Hostel III
          </h1>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            We Are Vitruvians
          </h1>
          
        </div>
      </div>
    </div>
  );
}
