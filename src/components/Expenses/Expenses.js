import {useState} from 'react';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from './ExpensesList';
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
            <ExpensesList items={filteredExpenses}/>
        </Card>
    );
};


export default Expenses;