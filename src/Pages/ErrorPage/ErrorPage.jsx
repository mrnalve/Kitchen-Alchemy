import React from "react";
import { Link, useRouteError } from "react-router-dom";
import errorImg from "../../../public/error.png";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="pb-24 pt-10">
        <div className="container mx-auto">
          <h1 className="text-5xl font-bold text-center text-gray-800">
            Oops! Something went wrong.
          </h1>
          <div className="flex justify-center mt-5">
            <img className="w-32 h-32" src={errorImg} alt="" />
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600 text-center">
              <span className="sr-only">Error</span> {status || 404}
            </h2>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-xl font-bold mb-2">Error message:</h2>
                <p className="text-gray-700">{error?.message}</p>
              </div>
              <div className="px-4 py-3 sm:px-6 bg-gray-100">
                <button
                  type="button"
                  className="inline-flex items-center px-4 py-2 border border-transparent font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to={"/"}>Go to home</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ErrorPage;
