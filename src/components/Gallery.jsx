import photo from "../assets/group.jpg"

const Gallery = () => {


  return (
    <>
      <div className="bg-slate-900 py-16 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
              Gallery
            </h2>
          </div>
        </div>
        <div className="img-container flex-col justify-items-center	">


         <img className="m-3 rounded-lg w-10/12"src={photo} alt="group"  />
        
        </div>
      </div>
    </>
  );
};

export default Gallery;
