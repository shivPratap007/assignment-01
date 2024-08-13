import { FaPlus } from "react-icons/fa";
import AddCardForm from "./AddCardForm";
import { useState } from "react";

interface AddCardProps {
  rowIndex: number; 
}

const AddCard = ({ rowIndex }: AddCardProps) => {
  const [showForm, setShowForm] = useState(false);

  const handleClick = () => {
    setShowForm(true);
  };

  const handleClose = () => {
    setShowForm(false);
  };

  return (
    <div className="relative">
      <div
        className="bg-white shadow-lg rounded-lg p-4 w-96 flex min-h-60 justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center gap-2 border-2 px-2 py-1 border-gray-400 text-gray-700 rounded bg-white">
          Add Widget
          <FaPlus className="text-gray-700" />
        </div>
      </div>
      {showForm && <AddCardForm rowIndex={rowIndex} onClose={handleClose} />}
    </div>
  );
};

export default AddCard;
