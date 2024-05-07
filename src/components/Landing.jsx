import React from "react";
import { MdArrowOutward } from "react-icons/md";

function Landing() {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-2">
      <div className="textstructure  mt-52 px-20">
        {["we create", "eye-opening", "presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <div className="w-[9vw] mr-[0.8vw] h-[5.8vw] relative bottom-[0.6vw] bg-gray-400 rounded-md  "></div>
                )}
                <h1
                  className="uppercase text-[9vw] pt-[2vw] -mb-[1vw] leading-[5.5vw] "
                  style={{ fontFamily: "FoundersGrotesk, sans-serif" }}
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p
            className="text-md font-light tracking-tight leading-none"
            key={index}
          >
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-3">
          <div className="px-6 py-2 border-[2px] border-zinc-500 font-light text-xl uppercase rounded-full">
            start the project
          </div>
          <div className="w-[2vw] h-[2vw] flex items-center font-light text-[3vw] text-zinc-400 rounded-full border-[2px] border-zinc-500 ">
            <MdArrowOutward />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
