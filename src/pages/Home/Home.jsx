import React from 'react';
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
      <h1>Home page</h1>
      <ShortTextField text="Short Text Field"/>
      <LongTextField text="Long Text Field"/>
      <Dropdown text="Dropdown"/>
      <Card />
      <AddCardButton />
      <StarField priority={priority} setPriority={setPriority} />
      <SubmitButton text="Submit" />
      <CheckBox label="Check Box" text="Check Box" />
    </div>
  );
}
