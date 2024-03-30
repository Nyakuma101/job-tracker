import React from 'react';
import Card from '../../components/Card/Card';
import AddCardButton from '../../components/AddCardButton/AddCardButton';
import ShortTextField from '../../components/ShortTextField/ShortTextField';
import LongTextField from '../../components/LongTextField/LongTextField';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <LongTextField text="Job Description"/>
      <ShortTextField text="Job Title"/>
      <Card />
      <AddCardButton />
    </div>
  );
}
