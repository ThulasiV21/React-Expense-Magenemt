import {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import './Expenses.css';

const Expenses = (expensesprops) => {
    const [filteredYear, setFilteredYear] = useState('2020');
    
    const expenseItems = expensesprops.expenseitems;

    const filteredExpenses = expenseItems.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeOfFilter={filterChangeHandler}/>
            {filteredExpenses.map((expense) => (
            <ExpenseItem
            key={expense.id} 
            title={expense.title} 
            amount={expense.amount} 
            date={expense.date}
            />))}
        </Card>
    );
};


export default Expenses;