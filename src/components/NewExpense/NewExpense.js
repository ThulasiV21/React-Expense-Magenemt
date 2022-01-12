import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    // Creating developer-defined event handlers to pass on the child component or objects
    // from child components (data) to parent component
    const saveExpenseDataHandler = (enteredexpenseData) => {
        const expenseData = {
            ...enteredexpenseData,
            id: Math.random().toString()
        };
        // Calling the App's (or parent's) event handler
        props.onAddExpense(expenseData);
        console.log(expenseData);
    };
    return (
        <div className="new-expense">
            {/* Defining the event listener here */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );

}

export default NewExpense;