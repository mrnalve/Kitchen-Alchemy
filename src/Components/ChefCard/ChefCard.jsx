import React from "react";
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const ChefCard = ({ chef }) => {
    const {id, picture, name, years_of_experience, number_of_recipes, likes} = chef
  return (
    <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl m-3">
      <figure className="w-full">
        <LazyLoadImage
         className="w-full h-full"
          src={picture}
          alt="Shoes"
          effect="blur"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-[16px] font-serif">Years of experience: {years_of_experience}</p>
        <p className="text-[16px] font-serif">Number of recipes: {number_of_recipes}</p>
        <p className="text-[16px] font-serif">Likes: {likes}</p>
        <div className="card-actions justify-end">
          <Link to={`/chefs/${id}`}><button className="btn btn-primary">View Recipe</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
