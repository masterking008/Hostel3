import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import ErrorPage from "./components/Error";
import AboutPage from "./components/AboutPage";
import HomePage from "./components/HomePage";


export default function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        {/* <Route path="/Conatct" element={<AboutSection />} /> */}
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      <Footer/>
    </>
  )
}