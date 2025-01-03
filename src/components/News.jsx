import React from 'react';
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

export default function News() {
    const newsData = [
        {
            title: "A Rapid Package of Helpfulness!",
            text: "There were almost everything where I got stuck. Starting from registration to all the way to sitting in an online class. I was able to pass each step smoothly only after contacting IRSCP team...",
            name: "Vikram Bhist",
            dept: "Mechanical Engg",
        },
        {
            title: "My support system!",
            text: "Getting selected to one of the best colleges of India was equally daunting as exciting given the COVID-19 scenario. But from the very beginning, the IRSCP team was with me guiding me...",
            name: "Siddhant Jain",
            dept: "Mechanical Engg",
        },
        {
            title: "Wonderful Support!",
            text: "I was oblivious on what to expect from such an institute. There was an overwhelming sensation once I received the offer letter. From the time I received the offer letter till the end of the semester...",
            name: "Haritha Joseph",
            dept: "MEMS",
        },
        {
            title: "Quick Support!",
            text: "I was nervous before coming to the institute. Being one of the prestigious institutes of India, I was very well under pressure on what is expected from me. But, with the help of IRSCP and my mentor...",
            name: "Gilbert M George",
            dept: "Earth Sciences",
        },
    ];

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
                    {newsData.map((news, index) => (
                        <NewsCard key={index} news={news} />
                    ))}
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
                    src="https://img.freepik.com/premium-psd/character-avatar-3d-illustration_460336-706.jpg"
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
                        <div className="mt-1 text-sm text-slate-300">{news.dept}</div>
                    </div>
                </figcaption>
            </div>
        </div>
    );
}
