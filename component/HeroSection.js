import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";
import { FaArrowRight } from "react-icons/fa";
import { faUnity } from "@fortawesome/free-brands-svg-icons";

function HeroSection() {
  return (
    <div id="home" className="hero  h-fit  ">
      <div className="textDiv pl-2 md:pl-0 ">
        <h1 className="text-[19vw] md:text-9xl  font-bold">
          WEBSITE
          <span
            className="text-light-background -mt-10  block  md:-mt-5  text-[15vw] md:text-9xl font-bold"
            style={{
              textShadow:
                "1px 1px 0 white, -1px -1px 0 white, -1px 1px 0 white, 1px -1px 0 white",
            }}
          >
            DESIGNER
          </span>
        </h1>

        <p className=" pl-2 w-[70%] ">
          Passionate about creating intuitive and engaging user experiences.
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
      <div className="twocard pt-5 md:pt-10 px-2 md:px-0  md:flex-row flex-col items-center flex w-full gap-4 md:gap-8 ">
        <div className=" relative h-36 w-full px-2 pt-2 group transition-all duration-300 ease-in-out   md:w-[30%] rounded-md bg-green-300">
          <FontAwesomeIcon
            icon={faCodepen}
            className="text-light-background transition-transform duration-300 ease-in-out  group-hover:scale-110 group-hover:rotate-6  "
            size="2x"
          />
          <div className="text-black   ">
            <p>DYNAMIC ANIMATION, MOTION DESIGN</p>
          </div>
          <div className="absolute bottom-2 right-2 p-2 border-white border cursor-pointer rounded-md  ">
            <FaArrowRight className=" text-black  group-hover:-rotate-45 transition-all ease-in-out " />
          </div>
        </div>
        <div className="relative h-44 md:h-36 px-2 pt-2 w-full md:w-[40%] rounded-md bg-red-300 group transition-all duration-300 ease-in-out">
          {/* Unity Icon with Hover Rotation */}
          <FontAwesomeIcon
            icon={faUnity}
            size="2x"
            className="text-light-background transition-transform duration-300 ease-in-out group-hover:rotate-[360deg]"
          />

          {/* Text Content */}
          <div className="text-black uppercase">
            <p>Elegant, fast, responsive, seamless, engaging, intuitive.</p>
          </div>

          {/* Arrow Button with Hover Animation */}
          <div className="absolute bottom-2 right-2 p-2 border-white border rounded-md cursor-pointer transition-all duration-300 ease-in-out">
            <FaArrowRight className="text-black group-hover:-rotate-45 transition-all ease-in-out duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
