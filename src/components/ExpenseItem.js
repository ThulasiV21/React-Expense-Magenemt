import './ExpenseItem.css';

function ExpenseItem(expenseprops) {
    const month = expenseprops.date.toLocaleString('en-US', { month: 'long' });
    const day = expenseprops.date.toLocaleString('en-US', { day: '2-digit' });
    const year = expenseprops.date.getFullYear();

    return (<div className='expense-item'>
        <div>
            <div>{month}</div>
            <div>{year}</div>
            <div>{day}</div>
        </div>
        <div className='expense-item__description'>
        <h2>{expenseprops.title}</h2>
        <div className='expense-item__price'>${expenseprops.amount}</div>
        </div>
    </div>);
}
export default ExpenseItem;
