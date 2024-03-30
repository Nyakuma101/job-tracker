import styles from './Dropdown.module.css';

export default function Dropdown({ text }) {

  return (
    <label className={styles.label}>
      <div className={styles.container}>
        <div className={styles.text}>{text}</div>
        <select className={styles.select}>
          <option className={styles.NotSubmitted}>Not Submitted</option>
          <option className={styles.Submitted}>Submitted</option>
          <option className={styles.NoCallback}>No Callback</option>
          <option className={styles.InterviewScheduled}>Interview Scheduled</option>
          <option className={styles.Interviewing}>Interviewing</option>
          <option className={styles.OfferReceived}>Offer Received</option>
          </select>      
      </div>
    </label>
  );
}
