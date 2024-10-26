import React from "react";

const CooperationBox = () => {
  const cooperationItems = [
    " ",
    " ",
    " ",
    " "
  ];

  return (
    <div className="mt-16">
      <p className="text-base font-normal text-dark-dark">in cooperation with</p>
      <div className="flex flex-wrap gap-6 mt-4">
        {cooperationItems.map((item, index) => (
          <div key={index} className="flex items-center justify-center p-4 bg-dark-main text-white rounded-lg w-[295px] h-[200px]">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CooperationBox;
