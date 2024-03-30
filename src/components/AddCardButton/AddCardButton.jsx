import styles from './AddCardButton.module.css';
import Plus from '../../assets/images/plus.svg';
import { Link } from 'react-router-dom';

function AddCardButton() {
  return (
    <Link to="/add-application" className={styles.card}>
      <img className={styles.plus} src={Plus} alt="plus sign" />
      <p className={styles.cardText}>Add new application </p>
    </Link>
  );
}

export default AddCardButton;
