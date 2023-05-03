import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <div className="absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4">
        <MutatingDots
    height="100"
    width="100"
    color="#4fa94d"
    secondaryColor= '#4fa94d'
    radius='12.5'
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
    visible={true}
   />
    </div>
  }
  if (user) {
    return  children ;
  }
  return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

export default PrivateRoute;
