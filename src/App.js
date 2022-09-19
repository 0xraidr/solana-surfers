import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App bg-gradient-to-br from-orange-500 via-pink-600 to-blue-500">
      <NavBar />
      <div>
      <Home />
      <About />
      <Footer />
      </div>
    </div>
  );
}

export default App;
