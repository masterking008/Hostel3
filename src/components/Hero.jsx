import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: true, // Reverse the tilt direction
  max: 25, // Max tilt rotation (degrees)
  perspective: 1500, // Transform perspective for a subtle effect
  scale: 1.025, // Slightly larger scale on hover
  speed: 800, // Speed of the enter/exit transition
  transition: true, // Enable transition on enter/exit
  axis: null, // Axis to disable (X or Y)
  reset: true, // Reset on exit
  easing: "ease-in-out", // Smooth easing on enter/exit
};

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 ">
      <Tilt options={defaultOptions}>
        <div className="relative mx-auto max-w-4xl py-16 sm:py-20 lg:py-28 px-6 sm:px-8 lg:px-12 bg-black/50 backdrop-blur-lg rounded-3xl shadow-lg shadow-gray-800/20 border border-white/10 hover:shadow-lime-300/30 transition-all duration-300">
          {/* Animated Background Effect */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-lime-400 via-blue-500 to-gray-600 opacity-10 blur-3xl rounded-3xl pointer-events-none"
            aria-hidden="true"
          ></div>

          <div className="relative text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Welcome to <span className="text-lime-400">Hostel III</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg lg:text-xl text-gray-300">
              Your gateway to the ultimate{" "}
              <span className="font-bold text-blue-400">Vitruvian experience</span>.
            </p>
            <p className="mt-2 text-sm sm:text-md lg:text-lg text-gray-400 italic">
              "Where innovation meets tradition, and memories are made."
            </p>
          </div>
        </div>
      </Tilt>
    </div>
  );
}
