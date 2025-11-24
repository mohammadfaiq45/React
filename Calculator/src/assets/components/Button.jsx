import styles from "../../Calculator.module.css";

function Button({ children, className }) {
  return (
    <button className={`${styles.btn} ${className ? className : ""}`}>
      {children}
    </button>
  );
}

export default Button;
