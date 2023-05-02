import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Recipe from "../Recipe/Recipe";
import Navigation from "../../Shared/Navigation/Navigation";
import Footer from "../../Shared/Footer/Footer";

const ChefDetails = () => {
  const [recipeData, setRecipeData] = useState([]);
  const chefDetails = useLoaderData();
  const {
    id,
    banner_pic,
    name,
    description,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chefDetails;

  // loading recipe data for each chef
  useEffect(() => {
    fetch(`http://localhost:5000/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => setRecipeData(data));
  }, []);

  return (
    <>
      <Navigation></Navigation>
      <div className="my-6">
        <div>
          <div className="card grid grid-cols-1 md:grid-cols-2 lg:card-side bg-base-100 shadow-xl">
            <figure className="">
              <img src={banner_pic} alt="banner" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p>{description}</p>
              <h4>Years fo experience: {years_of_experience}</h4>
              <h4>Number fo Recipe: {number_of_recipes}</h4>
              <h4>Likes: {likes}</h4>
              <div className="card-actions">
                {/* <img className="w-8" src={favourite} alt="" /> */}
              </div>
            </div>
          </div>
        </div>
        <div className="my-20">
          <h2 className="font-bold text-4xl text-yellow-500 text-center underline">
            Recipe list
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {recipeData.map((recipe) => (
              <Recipe key={recipe.id} recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ChefDetails;
