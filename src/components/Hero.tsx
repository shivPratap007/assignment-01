import { allData } from "../utils/CardsData";
import CircularRow from "./CircularRow";
import Heading from "./Heading";

export default function Hero() {
  return (
    <section className="w-content bg-slate-200 min-h-screen">
      <Heading />
      {allData.map((row) => (
        <CircularRow rowData={row} key={row.widgetRowTitle} />
      ))}
    </section>
  );
}
