import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect, createContext } from "react";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import Discover from "./pages/Discover/Discover";
import Cookbook from "./pages/Cookbook/Cookbook";
import SearchResults from "./pages/SearchResults/SearchResults";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Modal from "./components/Modal/Modal";
import Auth from "./components/Auth/Auth";
import Profile from "./pages/Profile/Profile";

export const loggedInContext = createContext(null);
export const userIdContext = createContext(null);

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authTitle, setAuthTitle] = useState("Login");

  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const closeLoginModal = () => setShowLoginModal(false);

  const getProfile = async () => {
    const SERVER_URL = process.env.REACT_APP_SERVER_URL;
    try {
      const { data } = await axios.get(`${SERVER_URL}/auth/profile`, {
        withCredentials: true,
      });
      setIsAuthenticating(false);
      setIsLoggedIn(true);
      setProfile(data);
    } catch (err) {
      if (err.response.status === 401) {
        setIsAuthenticating(false);
        setIsLoggedIn(false);
      } else {
        console.log("Error authenticating", err);
      }
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  //Auth Loading state
  if (isAuthenticating) return null;

  return (
    <BrowserRouter>
      <loggedInContext.Provider value={isLoggedIn}>
        <userIdContext.Provider value={profile ? profile.id : null}>
          <Header
            setShowLoginModal={setShowLoginModal}
            isLoginModalActive={showLoginModal}
          />
          {showLoginModal && (
            <Modal handleClose={closeLoginModal} title={authTitle}>
              <Auth setAuthTitle={setAuthTitle} />
            </Modal>
          )}

          <AnimatePresence mode="wait" onExitComplete={() => null}>
            <Routes>
              <Route path="/" element={<Discover />} />
              <Route path="/cookbook" element={<Cookbook />} />
              <Route path="results/:searchQuery" element={<SearchResults />} />
              <Route path="results/*" element={<SearchResults />} />
              <Route path="/recipe/:id" element={<RecipeDetails />} />
              <Route
                path="/profile"
                element={<Profile profileData={profile} />}
              />
              <Route path="/shopping" element={<ShoppingList />} />
            </Routes>
          </AnimatePresence>
          <Footer />
          <NavBar />
        </userIdContext.Provider>
      </loggedInContext.Provider>
    </BrowserRouter>
  );
}

export default App;
