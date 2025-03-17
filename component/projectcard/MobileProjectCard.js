import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function MobileProjectCard({ project }) {
  return (
    <Link href={project.link} target="_blank" rel="noopener noreferrer">
      <div className="block    relative px-2 md:hidden">
        <div className="box absolute -bottom-1 right-2.5   ">
          <div className="circle h-[18vw] w-[18vw] flex items-center justify-center bottom-0 right-0 rounded-full  bg-slate-600">
            <FontAwesomeIcon className="rotate-45 text-5xl" icon={faArrowUp} />
          </div>
        </div>
        <div
          className="absolute overflow-hidden top-0 rounded-3xl h-[60%] bg-purple-500"
          style={{ width: "calc(100% - 1rem)" }}
        >
          <img
            src={project.imgUrl}
            className="
         w-full object-cover"
            alt=""
          />
        </div>
        <div
          className="text   h-[40%]   absolute bottom-0 left-3"
          style={{ width: "calc(75% - 1rem)" }}
        >
          <h1 className="text-3xl">{project.title}</h1>
          <p className="tracking-wider leading-4">{project.description}</p>
        </div>
        <img
          src="/svgs/mobile card.svg"
          className="w-full"
          alt="Mobile Project Card"
        />
      </div>
    </Link>
  );
}

export default MobileProjectCard;
