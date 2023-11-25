import React from 'react';



const Gallery = () => {
  return (
    <div>
      <h1 className="text-center text-4xl py-6 my-10 md:mt-32 font-press-start text-[#58595b]" id="gallery">
        I like traveling & taking photos
      </h1>
      <div className="container mx-auto px-5 lg:px-32 lg:pt-24">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.britannica.com/96/196396-050-13758154/Chureito-Pagoda-Arakura-Sengen-Shrine-Mount-Fuji.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://i.pinimg.com/originals/d3/45/11/d3451114ab4e1d55ead624930bcff60c.jpg"
              />
            </div>
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_640.jpg"
              />
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://thumbs.dreamstime.com/b/idyllic-summer-landscape-clear-mountain-lake-alps-45054687.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://thumbs.dreamstime.com/b/landscape-around-mt-cook-aoraki-national-park-new-zealand-aoraki-mount-cook-highest-mountain-new-zealand-lies-97124548.jpg"
              />
            </div>
            <div className="w-1/2 p-1 md:p-2">
              <img
                alt="gallery"
                className="block h-full w-full rounded-lg object-cover object-center"
                src="https://images.unsplash.com/photo-1663885787034-6c157bd92f8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
