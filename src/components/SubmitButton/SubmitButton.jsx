import styles from './SubmitButton.module.css';

function SubmitButton({ text }) {
  return <button className={styles.submit}>{text}</button>;
}

export default SubmitButton;
