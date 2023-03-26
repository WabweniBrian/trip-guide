import React from "react";

const Banner = ({ banner, title }) => {
  return (
    <div
      className="h-[90vh] flex-align-center justify-center sm:justify-start px-[3%] md:px-[6%]"
      style={{
        background: `url('${banner}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="p-4 rounded-lg bg-black/20 backdrop-blur-sm max-w-[400px] w-full 2xl:max-w-[800px]">
        <h1 className="text-5xl 2xl:text-8xl font-bold !leading-[4.5rem] 2xl:!leading-[7rem] text-white capitalize md:text-6xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Banner;
