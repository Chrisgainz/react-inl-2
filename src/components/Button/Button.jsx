import styles from "./Button.module.css";

const Button = ({ text, onClick, type = "button", disabled = false }) => {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;