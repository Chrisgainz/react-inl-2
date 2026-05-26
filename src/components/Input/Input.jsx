import styles from './Input.module.css'

const Input = ({ type, placeholder, value, onChange, required }) => {
    return (
        <input
            className={styles.input}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            required={required}
        />
    )
}

export default Input