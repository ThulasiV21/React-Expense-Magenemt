import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(expensesprops) {
    return (
        <div className="expenses">
            <ExpenseItem 
                date={expensesprops.date}
                title={expensesprops.title}
                amount={expensesprops.amount} /> 
        </div>
    )
};


export default Expenses;