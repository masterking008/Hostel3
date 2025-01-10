
import { Tilt } from 'react-tilt'

const defaultOptions = {
	reverse:        true,  // reverse the tilt direction
	max:            35,     // max tilt rotation (degrees)
	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1.05,    // 2 = 200%, 1.5 = 150%, etc..
	speed:          2000,   // Speed of the enter/exit transition
	transition:     true,   // Set a transition on enter/exit.
	axis:           null,   // What axis should be disabled. Can be X or Y.
	reset:          true,    // If the tilt effect has to be reset on exit.
	easing:         "ease-in-out",    // Easing on enter/exit.
};


export default function HeroSection() {
  return (
    <div className="min-h-screen flex justify-center items-center">


      {/* Content Section */}
      <Tilt options={defaultOptions}>
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-36 px-5  bg-black/25 backdrop-blur-md rounded-3xl shadow-xl shadow-slate-900/10 border border-white/10">
          <div className="text-center ">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Welcome to Hostel III
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              We Are Vitruvians
            </h1>
          </div>
        </div>
      </Tilt>
      
    </div>
  );
}
