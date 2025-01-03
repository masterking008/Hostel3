import React from "react";
import Logo from "../assets/logo.png"

const Footer = () => {
    return (
        <footer className="bg-black/25 backdrop-blur-3xl relative overflow-hidden">
            <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(221,214,254,0.15)] to-transparent"></div>

            <div className="mx-auto max-w-screen-2xl px-4 pb-6 pt-6 lg:pt-24">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
                    <div className="flex flex-col items-center">
                        <div className="flex justify-center text-blue-600 sm:justify-start">
                            <img
                                src={Logo}
                                alt="vitruvians Logo"
                                className="h-36 w-auto"
                            />

                        </div>

                        <p className="mt-6 max-w-md leading-relaxed text-slate-100 sm:max-w-xs sm:text-left">
                            Official Website of Hostel 3, IIT Bombay
                        </p>


                        <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                            <li>
                                <a
                                    href="https://www.facebook.com/h3iitb/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-grey-700 transition hover:text-grey-700/75"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <svg className="size-10" fill="#1877F2" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.instagram.com/vitruvians.iitb/"
                                    rel="noreferrer"
                                    target="_blank"
                                    className="text-grey-700 transition hover:text-grey-700/75"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <svg className="size-10" fill="#F56040" viewBox="0 0 24 24" aria-hidden="true">
                                        <path
                                            fillRule="evenodd"
                                            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-2">
                        <div className="text-center sm:text-left ">
                            <p className="text-lg font-medium text-slate-100">Links</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a href="./Gallery" class="text-slate-400 transition hover:text-slate-400/75">Gallery</a>
                                </li>
                                <li>
                                    <a href="./Mess" class="text-slate-400 transition hover:text-slate-400/75">Mess</a>
                                </li>
                                <li>
                                    <a href="./Sports" class="text-slate-400 transition hover:text-slate-400/75">Sports</a>
                                </li>
                                <li>
                                    <a href="./Cultural" class="text-slate-400 transition hover:text-slate-400/75">Cultural</a>
                                </li>
                                <li>
                                    <a href="./Tech" class="text-slate-400 transition hover:text-slate-400/75">Technical</a>
                                </li>
                                <li>
                                    <a href="./About" class="text-slate-400 transition hover:text-slate-400/75">About Us</a>
                                </li>
                            </ul>
                        </div>




                        <div className="text-center sm:text-left ">
                            <p className="text-lg font-medium text-slate-100">Helpful Links</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li>
                                    <a href="" class="text-slate-400 transition hover:text-slate-400/75" target="_blank"
                                        rel="noopener noreferrer">FAQs</a>
                                </li>
                                <li>
                                    <a href="https://asc.iitb.ac.in" class="text-slate-400 transition hover:text-slate-400/75" target="_blank"
                                        rel="noopener noreferrer">ASC</a>
                                </li>
                                <li>
                                    <a href="https://moodle.iitb.ac.in" class="text-slate-400 transition hover:text-slate-400/75" target="_blank"
                                        rel="noopener noreferrer">Moodle</a>
                                </li>
                                <li>
                                    <a href="https://webmail.iitb.ac.in" class="text-slate-400 transition hover:text-slate-400/75" target="_blank"
                                        rel="noopener noreferrer">Webmail</a>
                                </li>
                                <li>
                                    <a href="https://cc.iitb.ac.in" class="text-slate-400 transition hover:text-slate-400/75" target="_blank"
                                        rel="noopener noreferrer">Computer Center</a>
                                </li>
                                <li>
                                    <a href="https://portal.iitb.ac.in/asc" class="text-slate-400 transition hover:text-slate-400/75" target="_blank"
                                        rel="noopener noreferrer">External ASC</a>
                                </li>




                            </ul>
                        </div>

                        <div className="text-left px-10 sm:p-0 sm:col-span-1 col-span-2 flex flex-col items-center sm:items-start">
                            <p className="text-lg sm:ml-7 font-medium text-slate-100 text-center sm:text-left">Contact Us</p>

                            <ul className="mt-8 space-y-4 text-sm">
                                <li className="flex items-center justify-center gap-2 sm:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0 text-slate-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <a
                                        className="flex-1 text-slate-400"
                                        href="https://maps.app.goo.gl/Qv6gGW3xbHguVZrv7"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Hostel 3, IIT Bombay, Powai, Mumbai, Maharashtra - 400076
                                    </a>
                                </li>

                                <li className="flex items-center justify-center gap-2 sm:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0 text-slate-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <a
                                        className="flex-1 text-slate-400"
                                        href="mailto:gsech3@iitb.ac.in"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        gsech3@iitb.ac.in
                                    </a>
                                </li>

                                <li className="flex items-center justify-center gap-2 sm:justify-start">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 shrink-0 text-slate-100"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <a
                                        className="flex-1 text-slate-400"
                                        href="tel:+912225762603"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        +91 (22) 2576 2603
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="map">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1445.9126985609976!2d72.91164879555505!3d19.136898090547316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b808655be825%3A0xf7f36949991bb60!2sHostel%203%2C%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1735820605868!5m2!1sen!2sin&maptype=roadmap&zoom=15&disableDefaultUI=true&scrollwheel=false&fullscreenControl=false&zoomControl=false"
                                width="300"
                                height="250"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Maps"
                                className="hidden rounded-xl border border-white/10 sm:block opacity-45 hover:opacity-100 transition-all duration-300 ease-in-out"
                            ></iframe>
                        </div> */}
                    </div>
                    <div className="map flex justify-center">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1445.9126985609976!2d72.91164879555505!3d19.136898090547316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b808655be825%3A0xf7f36949991bb60!2sHostel%203%2C%20IIT%20Bombay!5e0!3m2!1sen!2sin!4v1735820605868!5m2!1sen!2sin&maptype=roadmap&zoom=15&disableDefaultUI=true&scrollwheel=false&fullscreenControl=false&zoomControl=false"
                            width="300"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Google Maps"
                            className="rounded-xl border border-white/10 opacity-45 hover:opacity-100 transition-all duration-300 ease-in-out">

                        </iframe>
                    </div>
                </div>



                <div className="mt-12 border-t border-white/10 pt-6">
                    <div className="text-center">
                        <p className="mt-4 text-sm text-slate-400 sm:order-first sm:mt-0">Made by Dinesh, Web Secretary, H3 Council 2024-25.
                        </p>
                        <p className="mt-4 text-sm text-slate-400 sm:order-first sm:mt-0">&copy;2025 HOSTEL 3, IIT Bombay. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
