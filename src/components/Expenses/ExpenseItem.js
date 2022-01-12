import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (expenseprops) => {
    const clickHandler = () =>{
        console.log('Clicked!');
    } 

    return (
    <Card className='expense-item'>
        <ExpenseDate date={expenseprops.date}/>
        <div className='expense-item__description'>
        <h2>{expenseprops.title}</h2>
        <div className='expense-item__price'>${expenseprops.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>);
}
export default ExpenseItem;
