

export default function CTA() {
  return (
    <div className="bg-[url('./assets/gymfit8.jpg')] bg-cover bg-center py-18 px-6 sm:px-8 lg:py-16 lg:px-10 my-12 flex justify-center items-center">
      <div className="text-center w-full max-w-lg mx-auto">
        <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl mb-6">
          Find the <span className="text-accent">nearest gym!</span>
        </h2>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Type in your location"
            className="w-full px-5 py-3 text-base font-medium text-gray-700 placeholder-gray-400 bg-gray-100 dark:bg-gray-900 dark:text-white border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-black focus:ring-offset-gray-800 transition-all"
          />
          <button
            type="button"
            className="mt-4 w-full py-3 text-base font-medium text-white   rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
