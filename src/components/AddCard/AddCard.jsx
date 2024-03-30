import styles from './AddCard.module.css';
import Plus from '../../assets/images/plus.svg'


function AddCard() {
  return (
    <section className={styles.card}>
      <img className={styles.plus} src={Plus} alt="plus sign"/>
      <p className={styles.cardText}>Add new application </p>
    </section>
  );
}

export default AddCard;
