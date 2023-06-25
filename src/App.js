import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import axios from "axios";
import Discover from "./pages/Discover/Discover";
import Cookbook from "./pages/Cookbook/Cookbook";
import SearchResults from "./pages/SearchResults/SearchResults";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import ShoppingList from "./pages/ShoppingList/ShoppingList";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import Auth from "./components/Auth/Auth";
import Profile from "./pages/Profile/Profile";

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [authTitle, setAuthTitle] = useState("Login");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState(null);

  const closeLoginModal = () => setShowLoginModal(false);

  useEffect(() => {
    const getProfile = async () => {
      const SERVER_URL = process.env.REACT_APP_SERVER_URL;
      try {
        const { data } = await axios.get(`${SERVER_URL}/auth/profile`, {
          withCredentials: true,
        });
        setIsLoggedIn(true);
        setProfile(data);
      } catch (err) {
        // If we are getting back 401 (Unauthorized) back from the server, means we need to log in
        if (err.response && err.response.status === 401) {
          setIsLoggedIn(false);
          setProfile(null);
          return err.response.status;
        }
      }
    };

    getProfile();
  }, []);

  return (
    <BrowserRouter>
      <Header
        setShowLoginModal={setShowLoginModal}
        isLoginModalActive={showLoginModal}
        isLoggedIn={isLoggedIn}
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
            element={<Profile profileData={profile} isLoggedIn={isLoggedIn} />}
          />
          <Route path="/shopping" element={<ShoppingList />} />
        </Routes>
      </AnimatePresence>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
