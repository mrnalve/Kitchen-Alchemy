import React from "react";
import banner1 from '../../../public/banner1.jpg'
import banner2 from '../../../public/banner2.jpg'
import banner3 from '../../../public/banner3.jpg'
import banner4 from '../../../public/banner4.jpg'
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px]">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src={banner1}
          className="w-full"
        />
        <div className="absolute left-16 top-[50%] -translate-y-[50%]">
        <h2 className='text-5xl font-bold text-white font-mono pl-6'>Welcome to Kitchen-Alchemy <br /> <span className='text-pink-600'>Find Your Recipe Here</span></h2>
        <p className="text-white text-xl font-thin pl-6 mt-3">Franchise chefs are culinary professionals with expertise in managing restaurant franchises. <br /> They possess business and  finance knowledge, managerial skills, <br /> and a passion for food and customer satisfaction, crucial to the success of the franchise.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src={banner2}
          className="w-full"
        />
        <div className="absolute left-16 top-[50%] -translate-y-[50%]">
        <h2 className='text-5xl font-bold text-white font-mono pl-6'>Welcome to Kitchen-Alchemy <br /> <span className='text-pink-600'>Find Your Recipe Here</span></h2>
        <p className="text-yellow-50 font-medium text-xl pl-6 mt-3">Franchise chefs are culinary professionals with expertise in managing restaurant franchises. <br /> They possess business and  finance knowledge, managerial skills, <br /> and a passion for food and customer satisfaction, crucial to the success of the franchise.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src={banner3}
          className="w-full"
        />
        <div className="absolute left-16 top-[50%] -translate-y-[50%]">
        <h2 className='text-5xl font-bold text-white font-mono pl-6'>Welcome to Kitchen-Alchemy <br /> <span className='text-pink-600'>Find Your Recipe Here</span></h2>
        <p className="text-white text-xl font-thin pl-6 mt-3">Franchise chefs are culinary professionals with expertise in managing restaurant franchises. <br /> They possess business and  finance knowledge, managerial skills, <br /> and a passion for food and customer satisfaction, crucial to the success of the franchise.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img
          src={banner4}
          className="w-full"
        />
        <div className="absolute left-16 top-[50%] -translate-y-[50%]">
        <h2 className='text-5xl font-bold text-white font-mono pl-6'>Welcome to Kitchen-Alchemy <br /> <span className='text-pink-600'>Find Your Recipe Here</span></h2>
        <p className="text-white text-xl font-thin pl-6 mt-3">Franchise chefs are culinary professionals with expertise in managing restaurant franchises. <br /> They possess business and  finance knowledge, managerial skills, <br /> and a passion for food and customer satisfaction, crucial to the success of the franchise.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
