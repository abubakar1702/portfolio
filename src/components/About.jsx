import React from "react";
import david from "../assets/david.png"

const About = () => {
  return (
    <div className="flex flex-col my-16 lg:flex-row w-full justify-center h-auto items-center mx-auto p-4 lg:p-8 rounded-md">
      <div className="w-full lg:w-[50%] h-max flex flex-col justify-center my-6">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-cursive2 text-center text-[#242424]">
          Hi, I am <span className="text-sky-600">Akash</span>
        </h1>
        <p className="text-[#5d5d5d] p-2 text-xs md:text-2xl lg:text-4xl font-cursive3 text-center">
          Software Engineer
        </p>
        <p className="text-[#3f3f3f] p-4 text-center">
          "Coder by day, pixel poet by night—Akash is the wizard behind the
          screen. Armed with coffee and a keyboard, they turn ideas into pixels
          and bugs into belly laughs. Welcome to the digital playground where
          Akash makes the web a little wittier, one line of code at a time."
        </p>
      </div>
      <div className="w-full lg:w-[50%] flex justify-center">
        <img
          src= {david}
          className="h-auto max-w-full rounded-lg shadow-none transition-shadow duration-300 ease-in-out hover:shadow-lg hover:shadow-black/30"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
