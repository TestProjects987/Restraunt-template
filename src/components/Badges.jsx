const Badges = ({ text1, text2, icon: Icon }) => {
  return (
    <div className="bg-white p-4 flex items-center md:justify-center px-[15px]">
      <div
        className="icon w-[100px] h-[100px] flex items-center justify-center rounded-full shadow-custom-blue mr-[25px] bg-white"
        aria-hidden="true"
      >
        {Icon ? (
          <Icon className="w-[34px] h-[34px] font-normal italic text-customDarkGray" />
        ) : (
          "No Icon"
        )}
      </div>
      <div>
        <p className="text-customDarkGray text-[26px] leading-[38px]">
          {text1}
        </p>
        <p className="lg:text-[18px] leading-[22px] font-schibsted opacity-50 font-medium md:text-base">
          {text2}
        </p>
      </div>
    </div>
  );
};
export default Badges;
