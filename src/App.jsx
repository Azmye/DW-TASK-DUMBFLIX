import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import Shows from "./pages/Shows";
import DetailsItem from "./components/DetailsItem";
import { useEffect, useState } from "react";
import Profile from "./pages/Profile";
import UserPayment from "./pages/UserPayment";
import UserPrivateRoute from "./components/UserPrivateRoute";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import AddItem from "./components/Admin/AddItem";
import UserTransaction from "./pages/UserTransaction";
import UserRoutes from "./components/UserRoutes";
import AdminPrivateRoutes from "./components/AdminPrivateRoutes";

const App = () => {
  document.body.classList = "bg-black";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userState, setUserState] = useState(0);
  const [admin, setAdmin] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  useEffect(() => {
    // checking if there is user currently login
    for (let i = 1; i <= localStorage.length; i++) {
      const response = localStorage.getItem(i);
      const user = JSON.parse(response);
      if (user.isLoggedIn == true) {
        return setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      return;
    }
  }, []);

  return (
    <div className="App">
      <Navbar
        userState={setUserState}
        setLogin={setIsLoggedIn}
        setLoginModal={setLoginModal}
        loginModal={loginModal}
        isLoggedIn={isLoggedIn}
        admin={admin}
      />
      <div className="content">
        <Routes>
          <Route element={<UserRoutes admin={setAdmin} />}>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/shows" element={<Shows />} />
            <Route path="*" element={<NotFound />} />
          </Route>

          <Route
            element={
              <AdminPrivateRoutes
                admin={setAdmin}
                userState={userState}
                isLoggedIn={isLoggedIn}
              />
            }
          >
            <Route
              path="/movie-detail-admin/:id"
              element={<DetailsItem admin={true} endpoint={"/movie/"} />}
            />

            <Route
              path="/shows-detail-admin/:id"
              element={<DetailsItem admin={true} endpoint={"/tv/"} />}
            />
            <Route path="/add-item" element={<AddItem />} />
            <Route path="/transactions" element={<UserTransaction />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route
            element={
              <UserPrivateRoute
                setLoginModal={setLoginModal}
                userState={userState}
                isLoggedIn={isLoggedIn}
              />
            }
          >
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
