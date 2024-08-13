import { useStore } from "../store";
import CircularRow from "./CircularRow";
import Heading from "./Heading";

export default function Hero() {
  const allData = useStore((state) => state.allData);

  return (
    <section className="w-content bg-slate-200 min-h-screen">
      <Heading />
      {allData.map((row, rowIndex) => (
        <CircularRow rowData={row} rowIndex={rowIndex} key={rowIndex} />
      ))}
    </section>
  );
}
