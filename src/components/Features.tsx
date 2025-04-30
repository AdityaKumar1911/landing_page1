export default function WhyAttendSection() {
  return (
    <section className=" container mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="overflow-hidden ">
        <div className="p-6 sm:p-10">
          <div className="flex items-center mb-6">
            <span className="text-orange-500 text-3xl mr-3">🔥</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black-900">Why Attend This Workshop?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-6">
                Step into the future of filmmaking where{" "}
                <span className="font-semibold">creativity meets AI magic</span>. In this 2-hour live session, learn
                What is AI and Generative AI, how to create stunning visuals, short ads, and storytelling videos using
                some <span className="font-semibold">free and easy-to-use AI tools</span> — even if you have{" "}
                <span className="font-semibold">no prior filmmaking experience</span>.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button className="bg-purple-600  text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Register Now
                </button>
                {/* <button className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 rounded-lg transition-colors duration-300">
                  Learn More
                </button> */}
              </div>
            </div>

            <div className="relative">
              <div className="relative h-64 sm:h-80 md:h-full w-full rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
"
                  alt="AI Workshop Visual"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-lg overflow-hidden border-4 border-white shadow-lg hidden sm:block">
                <img
                  src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="AI Tool Example"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center">
                <div className="bg-purple-500/10  p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">2-Hour Session</p>
                  <p className="text-sm text-gray-600">Compact & focused</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-500/10  p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Free AI Tools</p>
                  <p className="text-sm text-gray-600">No subscriptions needed</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-purple-500/10  p-3 rounded-full mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-purple-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold">Beginner Friendly</p>
                  <p className="text-sm text-gray-600">No experience required</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

