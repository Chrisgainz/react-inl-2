import { useEffect, useState } from "react"
import { searchMealByName } from "../api/apiService"
import MealCardContainer from "../components/MealCardContainer/MealCardContainer"
import SearchBar from "../components/SearchBar/SearchBar"

export default function RecipesPage() {
  // State for storing meals, loading status, errors and search query
  const [meals, setMeals] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [submittedQuery, setSubmittedQuery] = useState("")

  // Fetch meals when the page loads
  useEffect(() => {
  searchMealByName(submittedQuery)
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
  }, [submittedQuery])

  // Show loading message while fetching data
  if (loading) return <p>Laddar...</p>

  // Show error message if something went wrong
  if (error) return <p>Något gick fel!</p>

  return (
   <div>
      <SearchBar 
      searchQuery={searchQuery} 
      onSearch={setSearchQuery}
      onSubmit={() => setSubmittedQuery(searchQuery)} />
      <MealCardContainer meals={meals} />
    </div>
  )
}