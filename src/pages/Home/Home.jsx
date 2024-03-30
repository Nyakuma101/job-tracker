import React from 'react';
import Card from '../../components/Card/Card';
import AddCardButton from '../../components/AddCardButton/AddCardButton';
import ShortTextField from '../../components/ShortTextField/ShortTextField';
import Company from '../../components/Company/Company';

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <ShortTextField text="Home Page"/>
      <Company text="Company"/>
      <Card />
      <AddCardButton />
    </div>
  );
}
