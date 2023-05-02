import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import favourite from "../../../public/heart.png";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ChefDetails = () => {
  const chefDetails = useLoaderData();
  const {
    banner_pic,
    name,
    description,
    years_of_experience,
    number_of_recipes,
    likes,
  } = chefDetails;

  const [isDisabled, setIsDisabled] = useState(false);
  const handleClick = () => {
    setIsDisabled(true);
    toast.success("Save to the favourite", {
        position: toast.POSITION.TOP_CENTER
      });
  };
  return (
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
            {!isDisabled ? (
              <button
                onClick={handleClick}
                className="btn btn-error text-white"
              >
                Favourite
              </button>
            ) : (
              <button className="btn btn-error text-white" disabled>
                Favourite
                <ToastContainer></ToastContainer>
              </button>
            )}
            {/* <img className="w-8" src={favourite} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefDetails;
