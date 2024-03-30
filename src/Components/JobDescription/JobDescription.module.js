import styles from "./JobDescription.module.css";
import ShortTextField from "../Common/ShortTextField/ShortTextField";

export default function JobDescription() {
  return <ShortTextField />;
  return (
    <section className={styles.content}>
      <form className={styles.form}>
        <section className={styles.body}>
          <h2 className={styles.title}>Job Title</h2>
          <div className={styles.wrapper}>
            <input
              placeholder="Software Engineer"
              type="text"
              name="title__name"
            ></input>
          </div>
        </section>
      </form>
    </section>
  );
}
