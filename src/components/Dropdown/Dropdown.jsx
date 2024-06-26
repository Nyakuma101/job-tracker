import { useState } from 'react';
import styles from './Dropdown.module.css';

export default function Dropdown({ text }) {
  const [val, setVal] = useState('');
  const status = ['Not Submitted', 'Submitted', 'No Callback', 'Interview Scheduled', 'Interviewing', 'Offer Received'];

  return (
    <label className={styles.label}>
      <div className={styles.container} />
      <div className={styles.text}>{text}</div>
      <select className={styles.select} onChange={(e) => setVal(e.target.value)}>
        {status.map((op) => (
          <option className={styles.optionColor}>{op}</option>
        ))}
      </select>
    </label>
  );
}
