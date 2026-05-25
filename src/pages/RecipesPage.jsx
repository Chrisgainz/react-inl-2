import { useEffect, useState } from "react"
import { searchMealByName } from "../api/apiService"

export default function RecipesPage() {
  // State for storing meals, loading status, errors and search query
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")

  // Fetch meals when the page loads
  useEffect(() => {
  searchMealByName("chicken")
    .then((data) => {
      // Store the fetched meals and stop loading
      setMeals(data)
      setLoading(false)
    })
    .catch((error) => {
      // Store the error and stop loading
      setError(error)
      setLoading(false)
    })
  }, [])

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  )
}