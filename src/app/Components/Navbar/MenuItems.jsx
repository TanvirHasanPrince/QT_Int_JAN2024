import DownArrowIcon from "../icons/DownArrowIcon";

const MenuItems = () => {
  return (
    <>
      <div className="border-solid border-gray-400 border-[1px] px-5 py-2 rounded cursor-pointer font-bold flex gap-2 ">
        Options <DownArrowIcon />
      </div>{" "}
    </>
  );
};

export default MenuItems;
