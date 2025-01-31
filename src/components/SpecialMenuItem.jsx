import React from "react";
import Stars from "./Stars";

export default function SpecialMenuItem({
  image,
  rating,
  title,
  originalPrice,
  discountedPrice,
}) {
  return (
    <div className="md:min-w-[320px] flex items-center flex-col mb-10 lg:mb-0 min-w-[240px]">
      <img src={image} alt={title} className="mb-6" />
      <div className="flex justify-center">
        <div className="bg-[#ECBA23] flex w-max rounded-l-md px-2.5 mb-5">
          <Stars color="white" />
        </div>
        <div className="bg-customDarkGray rounded-r-md h-9 flex items-center justify-center">
          <p className="text-lg px-2.5 text-white">{rating}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-customDarkGray text-2xl">{title}</p>
        <div>
          <span className="mr-2.5 text-2xl text-customRed line-through">
            ${originalPrice}
          </span>
          <span className="text-2xl text-cusDarkGray">${discountedPrice}</span>
        </div>
      </div>
    </div>
  );
}
