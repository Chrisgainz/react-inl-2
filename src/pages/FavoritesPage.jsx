import MealCardContainer from "../components/MealCardContainer/MealCardContainer"

export default function FavoritesPage({ favorites, setFavorites }) {
  return (
    <section>
      <h1>Sparade favoriter</h1>

      <MealCardContainer meals={favorites} />

    </section>
  )
}