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
            
                <TeamSection />
            </div>
        </>
    );
};

export default AboutPage;
