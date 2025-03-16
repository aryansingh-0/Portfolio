import HoverMouse from "../HoverMouse";
function MFooter() {
  return (
    <footer
      id="footer"
      className="md:hidden px-2 flex flex-col pb-2 gap-3
  "
    >
      <div className="card w-full h-[30vh] rounded-2xl relative group">
        {/* Centered Text (Hidden on Hover) */}
        {/* <div className="absolute inset-0 flex items-center justify-center text-xl font-semibold transition-opacity duration-300 group-hover:opacity-0">
    Click Here
  </div> */}

        {/* Hover Effect */}
        <HoverMouse />
      </div>

      <div className="card relative w-full rounded-2xl p-2  h-fit py-6 bg-slate-600">
        <div className="tbox h-fit pb-4 rounded-md w-full  ">
          <h2 className="text-[17vw] tracking-tighter leading-14  ">
            Stay <br /> Connected®
          </h2>
          <p className="text-orange-400 mt-1">aryan03aryansingh@gmail.com</p>
          <p className="mt-2 text-gray-300">
            Crafted with creativity and passion. Let’s{" "}
            <span className="underline text-blue-400">stay connected</span>,{" "}
            reach out anytime!
          </p>
        </div>
        <div className="copyright text-center mt-3">Copyright © Aryan 2025</div>
      </div>
    </footer>
  );
}
export default MFooter;
