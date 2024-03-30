import styles from './Company.module.css';

export default function Company({ text }) {
  return (
    <label className={styles.label}>
      <div className={styles.container}>
        <div className={styles.text}>{text}</div>
        <input
          placeholder={'GitHub'}
          type="text"
          name="title__name"
          className={styles.input}
        ></input>
      </div>
    </label>
  );
}
