import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div className="my-20">
      <h2 className="font-bold text-4xl text-yellow-500 text-center underline">Choose your chefs here</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-7">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
