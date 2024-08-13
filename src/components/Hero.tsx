import  { useState } from "react";
import { useStore } from "../store";
import CircularRow from "./CircularRow";
import Heading from "./Heading";
import AddCategoryForm from "./AddCategoryForm";

export default function Hero() {
  const [showForm, setShowForm] = useState(false);
  const allData = useStore((state) => state.allData);

  const handleAddCategoryClick = () => setShowForm(true);
  const handleCloseForm = () => setShowForm(false);

  return (
    <section className="w-content bg-slate-200 min-h-screen">
      <Heading onAddCategoryClick={handleAddCategoryClick} />
      {showForm && <AddCategoryForm onClose={handleCloseForm} />}
      { allData.map((row, rowIndex) => (
        <CircularRow rowData={row}  key={rowIndex} />
      ))}
    </section>
  );
}
