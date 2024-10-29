import gymapp from "../assets/Gymapp.png";
import applestorelogo from "../assets/applestorelogo.png";
import googleplaylogo from "../assets/googleplaylogo.png";

export default function GymApp() {
  return (
    <div className="flex flex-col lg:flex-row  p-8 space-y-8 lg:space-y-0 lg:space-x-8">
      <div className="flex flex-col lg:w-1/2 space-y-4">
        <h1 className="text-3xl font-bold text-white ">
          Download our GymApp for the
          <br />
          <span className="text-accent">best experience</span>
        </h1>
        <h2 className="text-xl text-white">Your fitness journey starts here</h2>
        <ul className="space-y-2 text-white">
          <li className="flex items-center">
            <span className="material-icons text-white mr-2"> * </span>
            Check out your workouts
          </li>
          <li className="flex items-center">
            <span className="material-icons text-white mr-2"> * </span>
            Track your progress
          </li>
          <li className="flex items-center">
            <span className="material-icons text-white mr-2"> * </span>
            Set your goals
          </li>
        </ul>
        <p className="text-white">All in one place. </p>
        <br />
        <p className="text-white">Download now at:</p>
        <div className="flex space-x-4 mt-4">
          <button className="flex items-center  text-green-600 px-4 py-2 rounded shadow hover:bg-gray-200 transition">
            <img
              src={googleplaylogo}
              alt="Google Play"
              className="w-8 h-5 mr-2"
            />
            Google Play
          </button>
          <button className="flex items-center text-green-600 px-4 py-2 rounded shadow hover:bg-gray-200 transition">
            <img
              src= {applestorelogo}             alt="Apple Store"
              className="w-5 h-5 mr-2"
            />
            Apple Store
          </button>
        </div>
      </div>

      {/* Right Side: Image with Half-Shaped Background */}
      <div className="relative lg:w-1/2 flex justify-center items-center lg:justify-end">
        <div className="absolute inset-0 bg-white rounded-l-full shadow-lg lg:block hidden"></div>
        <img
          src={gymapp}
          alt="Fitness App on Phone"
          className="relative z-10 w-full max-w-xs h-auto"
        />
      </div>
    </div>
  );
}
