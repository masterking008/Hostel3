import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/Error";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";
import Gallery from "./components/Gallery";
import "./App.css"
import "./Tailwind.css"
import bgi from "./assets/bg.jpg"


export default function App() {
  return (
    <>
      <div
        className="bg-fixed bg-center bg-cover bg-no-repeat min-h-screen"
        style={{ backgroundImage: `url(${bgi})` }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Gallery" element={<Gallery />} />
          {/* <Route path="/Conatct" element={<AboutSection />} /> */}
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}