import { useState, useEffect } from "react";
import { getRandomMeal } from "../api/apiService";
import MealCard from "../components/MealCard/MealCard";


export default function HomePage() {
  const [meal, setMeal] = useState(null);
  const handleRandomMeal = async () => {
  const randomMeal = await getRandomMeal();

  console.log(randomMeal);

  setMeal(randomMeal);
};

// Fetch a random meal when the page loads:
  useEffect(() => {
      handleRandomMeal();
    }, []);


  return (

    <div>

     <h1>Vad ska vi äta idag?</h1>
     <button onClick={handleRandomMeal}>
      Slumpad måltid
     </button>
     {meal && <MealCard meal={meal} />}
   
    </div>
  
  );
}
