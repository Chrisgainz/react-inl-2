import { useState, useEffect } from "react";
import { getRandomMeal, getMealsByCategory } from "../api/apiService";
import MealCard from "../components/MealCard/MealCard";


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

    <div>
      <h1>Vad ska vi äta idag?</h1>
     <button onClick={handleRandomMeal}>
      Slumpad måltid
     </button>
     {meal && <MealCard meal={meal} />}


     <div>
       <h2>Populära kötträtter</h2>

      {beefMeals.slice(0, 3).map((meal) => (
        <MealCard key={meal.idMeal} meal={meal} />
      ))}

     </div>
   

    <div>
      <h2>Vegetariska favoriter</h2>
        {vegetarianMeals.slice(0, 3).map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
    </div>

    <div>
      <h2>Ljuvliga desserter</h2>
        {dessertMeals.slice(0, 3).map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />  
        ))}
    </div>




    </div>
  
  );
}
