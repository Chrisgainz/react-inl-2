import MealCard from '../MealCard/MealCard'
import styles from './MealCardContainer.module.css'

const MealCardContainer = ({ meals }) => {
    return (
        !meals || meals.length === 0 ? (
            <p className={styles.notFoundMessage}>No meals found</p>)
            : (

                <section className={styles.container}>
                    {meals.map((meal) => (

                        <MealCard key={meal.idMeal} meal={meal} />

                    ))}
                </section>
            )
    )
}

export default MealCardContainer