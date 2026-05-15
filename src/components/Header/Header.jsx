import styles from "./Header.module.css";
import Nav from "../Nav/Nav";


function Header() {

  return (

    <header className={styles.header}>

      <h1 className={styles.logo}>
        MealApp
      </h1>

      <Nav />

    </header>
  );
}

export default Header;