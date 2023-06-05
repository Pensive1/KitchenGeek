import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
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
  const closeLoginModal = () => setShowLoginModal(false);

  return (
    <BrowserRouter>
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
          <Route path="/profile" element={<Profile />} />
          <Route path="/shopping" element={<ShoppingList />} />
        </Routes>
      </AnimatePresence>
      <NavBar />
    </BrowserRouter>
  );
}

export default App;
