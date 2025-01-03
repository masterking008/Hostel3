import React from "react";
import TeamSection from "./Team";

const AboutPage = () => {

    return (
        <>
            <div class="flex flex-col justify-center items-center py-20">

                <div className="text-center">
                    <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                        About Us
                    </h2>
                </div>
                <div className="flex flex-col md:flex-row  bg-black/25 backdrop-blur-xl rounded-3xl shadow-lg border border-white/10 p-6 md:p-8 mx-4 sm:mx-6 md:mx-16 my-6 max-w-7xl">
                    <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
                        <img
                            src="https://images.pexels.com/photos/958546/pexels-photo-958546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="food"
                            className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                    <div className="flex-1 text-left mt-6 md:mt-0 md:ml-8">
                        <h2 className="text-2xl md:text-4xl font-bold text-white">LIFE AT HOSTEL</h2>
                        <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                            High on spirits, Hostel 3 is best known for its enthusiastic inmates. Be it excelling in sports, outranking others in cultural or shining bright at institute festivals.
                        </p>
                        <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                            Our hostel has been there done that!! And this plethora of accomplishments doesnt make it stop. Hostel 3 is out for a kill--and even sky is not the limit!!
                        </p>

                    </div>
                </div>
                <TeamSection />
            </div>
        </>
    );
};

export default AboutPage;
