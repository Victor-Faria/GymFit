"use client";

import { CardBody, CardContainer, CardItem } from './ui/3DCard';
import gymfit1 from "../assets/gymfit1.jpg";
import gymfit4 from "../assets/gymfit4.jpg";
import gymfit7 from "../assets/gymfit7.jpg";

const cardData = [
  {
    title: "Extreme dedication",
    description: "Give all you got for those extreme goals.",
    imageUrl: gymfit1,
  },
  {
    title: "Ready for all challenges",
    description: "We are well equipped to help you reach your next level.",
    imageUrl: gymfit4,
  },
  {
    title: "Next to you",
    description: "There is a GymFit next to every corner.",
    imageUrl: gymfit7,
  },
];

export default function Cards() {
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4 ">
      {cardData.map((card, index) => (
        <CardContainer key={index} className="inter-var">
          <CardBody className="max-w-sm relative group/card bg-white border-2 border-accent dark:hover:shadow-2xl rounded-xl p-6">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-neutral-600 dark:text-white"
            >
              {card.title}
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm mt-2 max-w-xs dark:text-neutral-300"
            >
              {card.description}
            </CardItem>
            <CardItem translateZ="100" className="mt-4">
              <img
                src={card.imageUrl}
                height="1000"
                width="1000"
                className="h-60 object-cover rounded-xl group-hover/card:shadow-xl"
                alt={card.title}
              />
            </CardItem>
          </CardBody>
        </CardContainer>
      ))}
    </div>
  );
}
