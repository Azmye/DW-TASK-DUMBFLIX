import Navbar from "./components/Header/Navbar";
import Home from "./components/Home";

const App = () => {
  document.body.classList = "bg-black";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
};

export default App;
