import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/Error";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import "./App.css";
import bgi from "./assets/bg.webp";
import MessPage from "./components/Mess";
import SportsPage from "./components/Sports";
import TechnicalsPage from "./components/Technical";
import CulturalsPage from "./components/Cultural";

export default function App() {
  return (
    <>
      {/* Background Image */}
      <img
        src={bgi}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10 brightness-[0.60]"
      />
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Mess" element={<MessPage />} />
        <Route path="/Culturals" element={<CulturalsPage />} />
        <Route path="/Sports" element={<SportsPage />} />
        <Route path="/Tech" element={<TechnicalsPage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
