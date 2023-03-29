import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import DetailsItem from "./components/DetailsItem";

const App = () => {
  document.body.classList = "bg-black";

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<Shows />} />
          <Route
            path="/shows-detail/:id"
            element={<DetailsItem endpoint={"/tv/"} />}
          />
          <Route
            path="/movie-detail/:id"
            element={<DetailsItem endpoint={"/movie/"} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default App;
