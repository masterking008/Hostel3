import { useState } from "react";

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            aria-labelledby="faq-title"
            className="relative overflow-hidden bg-black/25 backdrop-blur-3xl rounded-3xl py-16 px-2 sm:px-0 sm:py-32 m-3 sm:m-10 border border-white/10 shadow-lg"
            >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2
                        id="faq-title"
                        className="font-lexend text-3xl text-center sm:text-start tracking-tight text-slate-100 sm:text-[40px]"
                    >
                        Frequently asked questions
                    </h2>
                    <p className="font-lexend mt-10 text-center sm:text-start text-2xl tracking-tight text-slate-200">
                        Hostel 3
                    </p>
                </div>
                <section className="mt-10">
                    <dl className="mt-3 divide-y divide-white/10">
                        {faqData.map((faq, index) => (
                            <div key={index} className="py-4">
                                <summary
                                    onClick={() => toggleAccordion(index)}
                                    className="flex w-full cursor-pointer select-none justify-between text-left text-xl font-lexend leading-7 text-slate-100 group-open:text-indigo-600 [&::-webkit-details-marker]:hidden"
                                >
                                    {faq.question}
                                    <svg
                                        className={`ml-4 mt-0.5 h-6 w-6 flex-none stroke-slate-100 transition-transform duration-300 ease-in-out ${openIndex === index ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M18 12H6" />
                                        <path className={`${openIndex === index ? "hidden" : ""}`} d="M12 6v12" />
                                    </svg>
                                </summary>
                                <div
                                    className={`overflow-hidden transition-[max-height] duration-500 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"
                                        }`}
                                >
                                    <div className="pb-6 pt-6">
                                        <div className="prose prose-slate max-w-none prose-a:font-semibold prose-a:text-indigo-100 hover:prose-a:text-indigo-500">
                                            <p className=" text-lg tracking-tight text-slate-300">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </dl>
                </section>
            </div>
        </section>
    );
};

const faqData = [
    {
        question: "How are the students allotted their respective hostels?",
        answer: 'Hostel Affairs Council along with the GSecs of different hostels will decide this.',
    },
    {
        question: "How can I apply for Mess Rebate?",
        answer: 'Go to mess page then there you will find mess rebate link at the top.',
    },
    {
        question: "What is the current postion of our hostel in GCs?",
        answer: 'Last year, we secured 1st position in Sports GC.',
    },
    {
        question: "When will new Hostel Council be made?",
        answer: 'Generally in September, You will be recieve mail.',
    },

];


export default FAQ;
