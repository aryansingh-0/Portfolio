import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function MobileProjectCard({ project }) {
  return (
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
      <div className="block  group  relative px-2 md:hidden">
        <div className="box absolute -bottom-1 right-2.5   ">
          <div className="circle h-[18vw] w-[18vw] flex items-center justify-center bottom-0 right-0 rounded-full  bg-red-300">
            <FontAwesomeIcon
              className="rotate-45 text-5xl text-black group-hover:rotate-90 transition-all duration-75 ease-in-out"
              icon={faArrowUp}
            />
          </div>
        </div>
        <div
          className="absolute overflow-hidden top-0 rounded-t-3xl  h-[60%]  "
          style={{ width: "calc(100% - 1rem)" }}
        >
          <img
            src={project.imgUrl}
            className=" 
         w-full opacity-90 object-cover"
            alt=""
          />
        </div>
        <div
          className="text pl-1  text-black h-[40%]   absolute bottom-0 left-3"
          style={{ width: "calc(75% - 1rem)" }}
        >
          <h1 className="text-4xl  pt-1 font-bold  ">{project.title}</h1>
          <p className="tracking-wider   leading-4">{project.description}</p>
        </div>
        <img
          src="/svgs/GreenCard.svg"
          className="w-full"
          alt="Mobile Project Card"
        />
      </div>
    </Link>
  );
}

export default MobileProjectCard;
