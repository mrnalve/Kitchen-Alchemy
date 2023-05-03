import React from "react";

function Testimonial() {
  return (
    <section className="bg-gray-100 py-12 my-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            People's Say Us
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Read what people's have to say about their experience with
            us.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="p-6">
                <blockquote className="text-lg font-medium text-gray-900">
                  <p>
                  "I was blown away by the chefs on this website. They created a custom menu that perfectly fit my event, and everything tasted incredible. The attention to detail and presentation were also top-notch. I couldn't have been happier with the service I received."
                  </p>
                </blockquote>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://i.ibb.co/984FmJG/client2.jpg"
                      alt="Chef 1"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      John Doe
                    </div>
                    <div className="text-sm text-gray-500">Head Chef</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="p-6">
                <blockquote className="text-lg font-medium text-gray-900">
                  <p>
                  "I had a fantastic experience with the chefs on this website. Their attention to detail and commitment to creating delicious dishes was impressive. The team was also incredibly friendly and easy to work with. I would highly recommend this website to anyone looking for top-notch chefs!"
                  </p>
                </blockquote>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://i.ibb.co/Xb43DRm/client3.jpg"
                      alt="Chef 2"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Doe
                    </div>
                    <div className="text-sm text-gray-500">Sous Chef</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow divide-y divide-gray-200">
              <div className="p-6">
                <blockquote className="text-lg font-medium text-gray-900">
                  <p>
                  "The chefs on this website are truly talented. They created a unique and delicious menu for my dinner party that my guests are still talking about. The team was professional, friendly, and a pleasure to work with. I highly recommend them for any event!"
                  </p>
                </blockquote>
                <div className="mt-6 flex">
                  <div className="flex-shrink-0">
                    <img
                      className="h-12 w-12 rounded-full"
                      src="https://i.ibb.co/mCpCSsC/client1.jpg"
                      alt="Chef 2"
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      Jane Doe
                    </div>
                    <div className="text-sm text-gray-500">Sous Chef</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial
