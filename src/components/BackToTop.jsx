// BackToTop.js
import React, { useState, useEffect } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 bg-white/10 text-white rounded-full shadow-md hover:bg-slate-200/20 border border-white/5 "
        >
          ↑
        </button>
      )} */}
       <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 p-3 bg-white/10 text-white rounded-full shadow-md hover:bg-slate-200/20 border border-white/5 
        transition-opacity duration-300 ease-in-out
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}`}
    >
      ↑
    </button>
    </>
  );
};

export default BackToTop;
