import Button from "./Button";
import styles from "../../Calculator.module.css";

function ButtonPanel() {
  return (
    <div className={styles.buttons}>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button className={styles.op}>/</Button>

      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button className={styles.op}>*</Button>

      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button className={styles.op}>-</Button>

      <Button>0</Button>
      <Button>.</Button>
      <Button className={styles.equal}>=</Button>
      <Button className={styles.op}>+</Button>
    </div>
  );
}

export default ButtonPanel;
