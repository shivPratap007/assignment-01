import { FaPlus } from "react-icons/fa";

const AddCard = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-96 flex min-h-60 justify-center items-center">
      <div className="flex items-center gap-2 border-2 px-2 py-1 cursor-pointer  border-gray-400 text-gray-700 rounded bg-white">
        Add Widget
        <FaPlus className="text-gray-700" />
      </div>
    </div>
  );
};

export default AddCard;
