import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (expenseprops) => {  

    return (
    <Card className='expense-item'>
        <ExpenseDate date={expenseprops.date}/>
        <div className='expense-item__description'>
        <h2>{expenseprops.title}</h2>
        <div className='expense-item__price'>${expenseprops.amount}</div>
        </div>
    </Card>);
}
export default ExpenseItem;
