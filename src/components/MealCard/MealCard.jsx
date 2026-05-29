import styles from "./MealCard.module.css";
import { Link } from "react-router-dom";

// Displays a single meal card with image, name, category, area and a link to details
function MealCard({ meal, showButton = true }) {
  return (
    <div className={styles.mealCard}>
      {/* Meal image */}
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      {/* Meal name */}
      <h2>{meal.strMeal}</h2>
      {/* Category and area on the same line */}
      <p>{meal.strCategory} • {meal.strArea}</p>
        {/* Link to recipe detail page */}
        { showButton && (
        <Link to={`/recipes/${meal.idMeal}`} className={styles.detailsButton}>
          Visa recept
        </Link>
        )}
    </div>
  );
}

export default MealCard;