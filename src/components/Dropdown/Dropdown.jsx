import styles from './Dropdown.module.css';

export default function Dropdown({ text }) {
    // const ["Not submitted"]
  return (
    <label className={styles.label}>
      <div className={styles.container}>
        <div className={styles.text}>{text}</div>
        <select className={styles.select} ></select>      
      </div>
    </label>
  );
}
