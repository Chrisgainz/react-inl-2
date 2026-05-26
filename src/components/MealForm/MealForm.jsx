
import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import styles from "./MealForm.module.css";
import placeholderImage from "../../assets/create-meal-placeholder.png";


function MealForm({ onCreateMeal }) {

    const [mealName, setMealName] = useState("");
    const [category, setCategory] = useState("");
    const [ingredientInput, setIngredientInput] = useState("");
    const [ingredients, setIngredients] = useState([]);
    const [imageUrl, setImageUrl] = useState("");
    const [ingredientAdded, setIngredientAdded] = useState(false);



    const handleAddIngredient = () => {

        if (!ingredientInput.trim())

            return;

        if (ingredients.includes(ingredientInput))

            return;

        setIngredients((prev) => [...prev, ingredientInput]);


        setIngredientInput("");


        setIngredientAdded(true);


        setTimeout(() => { setIngredientAdded(false) }, 2000);

    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const newMeal = {

            idMeal: Date.now(),
            strMeal: mealName,
            strCategory: category,
            strMealThumb: imageUrl || placeholderImage,
            ingredients: ingredients

        };


        onCreateMeal(newMeal);
        setMealName("");
        setCategory("");
        setIngredientInput("");
        setIngredients([]);
        setImageUrl("");

    };


    return (

        <form className={styles.form} onSubmit={handleSubmit}>

            <Input value={mealName} onChange={(e) => setMealName(e.target.value)}
                placeholder="Namn på måltid" required />


            <Input value={category} onChange={(e) => setCategory(e.target.value)}
                placeholder="Kategori" required />

            <div className={styles.ingredientContainer}>

                <Input value={ingredientInput} onChange={(e) => setIngredientInput(e.target.value)}
                    placeholder="Ingrediens" />

                <Button type="button" onClick={handleAddIngredient} text="Lägg till ingrediens" />


            </div>


            {ingredientAdded && (<p>Ingrediens tillagd ✔</p>)}


            <Input value={imageUrl} onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Bild URL (Valfritt)" />


            <Button text="Skapa måltid" type="submit" />


        </form>

    );

}

export default MealForm;