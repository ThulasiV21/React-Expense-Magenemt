import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(expensesprops) {
    return (
        <div className="expenses">
            <ExpenseItem 
                title={expensesprops.items[0].title} 
                amount={expensesprops.items[0].amount} 
                date={expensesprops.items[0].date}
            />
            <ExpenseItem 
                title={expensesprops.items[1].title} 
                amount={expensesprops.items[1].amount} 
                date={expensesprops.items[1].date}
            />
            <ExpenseItem
                title={expensesprops.items[2].title} 
                amount={expensesprops.items[2].amount} 
                date={expensesprops.items[2].date}
            />
            <ExpenseItem 
                title={expensesprops.items[3].title} 
                amount={expensesprops.items[3].amount} 
                date={expensesprops.items[3].date}
            /> 
        </div>
    )
};


export default Expenses;