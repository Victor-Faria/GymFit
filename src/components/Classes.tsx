import React, { useState } from 'react';
import pilatesimg from '../assets/pilates.jpg';
import yogaimg from '../assets/yoga.jpg';
import spinningimg from '../assets/spinning.jpg';
import fitdanceimg from '../assets/FitDance.webp';
import fitcrossimg from '../assets/FitCross.webp';
import bodycombatimg from '../assets/bodycombat.jpg';

interface ClassCardProps {
  image: string;
  title: string;
  duration: string;
  intensity: string;
  description: string;
}

const ClassCard: React.FC<ClassCardProps> = ({
  image,
  title,
  duration,
  intensity,
  description,
}) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md transition border-2 border-black hover:border-accent  items-center w-80">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <h3 className="mt-4 text-xl font-bold text-gray-900">{title}</h3>
      <div className="mt-4 p-4 rounded-lg text-accent">
        <ul className="space-y-3">
          <li>
            <span>Duration:</span>
            <span className="ml-2 text-gray-800">{duration}</span>
          </li>
          <li>
            <span>Intensity:</span>
            <span className="ml-2 text-gray-800">{intensity}</span>
          </li>
        </ul>
        <hr className="my-4 border-gray-300" />
        <p className="text-gray-700">{description}</p>
        <button className="mt-4 w-full py-2 bg-black text-white font-semibold rounded-lg  transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default function Classes() {
  const [showMore, setShowMore] = useState(false);

  const classCards = [
    {
      image: fitdanceimg,
      title: 'FITDANCE',
      duration: '45/60 min',
      intensity: 'High',
      description: 'Master all the moves with Smart Fit\'s dance classes led by FitDance licensed instructors.',
    },
    {
      image: bodycombatimg,
      title: 'BODY COMBAT',
      duration: '45/60 min',
      intensity: 'High',
      description: 'Dynamic classes that combine martial arts with cardio for an energizing experience.',
    },
    {
      image: fitcrossimg,
      title: 'FITCROSS',
      duration: '45/60 min',
      intensity: 'Medium',
      description: 'Functional training that uses body weight and equipment to build strength and endurance.',
    },
    {
      image: yogaimg,
      title: 'YOGA',
      duration: '60 min',
      intensity: 'Low',
      description: 'Calm your mind and body with our yoga sessions designed for all skill levels.',
    },
    {
      image: spinningimg,
      title: 'SPINNING',
      duration: '45 min',
      intensity: 'High',
      description: 'High-energy cycling classes that boost endurance and burn calories.',
    },
    {
      image: pilatesimg,
      title: 'PILATES',
      duration: '50 min',
      intensity: 'Medium',
      description: 'Enhance your flexibility and strength with our guided Pilates sessions.',
    },
  ];

  return (
    <div className="flex flex-col p-12 bg-[url('./assets/gymfit6.jpg')] bg-cover bg-center">
      <h2 className="text-white text-4xl mb-4 text-center uppercase font-bold">Check out our Classes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {classCards.slice(0, 3).map((card, index) => (
          <ClassCard
            key={index}
            image={card.image}
            title={card.title}
            duration={card.duration}
            intensity={card.intensity}
            description={card.description}
          />
        ))}

        {showMore &&
          classCards.slice(3).map((card, index) => (
            <div key={index + 3} className="transition-opacity duration-500 opacity-0 animate-fade-in">
              <ClassCard
                image={card.image}
                title={card.title}
                duration={card.duration}
                intensity={card.intensity}
                description={card.description}
              />
            </div>
          ))}
      </div>

      <div className="flex justify-center mt-8">
        <button
          onClick={() => setShowMore(!showMore)}
          className="py-2 px-6 bg-black text-white font-semibold rounded-lg  transition">
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </div>
  );
}
