import React, { useState } from "react";

const Snowflake = ({ background }) => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomSize = () => {
    const size = `${Math.random() * 0.7}vw`;
    return {
      width: size,
      height: size,
    };
  };

  const size = randomSize();

  const randomPosition = () => {
    return `${random(0, 100)}vw`;
  };

  const randomAnimate = () => {
    const randomSpeed = random(8, 40);
    return `snowfall ${randomSpeed}s linear infinite`;
  };

  const offsetStart = () => {
    return `${Math.random() * 10}vw`;
  };

  const offsetEnd = () => {
    return `${Math.random() * 50}vw`;
  };

  const randomDelay = () => {
    return `${Math.random() + 2}s`;
  };

  return (
    <span
      style={{
        textAlign: "center",
        width: size.width,
        height: size.height,
        background,
        // background: "#d0f0ff",
        boxShadow: `4px 0px 20px 0px white, 2px 0px 15px -2px ${background},
          -4px 0px 20px 0px white, -2px 0px 15px -2px ${background}, 0px 4px 20px 0px white,
          0px 2px 15px -2px ${background}, 0px -4px 20px 0px white,
          0px -2px 15px -2px ${background}`,
        borderRadius: "50%",
        position: "absolute",
        top: "-5vh",
        left: randomPosition(),
        animation: randomAnimate(),
        animationDelay: randomDelay(),
      }}
    ></span>
  );
};

export default Snowflake;
