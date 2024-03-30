import styles from "./LongTextField.module.css";

export default function LongTextField({text}) {

  return (
    <label className={styles.label}>
      <div className={styles.container}>
      <div className={styles.text}>{text}</div>
      <textarea placeholder={"Paste relevant information from the job  posting here."} type="text"  name="title__name"className={styles.textarea}></textarea>
      </div>
    </label>
  );
}
