import '.Expenses/ExpenseDate.css';

function ExpenseDate(dateprops) {
    const month = dateprops.date.toLocaleString('en-US', { month: 'long' });
    const day = dateprops.date.toLocaleString('en-US', { day: '2-digit' });
    const year = dateprops.date.getFullYear();

    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;