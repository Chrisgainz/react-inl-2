import { useEffect, useState } from "react"
import searchMealsbyName from "../services/searchMealsbyName"

export default function RecipesPage() {
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}