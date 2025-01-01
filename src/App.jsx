import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/Error";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import "./App.css";
import bgi from "./assets/bg.jpg";

export default function App() {
  return (
    <>
      {/* Background Image */}
      <img
        src={bgi}
        alt="Background"
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />
      
      {/* Navigation Bar */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>

      {/* Footer Section */}
      <Footer />
    </>
  );
}
