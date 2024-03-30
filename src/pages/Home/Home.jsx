import React from 'react';
import Card from '../../components/Card/Card';
import AddCardButton from '../../components/AddCardButton/AddCardButton';
import ShortTextField from '../../components/ShortTextField/ShortTextField';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <ShortTextField text="Home Page"/>
      <Card />
      <AddCardButton />
    </div>
  );
}
