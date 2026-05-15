import { Link } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {

  return (

    <nav className={styles.nav}>

      <Link to="/">Hem</Link>

      <Link to="/recipes">Recept</Link>

      <Link to="/favorites">Favoriter</Link>

    </nav>
  );
};

export default Nav; 