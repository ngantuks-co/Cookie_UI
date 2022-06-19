import Location from "./pages/Location";
import Mountly from "./pages/Mountly";
import Home from "./pages/Home";
import Navbar from "./pages/NavbarHome";
import Hero from "./pages/Hero";
import Testy from "./pages/Testy";
import CategoryCake from "./pages/CategoryCake";

function App() {
  return (
    <div>
      {/* <h1 className="container text-danger">Test</h1> */}
      <Home />
      <Hero />
      <CategoryCake />
      <Mountly />
      <Location />
      <Testy />
    </div>
  );
}

export default App;
