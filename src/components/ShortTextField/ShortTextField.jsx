import styles from "./ShortTextField.module.css";

export default function ShortTextField({text}) {

  return (
    <label className={styles.label}>
      <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      <input placeholder={"Software engineer"} type="text"  name="title__name"className={styles.input}></input>
     </div>
    </label>
    
  );
}
