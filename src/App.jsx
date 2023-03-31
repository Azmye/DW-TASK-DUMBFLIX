import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import DetailsItem from "./components/DetailsItem";
import { useEffect, useState } from "react";
import Profile from "./components/User/Profile";
import UserPayment from "./components/Payment/UserPayment";
import UserPrivateRoute from "./components/UserPrivateRoute";
import NotFound from "./pages/NotFound";

const App = () => {
  document.body.classList = "bg-black";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userState, setUserState] = useState(0);
  console.log(userState);

  useEffect(() => {
    // checking if there is user currently login
    for (let i = 1; i <= localStorage.length; i++) {
      const response = localStorage.getItem(i);
      const user = JSON.parse(response);
      if (user.isLoggedIn == true) {
        return setIsLoggedIn(true), setUserState(1);
      } else {
        setIsLoggedIn(false);
      }
      return;
    }
  }, [userState]);

  return (
    <div className="App">
      <Navbar userState={setUserState} isLoggedIn={isLoggedIn} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/shows" element={<Shows />} />
          <Route path="*" element={<NotFound />} />
          <Route element={<UserPrivateRoute isLoggedIn={isLoggedIn} />}>
            <Route
              path="/profile"
              element={<Profile userState={userState} />}
            />
            <Route path="/user-payment" element={<UserPayment />} />
            <Route
              path="/shows-detail/:id"
              element={<DetailsItem endpoint={"/tv/"} />}
            />
            <Route
              path="/movie-detail/:id"
              element={<DetailsItem endpoint={"/movie/"} />}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
