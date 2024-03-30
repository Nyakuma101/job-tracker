import styles from "./JobDescription.module.css";
import ShortTextField from "../Common/ShortTextField/ShortTextField";

export default function JobDescription(text) {
  return (
    <section className={styles.content}>
      <form className={styles.form}>
        <section className={styles.body}>
          <div className={styles.wrapper}>
            <ShortTextField text="Job Description" />
          </div>
        </section>
      </form>
    </section>
  );
}
