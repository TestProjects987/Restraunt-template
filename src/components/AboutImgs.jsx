import React from "react";

const AboutImgs = (Props) => {
  return (
    <div className="flex flex-col px-4 group">
      <div className="overflow-hidden rounded-md">
        <img
          src={Props.img}
          alt=""
          className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
        />
      </div>
      <div className="p-9 flex justify-center items-center flex-col">
        <p className="text-2xl text-customDarkGray">{Props.title}</p>
        <p className="text-md text-center text-customDarkGray opacity-70 font-schibsted">
          {Props.text}
        </p>
      </div>
    </div>
  );
};

export default AboutImgs;
