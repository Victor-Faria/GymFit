

export default function Pricing() {
  const pricingPlans = [
    {
      title: "Basic Fit",
      description: "For beginners looking to get started on their fitness journey",
      price: "$29",
      features: [
        "Access to all gym equipment",
        "Free fitness assessment",
        "Locker room access",
      ],
      additionalFeatures: [
        { text: "Access to all locations", linkText: "Find nearest location", link: "#" },
        { text: "Weekly progress tracking" },
        { text: "Free water bottle" },
      ],
    },
    {
      title: "Pro Fit",
      description: "For fitness enthusiasts seeking advanced options",
      price: "$59",
      features: [
        "Access to all gym equipment",
        "Free fitness assessment and monthly follow-ups",
        "Locker room access with personal locker",
        "Free group fitness classes",
      ],
      additionalFeatures: [
        { text: "Exclusive member events", linkText: "Upcoming events", link: "#" },
        { text: "Access to VIP lounge" },
        { text: "Healthy snacks at the lounge" },
      ],
    },
    {
      title: "Elite Fit",
      description: "For professionals and serious fitness enthusiasts",
      price: "$99",
      features: [
        "Access to all gym equipment and personal training",
        "Free fitness assessment and weekly follow-ups",
        "Personalized workout and diet plans",
        "Access to all group classes and workshops",
        "Dedicated 24/7 support",
      ],
      additionalFeatures: [
        { text: "VIP access to all locations", linkText: "Find your gym", link: "#" },
        { text: "Exclusive one-on-one training sessions" },
        { text: "Access to spa and wellness services" },
      ],
    },
  ];
  return (
    <div className="flex flex-wrap justify-center gap-6 p-8 bg-primary dark:bg-gray-900 ">
      {pricingPlans.map((plan, index) => (
        <div
          key={index}
          className="w-full max-w-xs p-6 bg-white rounded-2xl shadow-md dark:bg-gray-800 hover:shadow-lg transition-shadow border-accent border-2  hover:scale-105  ">
          <div className="text-center ">
            <p className="text-3xl font-bold text-black dark:text-white mb-2">
              {plan.title}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">
              {plan.description}
            </p>
            <p className="text-4xl font-bold text-primary dark:text-primary-dark mb-1">
              {plan.price}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-300"></p>
          </div>

          <button className="w-full mt-6 py-2 px-4 bg-primary text-white  rounded-lg    transition-colors">
            Request demo
          </button>

          <ul className="mt-6 text-sm text-black dark:text-white space-y-3">
            {plan.features.map((feature, i) => (
              <li key={i} className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-primary"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M20.285 2.696l-11.999 12.286-4.572-4.622-1.428 1.451 6 6.077 13.429-13.779z" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          <hr className="my-4 border-gray-200 dark:border-gray-700" />

          <ul className="text-sm text-black dark:text-white space-y-3 ">
            {plan.additionalFeatures.map((additional, i) => (
              <li key={i} className="flex items-start space-x-2">
                <svg
                  className="w-4 h-4 text-green-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  <path d="M19 3h-2v18h2v-18zm-6 0h-2v18h2v-18zm-6 0h-2v18h2v-18z" />
                </svg>
                <span>
                  {additional.link ? (
                    <>
                      {additional.text}{" "}
                      <a
                        href={additional.link}
                        className="text-blue-500 font-semibold underline">
                        {additional.linkText}
                      </a>
                    </>
                  ) : (
                    additional.text
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
