import React, { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { MutatingDots } from "react-loader-spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="h-[550px] relative">
        <div className="absolute left-[50%] top-[50%] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <MutatingDots
            height="100"
            width="100"
            color="#4fa94d"
            secondaryColor="#4fa94d"
            radius="12.5"
            ariaLabel="mutating-dots-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
        </div>
      </div>
    );
  }
  if (user) {
    return <div className="">{children}</div>;
  }
  return <Navigate state={{ from: location }} to={"/login"}></Navigate>;
};

export default PrivateRoute;
