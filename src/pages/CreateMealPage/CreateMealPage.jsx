

import MealForm from "../../components/MealForm/MealForm";
import MealCardContainer from "../../components/MealCardContainer/MealCardContainer";
import Button from "../../components/Button/Button";
import styles from "./CreateMealPage.module.css";


function CreateMealPage( { createdMeals, setCreatedMeals } ) {

    
    const handleCreateMeal = (meal) => { setCreatedMeals((prev) => [...prev, meal]); };
    const clearMeals = () => { setCreatedMeals([]) };

    return (

        <section className={styles.createMealPage} >

            <h1 className={styles.title}> Skapa din måltid </h1>

            <MealForm onCreateMeal={handleCreateMeal} />

            <div className={styles.clearBtnContainer}>

            { createdMeals.length > 0 && (<Button onClick={clearMeals} text="Radera alla måltider" />) }

            </div>


            <h2 className={styles.createdMealsTitle}>Dina skapade måltider</h2>


             <div className={styles.createdMealsWrapper}>

            <MealCardContainer meals={ createdMeals } showButton={false} />

            </div>

        </section>

    );

}

export default CreateMealPage;