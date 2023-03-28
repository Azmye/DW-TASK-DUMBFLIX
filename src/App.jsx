import Navbar from "./components/Header/Navbar";
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";


const App = () => {
  document.body.classList = "bg-black";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route  path="/" element={<Home />}/>
          <Route  path="/movies" element={<Movies />}/>
          <Route  path="/shows" element={<Shows />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;
