import React from 'react';

const ActivitySection = () => {
    return (
        <div className="bg-slate-900 shadow-inner py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl leading-8 font-lexend tracking-tight text-gray-900  sm:text-[40px] text-center">
                    Activity
                </h2>
                <p className="mt-10 text-lg tracking-tight text-center text-slate-700">
                    THESE ARE THE MOST ADVENTURES THING
                </p>
                <ul
                    role="list"
                    className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" // Updated to use grid layout
                >
                    {newsArticles.map((article) => (
                        <li key={article.id} className="rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10 transition duration-300">
                            <h3 className="text-lg font-medium text-gray-900">{article.title}</h3>
                            <p className="text-sm text-gray-500">{article.date}</p>
                            <p className="mt-2 text-gray-700">{article.description}</p>
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className=" text-indigo-600 hover:text-indigo-800 font-semibold"
                            >
                                Read More
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const newsArticles = [
    {
        id: 1,
        title: "New Research Initiatives at IIT Bombay",
        date: "October 8, 2024",
        description: "IIT Bombay launches new research initiatives focusing on sustainability and innovation in technology.",
        url: "https://www.iitb.ac.in/breaking-news/remembering-gandhiji-and-shastriji-their-birth-anniversaries" // External URL for the first article
    },
    {
        id: 2,
        title: "Upcoming Tech Fest at IIT Bombay",
        date: "October 6, 2024",
        description: "Join us for the upcoming Tech Fest featuring workshops, guest lectures, and networking opportunities.",
        url: "https://www.iitb.ac.in/events/tech-fest" // Example external URL for the second article
    },
    {
        id: 3,
        title: "IIT Bombay's Achievements in International Rankings",
        date: "October 5, 2024",
        description: "IIT Bombay has ranked among the top engineering institutions globally in the latest QS rankings.",
        url: "https://www.iitb.ac.in/rankings" // Example external URL for the third article
    },
];


export default ActivitySection;
