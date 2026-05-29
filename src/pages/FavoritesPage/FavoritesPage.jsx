import MealCardContainer from "../../components/MealCardContainer/MealCardContainer"
import Button from "../../components/Button/Button";
import styles from "./FavoritesPage.module.css";

export default function FavoritesPage({ favorites, setFavorites }) {

const clearMeals = () => { setFavorites([]) };
  

  return (
    <section className={styles.favoritesPage}>
      <h1 className={styles.title}>Sparade favoriter</h1>
       <div className={styles.clearBtnContainer}>

            { favorites.length > 0 && (<Button onClick={clearMeals} text="Radera alla favoriter" />) }

            </div>

         <div className={styles.mealContainer}>
      <MealCardContainer meals={favorites} />
         </div>
         
    </section>
  )
}