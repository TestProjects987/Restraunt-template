import React from "react";
import SectionTitle from "./SectionTitle"; // Assuming you have a SectionTitle component
import AwardCard from "./AwardCard"; // Import the new AwardCard component

const AwardsSection = () => {
  const awards = [
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-about-award-01.jpg",
      awardName: "Restraunt Choice",
      year: "2017",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-about-award-02.jpg",
      awardName: "Luxury Restraunt ",
      year: "2019",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-about-award-03.jpg",
      awardName: "Britist Best Kebab",
      year: "2020",
    },
    {
      imageUrl:
        "https://craftohtml.themezaa.com/images/demo-restaurant-about-award-04.jpg",
      awardName: "Good Fod Taste Award",
      year: "2021",
    },
  ];

  return (
    <section className="py-24 mx-container">
      <SectionTitle subtitle={"Awards and honours"} title={"Achievements"} />

      <div className="grid grid-cols-4">
        {awards.map((award, index) => (
          <AwardCard
            key={index} // React's key prop for list rendering
            index={index} // Pass index as a separate prop
            imageUrl={award.imageUrl}
            awardName={award.awardName}
            year={award.year}
          />
        ))}
      </div>
    </section>
  );
};

export default AwardsSection;
