import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import RecipesPage from "./pages/RecipesPage"
import RecipeDetailPage from "./pages/RecipeDetailPage"
import FavoritesPage from "./pages/FavoritesPage"

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Hem</Link>
        <Link to="/recipes">Recept</Link>
        <Link to="/favorites">Favoriter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/recipes/:id" element={<RecipeDetailPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App