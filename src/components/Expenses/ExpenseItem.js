import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

//usando props - dados que vem lá do arquivo App.js
const ExpenseItem = props => {
  const [title, setTitle] = useState(props.title);
  console.log('Expense item evaluated ');

  const clickHandler = () => {
    setTitle('Updated!');
    console.log('opa');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.value}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};
export default ExpenseItem;
