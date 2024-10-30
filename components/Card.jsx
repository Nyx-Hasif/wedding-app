import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import styles from "./Card.module.css"; // Assuming you're using this for CSS modules

const Card = () => {
  const cardImages = [assets.card[0], assets.card[1], assets.card[5]]; // Make sure the indexes are correct

  return (
    <div className="flex flex-col justify-center items-center border border-black py-12  w-full">
      {/* parent */}
      <div className="flex sm:flex-row flex-col border border-red-600 w-[90%] h-[100%] sm:h-[80%] gap-4">
        {/* Create a card for each image */}
        {cardImages.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} border border-black min-w-[33.33%] h-full relative group`}
          >
            <Image
              src={item}
              alt={`card-${index + 1}`} // Adjust alt text dynamically
              className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
            <div className={styles["card-content"]}>
              <h2 className={styles["card-title"]}>
                Something Awesome {index + 1}
              </h2>
              <p className={styles["card-body"]}>
                Lorem ipsumi dolor sit amet, consectetur adipisicing elit.
                Optio, culpa.
              </p>
              <a href="#" className={styles.button}>
                Learn More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
