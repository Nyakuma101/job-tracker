import styles from "./ShortTextField.module.css";

export default function ShortTextField() {

  return (
    <label className={styles.label}>
      <div className={styles.text}>Short Text Field</div>
      <input placeholder={"Placeholder"} type="Text"  name="title__name"className={styles.input}></input>
    </label>
  );
}
