import React from 'react';
import TeamSection from './Team';
import MaintCo from '../assets/maint.jpg'
import GSec from '../assets/gsec.jpg'
import SportsCo from '../assets/sports.jpg'
import TechCo from '../assets/tech.jpg'
import CultCo from '../assets/cult.jpg'
import MessCo from '../assets/mess.jpg'
const AboutPage = () => {
    return (
        <>
            <div className="bg-slate-900 py-16 shadow-inner">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                            Hostel 3 Council                        </h2>
                    </div>

                    <div className="rounded-2xl bg-slate-200  shadow-xl shadow-slate-900/10 m-6 p-4 pb-8 text-center hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                    >
                        <div>
                            <h2 className="m-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Hostel        </h2>
                        </div>
                        <div className='flex justify-center'>

                            <div className="rounded-2xl bg-white shadow-xl w-64 m-6 shadow-slate-900/10 p-4 text-center hover:bg-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300" // Darker shadow on hover
                            >
                                <img
                                    className="w-48 h-48 rounded-full mx-auto mb-4 object-cover	 " // Image size
                                    src={GSec}
                                    alt="Gsec"
                                />
                                <h3 className="mt-2 text-xl leading-6 font-medium text-blue-500">
                                    Harshvardhan Chouhan                         </h3>
                                <p className="mt-2 text-lg text-gray-500">
                                    General Secretary
                                </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    9589166124                                </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    210040062@iitb.ac.in                                                                </p>

                            </div>



                        </div>

                    </div>

                    <div className="rounded-2xl bg-slate-200  shadow-xl shadow-slate-900/10 m-6 p-4 pb-8 text-center hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                    >
                        <div>
                            <h2 className="m-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Sports                   </h2>
                        </div>
                        <div className='flex justify-center'>

                            <div className="rounded-2xl bg-white shadow-xl w-64 m-6 shadow-slate-900/10 p-4 text-center hover:bg-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300" // Darker shadow on hover
                            >
                                <img
                                    className="w-48 h-48 rounded-full mx-auto mb-4  object-cover	" // Image size
                                    src={SportsCo}
                                    alt="SportsCo"
                                />
                                <h3 className="mt-2 text-xl leading-6 font-medium text-blue-500">
                                    Himanshu choudhary
                                </h3>
                                <p className="mt-2 text-lg text-gray-500">
                                    Sports  Councillor                                    </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    7355572388                                    </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    22b0430@iitb.ac.in                                                                </p>

                            </div>



                        </div>

                    </div>


                    <div className="rounded-2xl bg-slate-200  shadow-xl shadow-slate-900/10 m-6 p-4 pb-8 text-center hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                    >
                        <div>
                            <h2 className="m-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Cultural                   </h2>
                        </div>
                        <div className='flex justify-center'>

                            <div className="rounded-2xl bg-white shadow-xl w-64 m-6 shadow-slate-900/10 p-4 text-center hover:bg-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300" // Darker shadow on hover
                            >
                                <img
                                    className="w-48 h-48 rounded-full mx-auto mb-4  " // Image size
                                    src={CultCo}
                                    alt="CultCo"
                                />
                                <h3 className="mt-2 text-xl leading-6 font-medium text-blue-500">
                                    Subhash Chandra Killo
                                </h3>
                                <p className="mt-2 text-lg text-gray-500">
                                    Cultural  Councillor                                    </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    9493203341                              </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    22b2735@iitb.ac.in                                 </p>

                            </div>



                        </div>

                    </div>
                    <div className="rounded-2xl bg-slate-200  shadow-xl shadow-slate-900/10 m-6 p-4 pb-8 text-center hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                    >
                        <div>
                            <h2 className="m-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Technical               </h2>
                        </div>
                        <div className='flex justify-center'>

                            <div className="rounded-2xl bg-white shadow-xl w-64 m-6 shadow-slate-900/10 p-4 text-center hover:bg-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300" // Darker shadow on hover
                            >
                                <img
                                    className="w-48 h-48 rounded-full mx-auto mb-4  object-cover	" // Image size
                                    src={TechCo}
                                    alt="TechCo"
                                />
                                <h3 className="mt-2 text-xl leading-6 font-medium text-blue-500">
                                    Sarvesh Patil                                </h3>
                                <p className="mt-2 text-lg text-gray-500">
                                    Technical  Councillor                                    </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    9423034000                                </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    22b2276@iitb.ac.in
                                </p>

                            </div>



                        </div>

                    </div>
                    <div className="rounded-2xl bg-slate-200  shadow-xl shadow-slate-900/10 m-6 p-4 pb-8 text-center hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                    >
                        <div>
                            <h2 className="m-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Mess                   </h2>
                        </div>
                        <div className='flex justify-center'>

                            <div className="rounded-2xl bg-white shadow-xl w-64 m-6 shadow-slate-900/10 p-4 text-center hover:bg-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300" // Darker shadow on hover
                            >
                                <img
                                    className="w-48 h-48 rounded-full mx-auto mb-4  " // Image size
                                    src={MessCo}
                                    alt="Rohan"
                                />
                                <h3 className="mt-2 text-xl leading-6 font-medium text-blue-500">
                                    Shubham Meena                                </h3>
                                <p className="mt-2 text-lg text-gray-500">
                                    Mess  Councillor                                    </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    9302020069                                </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    22b4526@iitb.ac.in                                    </p>

                            </div>



                        </div>

                    </div>
                    <div className="rounded-2xl bg-slate-200  shadow-xl shadow-slate-900/10 m-6 p-4 pb-8 text-center hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                    >
                        <div>
                            <h2 className="m-3 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Maintainance                   </h2>
                        </div>
                        <div className='flex justify-center'>

                            <div className="rounded-2xl bg-white shadow-xl w-64 m-6 shadow-slate-900/10 p-4 text-center hover:bg-gray-700 hover:shadow-xl hover:scale-110 transition-all duration-300" // Darker shadow on hover
                            >
                                <img
                                    className="w-48 h-48 rounded-full mx-auto mb-4  " // Image size
                                    src={MaintCo}
                                    alt="Rohan"
                                />
                                <h3 className="mt-2 text-xl leading-6 font-medium text-blue-500">
                                    Rohan Dubey
                                </h3>
                                <p className="mt-2 text-lg text-gray-500">
                                    Maintanance  Councillor                                    </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    9302020069                                </p>
                                <p className="mt-2 text-lg text-gray-500">
                                    22b4526@iitb.ac.in                                    </p>

                            </div>



                        </div>

                    </div>


                </div>
            </div>
        </>
    );
};


export default AboutPage;
