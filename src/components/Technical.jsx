export default function TechnicalsPage() {
    return (
        <div class="flex flex-col justify-center items-center py-20">
            <div className="text-center">
                <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                    Technical
                </h2>
            </div>
            <div className="flex flex-col md:flex-row  bg-black/25 backdrop-blur-xl rounded-3xl shadow-lg border border-white/10 p-6 md:p-8 mx-4 sm:mx-6 md:mx-16 my-6 max-w-7xl">
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
                    <img
                        src="https://res.cloudinary.com/dcqw5mziu/image/upload/v1736526204/2149126949_ebtzzv.jpg"
                        alt="tech"
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                </div>
                <div className="flex-1 text-left mt-6 md:mt-0 md:ml-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-white">Explore Techincal Activities
                    </h2>
                    <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                        Hostel 3 has always been home to some great tech enthusiasts, and as we move on, we pass this art to our juniors. This year, along with the regular workshops, we plan to have a competition (details for which would be available soon) to take this experience to the next level.
                    </p>
                    <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                        Hostel 3 has been very enthusiastic about winning this year's Tech Cup and we have pariticipated in all of the Tech GSs. In some of the competitions we have been the top team whereas in others we have tried our best. In The first GC, Jhatka GC we secured the second position. After 9 GCs this is how the points table for the tech cup looks like:
                    </p>

                </div>
            </div>
            <div className="flex flex-col-reverse md:flex-row bg-black/25 backdrop-blur-xl rounded-3xl shadow-lg border border-white/10 p-6 md:p-8 mx-4 sm:mx-6 md:mx-16 my-6 max-w-7xl">
                <div className="flex-1 text-left mt-6 md:mt-0 md:mr-8">
                    <h2 className="text-2xl md:text-4xl font-bold text-white">Standing in Tech-Gcs

                    </h2>
                    <p className="mt-4 text-gray-300 text-base md:text-lg leading-relaxed">
                        Hostel 3 has been very enthusiastic about winning this year's Tech Cup and we have pariticipated in all of the Tech GSs. In some of the competitions we have been the top team whereas in others we have tried our best. In The first GC, Jhatka GC we secured the second position. After 9 GCs this is how the points table for the tech cup looks like:
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden rounded-2xl">
                    <img
                        src="https://res.cloudinary.com/dcqw5mziu/image/upload/v1736526203/2150010130_fmbmcn.jpg"
                        alt="tech2"
                        className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                </div>
            </div>
          
        </div>
    )
}