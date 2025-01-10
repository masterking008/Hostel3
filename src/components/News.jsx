import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CustomLeftArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 text-white rounded-full shadow-md hover:bg-slate-200/20 border border-white/5"
        >
            ❮
        </button>
    );
}

function CustomRightArrow({ onClick }) {
    return (
        <button
            onClick={onClick}
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-3 bg-white/10 text-white rounded-full shadow-md hover:bg-slate-200/20 border border-white/5"
        >
            ❯
        </button>
    );
}

const API_KEY = 'AIzaSyC1lTT_RGPic5Br-cJU0FVrV3LwnS4pQTE';
const SHEET_ID = '1TU6YPNY74guEW8EuKD6nkTNCBizOzhsmNS47pEm2Ikg';

export default function News() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async (sheetName) => {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}?key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const result = await response.json();
            if (!response.ok) {
                throw new Error(`Failed to fetch data: ${response.status} - ${response.statusText}`);
            }
            const rows = result.values.slice(1); // Exclude header row
            return rows.map((row) => ({
                title: row[0] || "No Title",
                text: row[1] || "No Description",
                name: row[2] || "Anonymous",
                link: row[3],
                image: row[4] || "https://res.cloudinary.com/dcqw5mziu/image/upload/v1736537961/Untitled_design_1_pesey9.png", // Default placeholder image
            }));
        } catch (error) {
            console.error(`Error fetching ${sheetName} data:`, error);
            return [];
        }
    };

    useEffect(() => {
        (async () => {
            const fetchedData = await fetchData('NEWS'); // Fetch data from 'NEWS' sheet
            setData(fetchedData);
            setLoading(false); // Set loading to false once data is fetched
        })();
    }, []);

    const responsive = {
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
    };

    return (
        <section id="news" className="py-10 sm:py-32">
            <div className="mx-auto max-w-7xl px-1 sm:px-4 lg:px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="font-bold text-3xl tracking-tight text-slate-100 sm:text-[40px]">
                        Announcements
                    </h2>
                    <p className="mt-4 text-lg tracking-tight text-slate-200">
                        This is Announcements Section
                    </p>
                </div>
                <Carousel
                    responsive={responsive}
                    autoPlay
                    infinite
                    autoPlaySpeed={3000}
                    keyBoardControl
                    customLeftArrow={<CustomLeftArrow />}
                    customRightArrow={<CustomRightArrow />}
                    className="mt-16"
                >
                    {loading ? (
                        <div className="flex justify-center items-center py-10">
                            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-slate-100"></div>
                        </div>) : (
                        data.map((news, index) => (
                            <NewsCard key={index} news={news} />
                        ))
                    )}
                </Carousel>
            </div>
        </section>
    );
}

function NewsCard({ news }) {
    return (
        <div className="relative flex flex-col sm:flex-row h-auto sm:h-[400px] justify-between rounded-2xl mx-5 bg-black/25 backdrop-blur-3xl border border-white/10 p-6 shadow-xl shadow-slate-900/10">
            {/* Left Side: Image */}
            <div className="flex-shrink-0 sm:w-1/3 h-48 sm:h-full rounded-2xl overflow-hidden">
                <img
                    alt={news.name}
                    src={news.image}
                    className="h-full w-full object-cover rounded-2xl transform transition-transform duration-500 hover:scale-110"
                />
            </div>

            {/* Right Side: Text Content */}
            <div className="flex flex-col justify-between sm:w-2/3 sm:pl-6 mt-4 sm:mt-0">
                <blockquote>
                    <h3 className="font-bold text-xl border-b border-white/10 pb-3 tracking-tight text-slate-100 sm:text-2xl">
                        {news.title}
                    </h3>
                    <p className="text-md tracking-tight pt-3 text-slate-100">
                        {news.text}
                    </p>
                </blockquote>
                <figcaption className="relative mt-6 flex items-center justify-between border-t border-white/10 pt-6">
                    <div>
                        <div className="font-display text-base text-slate-100">
                            {news.name}
                        </div>
                        {news.link && (
                            <div className="mt-1 text-sm text-slate-300">
                                <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
                                    {news.link}
                                </a>
                            </div>
                        )}
                    </div>
                </figcaption>
            </div>
        </div>
    );
}
