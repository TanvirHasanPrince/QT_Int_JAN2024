import DropdownMenu from "./DropdownMenu";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";

const Navbar = () => {
  return (
    <header className=" pt-5 mx-2 flex items-center justify-between gap-2">
      <div className="flex items-center  md:w-1/3 lg:w-1/3 ">
        <h3 className="font-black md:text-2xl lg:text-4xl text-tertiary-dark">
          pti.
        </h3>
      </div>

      <div className="flex md:grow lg:grow justify-start items-center gap-2">
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              placeholder="Search Audiobook"
              className="pl-6 pr-2 border border-gray-300 p-2 rounded-full sm:pl-8 sm:p-2 sm:rounded-2xl focus:outline-none focus:ring focus:border-orange-300 w-full"
            />
            <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none">
              <AiOutlineSearch className="text-orange-500" />
            </div>
          </div>
        </div>

        <div>
          <DropdownMenu />
        </div>
      </div>

      <div>
        <FaUserCircle className="cursor-pointer text-orange-500 hidden md:block lg:block text-4xl mr-10" />
      </div>
    </header>
  );
};

export default Navbar;
