// Heading.tsx
import { FaPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { SlOptionsVertical } from "react-icons/sl";
import { FaClock } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

type HeadingProps = {
  onAddCategoryClick: () => void; // Prop for the add category callback
};

export default function Heading({ onAddCategoryClick }: HeadingProps) {
  return (
    <div className="flex h-16 items-center justify-between px-5 space-x-4 z-20">
      {/* Heading */}
      <h1 className="text-lg font-bold">CNAPP Dashboard</h1>

      <div className="flex gap-4">
        <div
          className="flex items-center gap-2 border-2 px-2 py-1 cursor-pointer border-gray-400 rounded bg-white"
          onClick={onAddCategoryClick} // Attach the callback
        >
          Add Widget Cat.
          <FaPlus />
        </div>
        <div className="flex items-center gap-2 border-2 px-2 py-1 cursor-pointer border-gray-400 bg-white rounded">
          <TfiReload />
        </div>
        <div className="flex items-center gap-2 border-2 px-2 py-1 cursor-pointer border-gray-400 bg-white rounded">
          <SlOptionsVertical />
        </div>
        <div className="flex items-center gap-2 border-2 px-2 py-1 cursor-pointer border-blue-800 bg-white rounded">
          <div className="flex items-center">
            <div className="relative">
              <FaClock className="text-blue-800 mr-2" />
              <div className="absolute right-0 top-0 bottom-0 w-1 border-r-2 border-blue-800" />
            </div>
          </div>
          Last 2 days
          <div>
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}
