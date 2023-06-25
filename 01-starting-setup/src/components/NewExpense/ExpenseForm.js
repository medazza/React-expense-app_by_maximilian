import React, {useState} from 'react';
import './ExpenseForm.css';


const ExpenseForm = (props) => {
    
    const [enteredTitle, setEnterdTitle] = useState('');
    const [enteredAmount, setEnterdAmount] = useState('');
    const [enteredDate, setEnterdDate] = useState('');

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate
    // })
    const titleChangeHandler = (e) => {
        setEnterdTitle(e.target.value);
        // setUserInput((prevState) => {
        //     return {...userInput,enteredTitle: e.target.value};
        // });
    };
    const amountChangeHandler = (e) => {
        setEnterdAmount(e.target.value);
        // setUserInput((prevState) => {
        //     return {...userInput,enteredAmount: e.target.value};
        // });
    };
    const dateChangeHandler = (e) => {
        setEnterdDate(e.target.value);
        // setUserInput((prevState) => {
        //     return {...userInput,enteredDate: e.target.value};
        // });
    };

    const submitHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnterdAmount('');
        setEnterdDate('');
        setEnterdTitle('');
    };
    
    return(
        <form onSubmit = {submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                    type="text"
                    name="title"
                    onChange={titleChangeHandler}
                    value={enteredTitle}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    name="amount"
                    onChange={amountChangeHandler}
                    value={enteredAmount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                    type="date"
                    name="date"
                    onChange={dateChangeHandler}
                    value={enteredDate}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" >
                    Cancel
                </button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;