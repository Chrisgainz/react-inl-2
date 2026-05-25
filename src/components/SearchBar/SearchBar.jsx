import styles from "./SearchBar.module.css";

function SearchBar({ searchQuery, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Sök recept..."
      />
    </div>
  )
}

export default SearchBar