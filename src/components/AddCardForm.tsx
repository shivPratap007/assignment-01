import React, { useState } from "react";
import { useStore } from "../store";
import { Tcard } from "../utils/CardsData";
import { FaPlus, FaTimes } from "react-icons/fa";

interface AddCardFormProps {
  rowIndex: number;
  onClose: () => void;
}

interface DataEntry {
  label: string;
  value: number;
  color: string;
}

const AddCardForm = ({ rowIndex, onClose }: AddCardFormProps) => {
  const [title, setTitle] = useState("");
  const [data, setData] = useState<DataEntry[]>([{ label: "", value: 0, color: "#000000" }]);
  const addCard = useStore((state) => state.addCard);

  const handleAddEntry = () => {
    setData([...data, { label: "", value: 0, color: "#000000" }]);
  };

  const handleRemoveEntry = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  const handleChange = (index: number, field: keyof DataEntry, value: string | number) => {
    console.log(value);
    const newData = [...data];
    newData[index][field] = value as never; 
    setData(newData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    const newCard: Tcard = {
      id: Math.random().toString(36).substring(7),
      title,
      data,
      chartData: {
        labels: data.map((item) => item.label),
        datasets: [
          {
            data: data.map((item) => item.value),
            backgroundColor: data.map((item) => item.color),
            
          },
        ],
      },
    };
    addCard(rowIndex, newCard);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-lg font-semibold mb-4">Add New Card</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 rounded p-2 w-full"
              required
            />
          </div>
          {data.map((entry, index) => (
            <div key={index} className="mb-4 flex items-center gap-2">
              <input
                type="text"
                placeholder="Label"
                value={entry.label}
                onChange={(e) => handleChange(index, "label", e.target.value)}
                className="border border-gray-300 rounded p-2 w-1/3"
                required
              />
              <input
                type="number"
                placeholder="Value"
                value={entry.value}
                onChange={(e) => handleChange(index, "value", parseFloat(e.target.value))}
                className="border border-gray-300 rounded p-2 w-1/3"
                required
              />
              <input
                type="color"
                value={entry.color}
                onChange={(e) => handleChange(index, "color", e.target.value)}
                className="border border-gray-300 rounded p-2"
                required
              />
              <button
                type="button"
                onClick={() => handleRemoveEntry(index)}
                className="text-gray-600 hover:text-gray-700"
              >
                <FaTimes />
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddEntry}
            className="mb-4 flex items-center gap-2 border-2 px-2 py-1 cursor-pointer border-gray-400 text-gray-700 rounded bg-white"
          >
            Add Entry <FaPlus className="text-gray-700" />
          </button>
          <div className="flex justify-end gap-2">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add Card
            </button>
            <button
              type="button"
              onClick={onClose}
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCardForm;
