import React from "react";

const Events = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="p-6 md:p-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8">
          Upcoming Events
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <img
              src="https://i.ibb.co/99Khp8j/events-Item1.jpg"
              alt="event"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-bold mb-2">
                Cooking Class with Chef John
              </h2>
              <p className="text-gray-700 mb-4">
                Join Chef John for a hands-on cooking class where you will learn
                how to make a delicious Italian meal.
              </p>
              <p className="text-gray-500 text-sm">Date: August 15th, 2022</p>
              <p className="text-gray-500 text-sm">Time: 3:00pm - 5:00pm EST</p>
              <p className="text-gray-500 text-sm">
                Location: 123 Main St, New York, NY
              </p>
            </div>
          </div>
          <div className="bg-white rounded-md overflow-hidden shadow-md">
            <img
              src="https://i.ibb.co/7nrmJ7q/events-Item2.jpg"
              alt="event"
              className="w-full h-40 object-cover"
            />
            <div className="p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-bold mb-2">
                Sushi Making Class with Chef Jane
              </h2>
              <p className="text-gray-700 mb-4">
                Learn how to make delicious sushi rolls with Chef Jane in this
                hands-on class.
              </p>
              <p className="text-gray-500 text-sm">Date: August 20th, 2022</p>
              <p className="text-gray-500 text-sm">Time: 2:00pm - 4:00pm EST</p>
              <p className="text-gray-500 text-sm">
                Location: 456 Main St, New York, NY
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
