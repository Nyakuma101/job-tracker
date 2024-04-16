import React from 'react';
import styles from './Home.module.css';
import curvyDivider from '../../assets/images/curvy-divider-large.svg';
import curvyDividerSmall from '../../assets/images/curvy-divider-small.svg';
import Card from '../../components/Card/Card';
import AddCardButton from '../../components/AddCardButton/AddCardButton';
import ShortTextField from '../../components/ShortTextField/ShortTextField';
import StarField from '../../components/StarField/StarField';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import CheckBox from '../../components/CheckBox/CheckBox';
import { useState } from 'react';
import LongTextField from '../../components/LongTextField/LongTextField';
import Dropdown from '../../components/Dropdown/Dropdown';

export default function Home() {
  const [priority, setPriority] = useState(1);
  return (
    <div>
      <h1>Header/logo</h1>
      <section className={styles.hero}>
        <h1 className={styles.title}>14</h1>
        <p className={styles.subtitle}>Active Applications</p>
      </section>

      <img className={styles.small__divider} src={curvyDividerSmall} alt="blue page divider" />
      <img className={styles.divider} src={curvyDivider} alt="blue page divider" />

      <main className={styles.main}>
        <AddCardButton />
        <Card />
        <Card />
        <Card />
        <Card />
      </main>
      {/* <ShortTextField text="Short Text Field" />
      <LongTextField text="Long Text Field" />
      <Dropdown text="Dropdown" />
      <Card />
      <AddCardButton />
      <StarField priority={priority} setPriority={setPriority} />
      <SubmitButton text="Submit" />
      <CheckBox label="Check Box" text="Check Box" /> */}
    </div>
  );
}
