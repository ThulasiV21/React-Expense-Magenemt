import './ExpenseItem.css';

function ExpenseItem(expenseprops) {

    return (<div className='expense-item'>
        <div>{expenseprops.date.toISOString()}</div>
        <div className='expense-item__description'>
        <h2>{expenseprops.title}</h2>
        <div className='expense-item__price'>${expenseprops.amount}</div>
        </div>
    </div>);
}
export default ExpenseItem;
