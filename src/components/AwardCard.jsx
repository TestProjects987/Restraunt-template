import React from "react";

const AwardCard = ({ imageUrl, awardName, year, index }) => {
  return (
    <div
      className={`p-11 flex flex-col justify-center items-center border border-customMediumGray border-opacity-45 ${
        index < 3 ? "border-r-0" : ""
      }`}
    >
      <img src={imageUrl} alt="" className="pb-6" />
      <span className="text-lg font-schibsted text-center w-max">
        {awardName} <br /> award-<b>{year}</b>
      </span>
    </div>
  );
};

export default AwardCard;
