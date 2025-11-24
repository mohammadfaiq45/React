import styles from "../../Calculator.module.css";

function Display({ value }) {
  return <div className={styles.display}>{value}</div>;
}

export default Display;
