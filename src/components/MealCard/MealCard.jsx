import styles from "./MealCard.module.css";
import { Link } from "react-router-dom";

function MealCard({ meal }) {
  return (
    <div className={styles.mealCard}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h2>{meal.strMeal}</h2>
      <p>{meal.strCategory}</p>
      <p>{meal.strArea}</p>
        <Link to={`/recipes/${meal.idMeal}`} className={styles.detailsButton}>
          Visa recept
        </Link>
    </div>
  );
}

export default MealCard;