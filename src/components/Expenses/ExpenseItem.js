import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (expenseprops) => {
    const [title, setTitle] = useState(expenseprops.title);

    // let title = expenseprops.title;

    const clickHandler = () => {
        setTitle('Updated');
        console.log('Clicked!');
    } 

    return (
    <Card className='expense-item'>
        <ExpenseDate date={expenseprops.date}/>
        <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expenseprops.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>);
}
export default ExpenseItem;
