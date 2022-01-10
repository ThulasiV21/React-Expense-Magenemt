import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';

function Expenses(expensesprops) {
    const expenseItems = expensesprops.expenseitems;

    return (
        <Card className="expenses">
            <ExpenseItem 
                title={expenseItems[0].title} 
                amount={expenseItems[0].amount} 
                date={expenseItems[0].date}
            />
            <ExpenseItem 
                title={expenseItems[1].title} 
                amount={expenseItems[1].amount} 
                date={expenseItems[1].date}
            />
            <ExpenseItem
                title={expenseItems[2].title} 
                amount={expenseItems[2].amount} 
                date={expenseItems[2].date}
            />
            <ExpenseItem 
                title={expenseItems[3].title} 
                amount={expenseItems[3].amount} 
                date={expenseItems[3].date}
            /> 
        </Card>
    )
};


export default Expenses;