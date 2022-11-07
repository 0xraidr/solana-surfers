import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import SolanaSurfers from "./components/SolanaSurfers";

function App() {
  return (
    <div className="App bg-water-blue">
      <NavBar />
      <div>
        <Home />
        <SolanaSurfers />
        <Footer />
      </div>
    </div>
  );
}

/*bg-gradient-to-br from-orange-500 via-pink-600 to-blue-500
 */

export default App;
