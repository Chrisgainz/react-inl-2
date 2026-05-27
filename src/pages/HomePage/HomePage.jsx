import { useState, useEffect } from "react";
import { getRandomMeal, getMealsByCategory } from "../../api/apiService";
import MealCard from "../../components/MealCard/MealCard";
import styles from "./HomePage.module.css";
import Button from "../../components/Button/Button";


export default function HomePage() {
  const [meal, setMeal] = useState(null);
  const [beefMeals, setBeefMeals] = useState([]);
  const [vegetarianMeals, setVegetarianMeals] = useState ([]);
  const [dessertMeals, setDessertMeals] = useState ([]);
  const handleRandomMeal = async () => {
  const randomMeal = await getRandomMeal();

  console.log(randomMeal);

  setMeal(randomMeal);
};

const fetchBeefMeals = async () => {
  const meals = await getMealsByCategory("Beef");
  console.log(meals);
  setBeefMeals(meals);
};

const fetchVegetarianMeals = async () => {
  const meals = await getMealsByCategory("Vegetarian");
  console.log(meals);
  setVegetarianMeals(meals);
};

const fetchDessertMeals = async () => {
  const meals = await getMealsByCategory("Dessert");
  console.log(meals);
  setDessertMeals(meals);
};



// Fetch random (suggested meal), beef, vegetarian meals when the page loads:
  useEffect(() => {
      handleRandomMeal();
      fetchBeefMeals();
      fetchVegetarianMeals();
      fetchDessertMeals();
    }, []);


  return (

    <div className={styles.homePage}>
      <h1 className={styles.title}>Vad ska vi äta idag?</h1>
      <p className={styles.subtitle}>
      Upptäck recept från hela världen – från klassiska vardagsfavoriter till nya smakupplevelser.
      </p>


    <section className={styles.randomSection}>

    <div className={styles.heroContent}>
    <div className={styles.heroText}>
      <h2>Vet du inte vad du ska laga idag?</h2>
      <p>Slumpa fram ett recept och hitta nya favoriter från hela världen.</p>

    <Button text="Slumpa måltid" onClick={handleRandomMeal}/>
    </div>
    <div className={styles.mealGrid}>
     {meal && <MealCard meal={meal} />}
     </div>
     </div>
    </section>


    <section className={styles.categorySection}>
       <h2>Populära kötträtter</h2>
       <p>Upptäck våra mest omtyckta kötträtter just nu.</p>
        <div className={styles.mealGrid}>
      {beefMeals.slice(0, 3).map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}
      </div>
     </section>
   

    <section className={styles.categorySection}>
      <h2>Vegetariska favoriter</h2>
      <p>Fräscha och smakrika vegetariska rätter.</p>
      <div className={styles.mealGrid}>
        {vegetarianMeals.slice(0, 3).map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
        </div>
    </section>


    <section className={styles.categorySection}>
      <h2>Ljuvliga desserter</h2>
      <p>En len chokladkaka eller en lätt citrondessert, här finns något för alla smaker.</p>
      <div className={styles.mealGrid}>
        {dessertMeals.slice(0, 3).map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />  
        ))}
        </div>
    </section>


    </div>
  
  );
}
