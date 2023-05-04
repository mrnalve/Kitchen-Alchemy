import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);
  useEffect(() => {
    fetch("https://kitchen-alchemy-server-mrnalve.vercel.app/chefs")
      .then((res) => res.json())
      .then((data) => setChefs(data));
  }, []);
  return (
    <div className="my-20 bg-gray-100 p-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">Choose Your Chefs Here</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 mt-7">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default ChefSection;
