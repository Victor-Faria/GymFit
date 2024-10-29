import img1 from "../assets/bodycombat.jpg";
import img2 from "../assets/FitDance.webp";
import img3 from "../assets/pilates.jpg";
import img4 from "../assets/spinning.jpg";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";
import { motion } from "framer-motion";

export default function HeroBtn() {
  const images: string[] = [img1, img2, img3, img4];  
  
  return (
    <div className="py-40 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn border-accent border-2">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Start Now!
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            🏋️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Your Progress Starts Now! 🏋️
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={image}
                    alt="gym images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <h2 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8 mt-4">Explore our Classes!</h2>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-between max-w-sm mx-auto">
              
             
              <div className="flex items-center justify-between">
                <span>
                  <a href="#" className="text-accent hover:text-primary dark:text-neutral-300 text-sm">
                    Body Combat
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span>
                  <a href="#" className="text-accent hover:text-primary dark:text-neutral-300 text-sm">
                    Fit Dance
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span>
                  <a href="#" className="text-accent hover:text-primary dark:text-neutral-300 text-sm">
                    Pilates
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span>
                  <a href="#" className="text-accent hover:text-primary dark:text-neutral-300 text-sm">
                    Spinnig
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span>
                  <a href="#" className="text-accent hover:text-primary dark:text-neutral-300 text-sm">
                    Pilates
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span>
                  <a href="#" className="text-accent hover:text-primary dark:text-neutral-300 text-sm">
                    Power Jump
                  </a>
                </span>
              </div>
              <div className="flex items-center justify-center">
                <span>
                  <a href="#" className="text-accent hover:text-primary dark:text-neutral-300 text-sm">
                    Climbing
                  </a>
                </span>
              </div>
              
              <div className="flex items-center justify-center">
                <span>
                  <a href="#" className="text-accent hover:text-primary dark:text-neutral-300 text-sm">
                    Personal Trainer
                  </a>
                </span>
              </div>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4">
            <button className=" text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md  w-28">
              Start Now!
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
