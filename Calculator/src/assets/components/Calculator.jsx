import styles from "../../Calculator.module.css";
import Display from "./Display";
import ButtonPanel from "./ButtonPanel";

function Calculator() {
  return (
    <div className={styles.calculator}>
      <Display value="0" />
      <ButtonPanel />
    </div>
  );
}

export default Calculator;
