import React from 'react';
import Card from '../../components/Card/Card';
import AddCardButton from '../../components/AddCardButton/AddCardButton';
import ShortTextField from '../../components/ShortTextField/ShortTextField';
import StarField from '../../components/StarField/StarField';
import CheckBox from '../../components/CheckBox/CheckBox';
import { useState } from 'react';

export default function Home() {
  const [priority, setPriority] = useState(1);
  return (
    <div>
      <h1>Home page</h1>
      <ShortTextField text="Home Page" />
      <Card />
      <AddCardButton />
      <StarField priority={priority} setPriority={setPriority} />
      <CheckBox label="Check Box" text="Check Box" />
    </div>
  );
}
