"use client";
// import SplineViewer from "./SplineViewer";
import HoverMouse from "./HoverMouse";
function Footer() {
  return (
    <footer
      id="footer"
      className=" z-40 hidden md:flex items-center justify-center text-white  pb-3   "
    >
      <div className="bg-light-background h-[25vmax] rounded-md overflow-hidden w-[97%]">
        <div className="textbox pt-5 flex w-full h-[80%]  items-center justify-evenly">
          {" "}
          <div className="tbox h-[96%] rounded-md w-[30%]  ">
            <h2 className="text-6xl tracking-tighter leading-12">
              Stay <br /> Connected®
            </h2>
            <p className="text-orange-400 mt-1">aryan03aryansingh@gmail.com</p>
            <p className="mt-2 text-gray-300">
              Crafted with creativity and passion. Let’s{" "}
              <span className="underline text-blue-400">stay connected</span>,{" "}
              reach out anytime!
            </p>
          </div>
          <div className="img h-[96%] rounded-md w-[30%] bg-light-background   ">
            <HoverMouse />
          </div>
        </div>
        <div className="copyright text-center mt-3">Copyright © Aryan 2025</div>
      </div>
    </footer>
  );
}

export default Footer;
