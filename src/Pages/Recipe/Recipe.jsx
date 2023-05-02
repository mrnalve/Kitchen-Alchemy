import React, { useState } from "react";
import favourite from "../../../public/heart.png";
import { toast, ToastContainer } from "react-toastify";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import Rating from "react-rating";

const Recipe = ({ recipe }) => {
  const { recipe_name, ingredients, cooking_method, rating } = recipe;
  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    setIsDisabled(true);
    toast.success("Save to the favourite", {
      position: toast.POSITION.TOP_CENTER,
    });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title text-2xl text-center font-bold">
          {recipe_name}
        </h2>
        <h3 className="text-xl font-medium text-slate-700">Ingredients: </h3>
        <ul style={{ listStyleType: "disc" }}>
          <li>
            <a href="">{ingredients[0]}</a>
          </li>
          <li>
            <a href="">{ingredients[2]}</a>
          </li>
          <li>
            <a href="">{ingredients[3]}</a>
          </li>
          <li>
            <a href="">{ingredients[4]}</a>
          </li>
          <li>
            <a href="">{ingredients[5] || ""}</a>
          </li>
        </ul>
        <h3>
          <span className="text-xl font-medium text-slate-700">
            Cooking method:
          </span>{" "}
          {cooking_method}
        </h3>
        <h3 className="flex items-center">
          <span className="text-xl font-medium text-slate-700 ">Rating: </span>
          <div className="flex items-center mt-1 ml-2">
            <>{rating} </>
            <>
              <Rating
                placeholderRating={rating}
                emptySymbol={
                  <FaRegStar className="text-yellow-500"></FaRegStar>
                }
                placeholderSymbol={
                  <FaStar className="text-yellow-500"></FaStar>
                }
                fullSymbol={<FaStar className="text-yellow-500"></FaStar>}
              />
            </>
          </div>
        </h3>
        <div className="card-actions justify-end">
          {!isDisabled ? (
            <button onClick={handleClick} className="btn btn-error text-white">
              Favourite
            </button>
          ) : (
            <button className="btn btn-error text-white" disabled>
              Favourite
              <ToastContainer></ToastContainer>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
