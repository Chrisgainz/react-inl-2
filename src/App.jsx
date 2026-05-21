import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import RecipesPage from "./pages/RecipesPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {

 const [favorites, setFavorites] = useState([]);

  return (
    <BrowserRouter>
      
      <Header />
         
   <main>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage
        favorites={favorites} setFavorites={setFavorites} />} />
        <Route path="/favorites" element={<FavoritesPage
        favorites={favorites} setFavorites={setFavorites} />} />
      </Routes>

    </main>

      <Footer />

    </BrowserRouter>
  )
}

export default App