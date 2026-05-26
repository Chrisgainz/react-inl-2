import styles from "./SearchBar.module.css";

// Receives searchQuery, onSearch and onSubmit as props from RecipesPage
function SearchBar({ searchQuery, onSearch, onSubmit }) {
  return (
    <div className={styles.searchContainer}>
        <div className={styles.inputWrapper}>
            <span className={styles.searchIcon}>🔍</span>
            <input
                className={styles.input}
                value={searchQuery}
                onChange={(e) => onSearch(e.target.value)}
                // Trigger search when user presses enter
                onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
                placeholder='Sök recept...' 
            />
        </div>
    </div>
  )
}

export default SearchBar