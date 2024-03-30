import styles from './Card.module.css';
import starActive from '../../assets/images/star-active.svg';
import starInActive from '../../assets/images/star-inactive.svg';

function Card() {
  return (
    <section className={styles.card}>
      <div className={styles.top}>
        <p className={styles.company}>Trello</p>
        {/** this div will contain the star rating that corresponds the level on priority inputed in  the form.  */}
        <div className={styles.stars}>
          <img className={styles.oneStart} src={starActive} alt="yellow star" />
          <img className={styles.oneStart} src={starActive} alt="yellow star" />
          <img className={styles.oneStart} src={starActive} alt="yellow star" />
        </div>
      </div>

      <p className={styles.role}>Software Engineer</p>

      {/** this div will have multiples states depending of the application status clicked  */}
      <div className={styles.status}>Interviewing</div>
    </section>
  );
}

export default Card;
