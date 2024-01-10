import Link from "next/link";
import DropdownMenu from "./DropdownMenu";

const Navbar = () => {
  return (
    <header className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="flex items-center w-full md:2/3 ">
        <Link href={"/"} className="font-black text-tertiary-dark">
          pti.
        </Link>

        <ul className="flex items-center ml-5"></ul>
      </div>

      <div>
        <DropdownMenu />
      </div>
    </header>
  );
};

export default Navbar;
