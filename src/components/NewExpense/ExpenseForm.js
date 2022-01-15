import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const [showExpenseSection, setShowExpenseSection] = useState(false);

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        // Calling the parent's defined event handler and passing args or in this case
        // the args is data object to the parent
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    const showExpenseSectionHandler = (event) => {
        setShowExpenseSection(true);
    }

    const unShowExpenseSectionHandler = (event) => {
        setShowExpenseSection(false);
    }

    const renderExpenseSection = () => {
        if (showExpenseSection) {
            return (<form onSubmit={submitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler}/>
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                    <button onClick={unShowExpenseSectionHandler} type='button'>Cancel</button>
                </div>
            </form>)
        }
    }
    

    let screen = 
    (<div className='new-expense__actions'>
            <button onClick={showExpenseSectionHandler} type='submit'>Add Expense</button>
             {renderExpenseSection()}
        </div>);


        return (
            <div>{screen}</div>     
    )
};

export default ExpenseForm;