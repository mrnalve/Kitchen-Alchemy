import React, { useEffect, useState } from "react";
import ChefCard from "../ChefCard/ChefCard";

const ChefSection = () => {
  const [chefs, setChefs] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))
    },[])
  return <div className="grid grid-cols-1 md:grid-cols-3">
    {
        chefs.map(chef => <ChefCard key={chef.id} chef={chef}></ChefCard>)
    }
  </div>;
};

export default ChefSection;
