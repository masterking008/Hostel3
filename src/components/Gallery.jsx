import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [collageIndex, setCollageIndex] = useState(0);

  const API_KEY = "AIzaSyC1lTT_RGPic5Br-cJU0FVrV3LwnS4pQTE";
  const SHEET_ID = "18e_LWabKDVk9TUjb_Y3rhUzZn7KKenpT3HuEZTfjETw";
  const SHEET_NAME = "Gallery";

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;
      try {
        const response = await fetch(url);
        const result = await response.json();
        const rows = result.values.slice(1); // Exclude header row
        const formattedAlbums = rows.reduce((acc, row) => {
          const [albumTitle, image, description] = row;
          if (!acc[albumTitle]) {
            acc[albumTitle] = { title: albumTitle, images: [] };
          }
          acc[albumTitle].images.push({ image, description });
          return acc;
        }, {});
        setAlbums(Object.values(formattedAlbums));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (albums.length > 0) {
      const interval = setInterval(() => {
        setCollageIndex((prevIndex) => (prevIndex + 1) % 4); // Rotate every 4 seconds
      }, 4000);

      return () => clearInterval(interval);
    }
  }, [albums]);

  const openAlbum = (album) => {
    setActiveAlbum(album);
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % activeAlbum.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + activeAlbum.images.length) % activeAlbum.images.length
    );
  };

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const generateCollage = (images) => {
    const collageImages = images.slice(collageIndex, collageIndex + 4);
    if (collageImages.length < 4) {
      collageImages.push(...images.slice(0, 4 - collageImages.length));
    }
    return (
      <div className="grid grid-cols-2 grid-rows-2 w-80 h-80 rounded-2xl overflow-hidden m-2 transition-transform duration-1000 ease-in-out">
        {collageImages.map((img, index) => (
          <div className="overflow-hidden border border-white/10 " key={index}>
            <img
              src={img.image}
              alt="Collage"
              className="w-full h-full object-cover transform transition-transform duration-300 ease-in-out hover:scale-110 "
            />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="py-20">
        <div className="text-center">
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
            Gallery
          </h2>
        </div>
        {isLoading ? (
          <div className="flex justify-center items-center py-10">
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-slate-100"></div>
          </div>
        ) : activeAlbum ? (
          <div className="bg-black/25 backdrop-blur-3xl rounded-3xl p-5 sm:p-10 m-5 sm:m-10 border border-white/10 shadow-lg">
            <button
              className="text-gray-50 text-xl font-medium"
              onClick={() => setActiveAlbum(null)}
            >
              ← Back to Albums
            </button>
            <h2 className="text-center text-3xl font-bold text-slate-100 m-6 sm:mb-4 sm:mt-0">
              {activeAlbum.title}
            </h2>
            <div className="flex justify-center items-center flex-wrap">
              {activeAlbum.images.map((img, index) => (
                <div
                  className="overflow-hidden relative max-w-none group block"
                  key={index}
                  onClick={() => openModal(index)}
                >
                  <img
                    src={img.image}
                    alt={img.description}
                    loading="lazy"
                    className="w-80 h-80 object-cover rounded-2xl m-2  border border-white/10 group-hover:brightness-[75%]"
                  />
                  <div className="text-center max-w-[90%] w-max items-center justify-center flex duration-100 ease-out opacity-0 left-1/2 translate-x-[-50%] bottom-2 px-3 py-2 z-10 font-medium text-xs uppercase bg-black/25 backdrop-blur-xl rounded-2xl text-white absolute translate-y-2 group-hover:opacity-100 group-hover:-translate-y-2">
                    {img.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="gallery-container w-full overflow-hidden p-10">
            <div className="flex justify-center items-center flex-wrap">
              {albums.map((album, index) => (
                <div
                  key={index}
                  className="cursor-pointer  transition ease-in-out duration-150 border border-white/10 bg-black/25 backdrop-blur-3xl rounded-3xl p-1 m-4"
                  onClick={() => openAlbum(album)}
                >
                  {generateCollage(album.images)}
                  <h3 className="text-center text-slate-100 text-lg font-semibold m-2">
                    {album.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black/25 backdrop-blur-lg z-50 transition-opacity duration-200 ease-in-out"
          onClick={closeModal}
        >
          <div
            className="max-w-4xl rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full  min-w-0 md:min-w-[600px]  rounded-2xl p-2 bg-white/10 backdrop-blur-3xl border border-white/10">
              <img
                src={activeAlbum.images[currentImageIndex].image}
                alt="Large view"
                className="w-full rounded-xl border border-white/10"
              />
            </div>
            <button
              className="absolute top-10 right-10 text-white text-2xl border border-white/10 px-4 py-3 rounded-3xl bg-white/10 backdrop-blur-3xl"
              onClick={closeModal}
            >
              X
            </button>
            <button
              className="absolute top-1/2 left-5 transform -translate-y-1/2 text-white text-2xl border border-white/10 px-4 py-3 rounded-3xl bg-white/10 backdrop-blur-3xl"
              onClick={prevImage}
            >
              ←
            </button>
            <button
              className="absolute top-1/2 right-5 transform -translate-y-1/2 text-white text-2xl border border-white/10 px-4 py-3 rounded-3xl bg-white/10 backdrop-blur-3xl"
              onClick={nextImage}
            >
              →
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
