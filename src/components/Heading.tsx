import { FaPlus } from "react-icons/fa";
import { TfiReload } from "react-icons/tfi";
import { SlOptionsVertical } from "react-icons/sl";

export default function Heading() {
  return (
    <div className="flex h-16 items-center justify-between px-5 space-x-4">
      {/* Heading */}
      <h1 className="text-lg font-bold">CNAPP Dashboard</h1>

      <div className="flex gap-4">
        <div className="flex items-center gap-2 border-2 px-2 cursor-pointer  border-gray-400 rounded bg-white">
          Add Widget
          <FaPlus />
        </div>
        <div className="flex items-center gap-2 border-2 px-2 cursor-pointer  border-gray-400 bg-white rounded">
          <TfiReload />
        </div>
        <div className="flex items-center gap-2 border-2 px-2 cursor-pointer  border-gray-400 bg-white rounded">
          <SlOptionsVertical />
        </div>
        <div className="flex items-center gap-2 border-2 px-2 cursor-pointer border-gray-400 bg-white rounded">
          Add Widget
          <FaPlus />
        </div>
      </div>
    </div>
  );
}
