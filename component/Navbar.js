import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";
function Navbar() {
  return (
    <div className="w-full hidden  h-14 px-0.5  sticky top-0 z-50  md:flex items-center justify-center text-text">
      <div className="bg-light-background px-2 py-2 flex items-center justify-evenly rounded-md">
        <Link className="px-2 pr-4 " href="#home">
          Home
        </Link>
        <Link className="px-2 pr-4" href="#project">
          Project
        </Link>
        {/* <Link className="px-2 " href="#">
          <RxHamburgerMenu />
        </Link> */}
      </div>
    </div>
  );
}

export default Navbar;
