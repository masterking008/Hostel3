export default function CulturalsPage() {
    return (
        <div class="flex flex-col justify-center items-center py-20">
            <div className="text-center">
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                    Culturals
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
                    <h2 className="text-2xl md:text-4xl font-bold text-white">Explore Hostel 3 culturals
                    </h2>
                    <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                        Ever dreamt of doing a moonwalk like Michel Jackson or writing a story better than Romeo Juliet or playing gabbar better than gabbar himself. Well that's just sort of a fraction of what we do at Hostel3, the content is much more promising than the cover. Hostel 3 is the most famous for its excellence and achievements in the field of Sports, but people often forget that the Vitruvians is also home of the most talented students in the cultural field as well. Our students take active part in all the Cultural activities of the institute and the Cult Council of our hostel organise the most interesting events.
                    </p>
                    <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                        As we say, its not just about performing, its about winning. Its about learning and evolving. We won the Music Arcade GC in 2020, stood 2nd in Goonj 2019, 2nd in Gyrations 2018, and 2nd in MDGC 2018. Yes,the last year was a bit rough with us but we are determined to bounce back and stand up straight with all might. Inviting you all to a phenomenal journey ahead with us
                    </p>
                </div>
            </div>
           
            <div className="relative bg-black/25 backdrop-blur-xl rounded-2xl shadow-xl p-8 mx-4 sm:mx-6 md:mx-16 my-6 max-w-7xl">
                <h2 className="text-center text-3xl font-bold text-white mb-4">Glory and Achievement in GCs</h2>
                <p className="m-4 text-white text-center md:text-lg leading-relaxed">
                    Achievements(2023)
                </p>
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto text-white border border-white/10">
                        <thead>
                            <tr className="rounded-2xl border-b border-white/10">
                                <th className="px-6 py-4 text-left text-lg font-semibold border-r border-white/10">Award</th>
                                <th className="px-6 py-4 text-left text-lg font-semibold border-r border-white/10">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:opacity-80 transition-opacity duration-300 border-b border-white/10">
                                <td className="px-6 py-4 border-r border-white/10">Gold 🥇</td>
                                <td className="px-6 py-4 border-r border-white/10">Scrabble General Championship</td>
                            </tr>
                            <tr className="hover:opacity-80 transition-opacity duration-300 border-b border-white/10">
                                <td className="px-6 py-4 border-r border-white/10">Gold 🥇</td>
                                <td className="px-6 py-4 border-r border-white/10">Dry Medium Fine arts General Championship</td>
                            </tr>
                          
                            <tr className="hover:opacity-80 transition-opacity duration-300 border-b border-white/10">
                                <td className="px-6 py-4 border-r border-white/10">Bronze 🥉</td>
                                <td className="px-6 py-4 border-r border-white/10">Goonj General Championship</td>
                            </tr>
                            <tr className="hover:opacity-80 transition-opacity duration-300 border-b border-white/10">
                                <td className="px-6 py-4 border-r border-white/10">4th</td>
                                <td className="px-6 py-4 border-r border-white/10">Debate General Championship</td>
                            </tr>
                            <tr className="hover:opacity-80 transition-opacity duration-300 border-b border-white/10">
                                <td className="px-6 py-4 border-r border-white/10">5th</td>
                                <td className="px-6 py-4 border-r border-white/10">Standup General Championship</td>
                            </tr>
                            <tr className="hover:opacity-80 transition-opacity duration-300 border-b border-white/10">
                                <td className="px-6 py-4 border-r border-white/10">5th</td>
                                <td className="px-6 py-4 border-r border-white/10">General Quiz General Championship</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    )
}