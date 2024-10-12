import React from 'react';
import TeamSection from './Team';

const AboutPage = () => {
    return (
        <>
            <div className="bg-white py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                    {/* Upper 3/4th: Image on the left and paragraphs on the right */}
                    <div className="flex flex-col lg:flex-row lg:items-start">
                        {/* Left Side: Team Image */}
                        <div className="flex-1 lg:pr-8 mb-8 lg:mb-0">
                            <img
                                src="/files/irscp-group.jpg" // Replace with your team image URL
                                alt="Team"
                                className="w-full h-full max-h-[500px] rounded-lg shadow-md object-cover"
                            />
                        </div>

                        {/* Right Side: Text */}
                        <div className="flex-1 flex flex-col justify-center">
                            <h2 className="text-2xl font-extrabold text-gray-900">About Us</h2>
                            <p className="mt-4 text-gray-700">
                                Institute Research Scholar Companion Programme (IRSCP) is a programme for the PhD Community of IIT Bombay with the primary objective to cater to the needs of research scholars.
                            </p>
                            <p className="mt-4 text-gray-700">
                                PhD life is a completely different chapter of student life in terms of cultural, socio-economic, and academic aspects. Newly arrived PhD students generally face many problems related to academic/non-academic issues. This led to the conception of the idea of companions for the new research scholars, similar to the Student Companion Programme for new post-graduate students. Companions will try to make life here at IITB feel like 'Home Away From Home' for newcomers. They will help them cope with IITB life in both academic and non-academic ways.
                            </p>
                            <p className="mt-4 text-gray-700">
                                Under this program, a group of people is available in each department, called the companions group of the department. A companion will be assigned to every new PhD entrant to the department. They are to help new entrants regarding issues, whether academic or non-academic. They will guide them by conducting regular interactive sessions. New entrants can approach them anywhere, anytime without any hesitation.
                            </p>
                        </div>
                    </div>

                    {/* Lower 1/4th: Three Boxes (Mission, Vision, History) */}
                    <div className="mt-12">
                        <ul
                            role="list"
                            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                        >
                            {boxesData.map((box) => (
                                <li
                                    key={box.title}
                                    className="border rounded-lg p-4 bg-gray-200 shadow-md hover:bg-gray-300 transition duration-300 mx-auto"
                                    style={{ width: '250px', height: '250px' }} // Fixed width
                                >
                                    <div className="flex flex-col items-center justify-center h-full">
                                        {/* Centered square image */}
                                        <img
                                            className="w-[100px] h-[100px] object-cover rounded-lg mb-2" // Adjust size as needed
                                            src={box.image}
                                            alt={box.title}
                                        />
                                        {/* Title directly below the image */}
                                        <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">
                                            {box.title}
                                        </h3>
                                        {/* Description */}
                                        <p className="mt-2 text-sm text-gray-500 text-center flex-1">{box.text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <TeamSection />
        </>
    );
};

// Data for the boxes
const boxesData = [
    {
        title: 'Mission',
        text: 'Our mission is to develop innovative technologies that improve the quality of life and address critical challenges.',
        image: '/files/mission-logo.jpeg', // Replace with your actual image path
    },
    {
        title: 'Vision',
        text: 'We envision a future where technology empowers individuals and communities to reach their full potential.',
        image: '/files/vision-logo.jpeg', // Replace with your actual image path
    },
    {
        title: 'History',
        text: 'Founded in 2010, our organization has a long history of innovation and dedication to excellence in technology.',
        image: '/files/history-logo.jpeg', // Replace with your actual image path
    }
];

export default AboutPage;
