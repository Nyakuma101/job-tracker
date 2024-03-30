import styles from "./Title.module.css";

export default function Title() {
  return (
    <section className={styles.content}>
      <form className={styles.form}>
        <section className={styles.body}>
          <h2 className={styles.title}>Job title</h2>
          <div className={styles.wrapper}>
            <input
              placeholder="Software engineer"
              type="text"
              name="title__name"
            ></input>
          </div>
        </section>
      </form>
    </section>
  );
}
