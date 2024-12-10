import React from 'react';
import TeamSection from './Team';

const AboutPage = () => {
    return (
        <>
            <div className="bg-slate-900 py-16 shadow-inner">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                            Hostel 3 Council                        </h2>
                    </div>
                    <div className="rounded-2xl bg-slate-200  shadow-xl shadow-slate-900/10 m-3 p-4 text-center hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                    >
                        <div>
                            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                Maintainance                   </h2>
                        </div>
                        <div className='flex'>
                            <div>
                                <div className="rounded-2xl bg-white shadow-xl shadow-slate-900/10 p-4 text-center hover:bg-slate-200 hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                                    style={{ width: '350px', margin: '0 auto' }} >
                                      <img
                                        className="w-48 h-48 rounded-full mx-auto mb-4" // Image size
                                        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                                        alt="Rohan"
                                    />
                                    <h3 className="mt-2 text-xl leading-6 font-medium text-gray-900">
                                        Rohan
                                    </h3>
                                    <p className="mt-2 text-lg text-gray-500">
                                        Counciler                                    </p>
                                   
                                </div>
                            </div>
                            <div>
                                <div className="team-text">Team Details </div>
                                <div className="team-secy">
                                    <div className="rounded-2xl bg-white shadow-xl shadow-slate-900/10 p-4 text-center hover:bg-slate-200 hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                                        style={{ width: '250px', margin: '0 auto' }} >
                                        Secy 1
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <ul
                            role="list"
                            className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4" // 4 columns for larger screens
                        >
                            {teamMembers.map((member) => (
                                <li
                                    key={member.name}
                                    className="rounded-2xl bg-white shadow-xl shadow-slate-900/10 p-4 text-center hover:bg-slate-200 hover:shadow-xl transition-all duration-300" // Darker shadow on hover
                                    style={{ width: '250px', margin: '0 auto' }} // Center the box and add fixed width in pixels
                                >
                                    <img
                                        className="w-32 h-32 rounded-full mx-auto mb-4" // Image size
                                        src={member.image}
                                        alt={member.name}
                                    />
                                    <h3 className="mt-2 text-lg leading-6 font-medium text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {member.position}
                                    </p>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {member.location}
                                    </p>
                                </li>
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    );
};


const teamMembers = [
    {
        name: 'Leslie Alexander',
        position: 'Co-Founder / CEO',
        location: 'Toronto, Canada',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
        name: 'Michael Foster',
        position: 'Co-Founder / CTO',
        location: 'Glasgow, Scotland',
        image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
        name: 'Dries Vincent',
        position: 'Business Relations',
        location: 'Niagara Falls, Canada',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
        name: 'Lindsay Walton',
        position: 'Front-end Developer',
        location: 'London, England',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
        name: 'Courtney Henry',
        position: 'Designer',
        location: 'Toronto, Canada',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
        name: 'Tom Cook',
        position: 'Director of Product',
        location: 'Toronto, Canada',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
        name: 'Whitney Francis',
        position: 'Copywriter',
        location: 'Toronto, Canada',
        image: 'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    },
    {
        name: 'Leonard Krasner',
        position: 'Senior Designer',
        location: 'Toronto, Canada',
        image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80'
    }
];

export default AboutPage;
