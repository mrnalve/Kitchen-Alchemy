import React from "react";

const ChefCard = ({ chef }) => {
    const {picture, name, years_of_experience, number_of_recipes, likes} = chef
  return (
    <div className="card card-compact w-96 h-[500px] bg-base-100 shadow-xl m-3">
      <figure className="w-full">
        <img
         className="w-full h-full"
          src={picture}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-2xl">{name}</h2>
        <p className="text-[16px] font-serif">Years of experience: {years_of_experience}</p>
        <p className="text-[16px] font-serif">Number of recipes: {number_of_recipes}</p>
        <p className="text-[16px] font-serif">Likes: {likes}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">View Recipe</button>
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
