import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMealById } from "../api/apiService";
import Button from "../components/Button/Button";
import styles from "./RecipeDetailPage.module.css";

// TheMealDB stores ingredients and measurements in numbered fields.
function getIngredients(meal) {
  const ingredientList = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredientList.push({
        id: `${meal.idMeal}-${i}`,
        name: ingredient,
        measure: measure || "",
      });
    }
  }

  return ingredientList;
}

export default function RecipeDetailPage({ favorites, setFavorites }) {
  const { id } = useParams();

  const [meal, setMeal] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch the selected meal when the page loads or when the id changes.
  useEffect(() => {
    async function fetchMeal() {
      try {
        setLoading(true);
        setError("");

        const data = await getMealById(id);

        if (!data) {
          setMeal(null);
          setIngredients([]);
          return;
        }

        setMeal(data);
        setIngredients(getIngredients(data));
      } catch (error) {
        console.error(error);
        setError("Något gick fel när receptet skulle hämtas.");
      } finally {
        setLoading(false);
      }
    }

    fetchMeal();
  }, [id]);

 const isFavorite = favorites.some(
  (favorite) => favorite.idMeal === meal?.idMeal
);

function handleAddFavorite() {
  if (!meal) return;

  setFavorites((prevFavorites) => {
    const alreadyExists = prevFavorites.some(
      (favorite) => favorite.idMeal === meal.idMeal
    );

    if (alreadyExists) {
      return prevFavorites;
    }

    return [...prevFavorites, meal];
  });
}

  if (loading) {
    return <p className={styles.message}>Laddar recept...</p>;
  }

  if (error) {
    return <p className={styles.message}>{error}</p>;
  }

  if (!meal) {
    return (
      <section className={styles.detailPage}>
        <p className={styles.message}>Receptet kunde inte hittas.</p>
        <Link to="/recipes" className={styles.backLink}>
          Tillbaka till recept
        </Link>
      </section>
    );
  }

  return (
    <section className={styles.detailPage}>
      <Link to="/recipes" className={styles.backLink}>
        ← Tillbaka till recept
      </Link>

      <article className={styles.recipeCard}>
        <div className={styles.imageWrapper}>
          <img src={meal.strMealThumb} alt={meal.strMeal} />
        </div>

        <div className={styles.content}>
          <p className={styles.meta}>
            {meal.strCategory} • {meal.strArea}
          </p>

          <h1>{meal.strMeal}</h1>

          <Button
            text={isFavorite ? "Redan sparad som favorit" : "Spara som favorit"}
            onClick={handleAddFavorite}
            disabled={isFavorite}
          />

          <section className={styles.section}>
            <h2>Ingredienser</h2>

            <ul className={styles.ingredientList}>
              {ingredients.map((ingredient) => (
                <li key={ingredient.id}>
                  <span>{ingredient.name}</span>
                  <span>{ingredient.measure}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>Instruktioner</h2>
            <p className={styles.instructions}>{meal.strInstructions}</p>
          </section>
        </div>
      </article>
    </section>
  );
}