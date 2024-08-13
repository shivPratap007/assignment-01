import Aboutme from "./components/Aboutme";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="bg-slate-200">
        <NavBar />
        <Hero />
        <Aboutme/>
      </div>
    </>
  );
}

export default App;
