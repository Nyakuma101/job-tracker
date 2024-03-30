import React from 'react';
import Card from '../../components/Card/Card';
import AddCardButton from '../../components/AddCardButton/AddCardButton';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Card />
      <AddCardButton />
    </div>
  );
}
