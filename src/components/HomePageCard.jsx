import React from "react";

const HomePageCard = ({ title, img, link }) => {
  return (
    <div className="max-h-[420px] flex flex-col bg-white rounded-xl hover:scale-105 m-3">
      <div className="font-semibold text-[1.2rem] ml-4 mt-4">{title}</div>

      <div className="max-h-[300px] m-4">
        <img className="h-[100%] rounded-lg w-[100%] object-cover" src={img} alt="" />
      </div>

      <div className="pb-5 text-xs xl:text-sm text-blue-600 ml-4">{link}</div>
    </div>
  );
};

export default HomePageCard;
