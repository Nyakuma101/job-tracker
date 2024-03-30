import styles from './StarField.module.css';
import { ReactComponent as StarActive } from '../../assets/images/star-active.svg';
import { ReactComponent as StarInActive } from '../../assets/images/star-inactive.svg';

function StarIcon({ isActive, onClick }) {
  return (
    <button className={styles.starButton} onClick={onClick}>
      {isActive === true ? <StarActive /> : <StarInActive />}
    </button>
  );
}

function StarField({ priority, setPriority }) {
  return (
    <div>
      <label className={styles.label}>Star Field</label>
      <div className={styles.field}>
        <StarIcon isActive={true} onClick={() => setPriority(1)} />

        <StarIcon isActive={priority >= 2} onClick={() => setPriority(2)} />

        <StarIcon isActive={priority >= 3} onClick={() => setPriority(3)} />

        <StarIcon isActive={priority >= 4} onClick={() => setPriority(4)} />

        <StarIcon isActive={priority === 5} onClick={() => setPriority(5)} />
      </div>
    </div>
  );
}

export default StarField;
