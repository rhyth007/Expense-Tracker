import './NewExpenseForm.css';
import { useState } from 'react';
const NewExpenseForm = (props)=>{
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [isNew,SetisNew] = useState(false);
    const [isNewNew,SetisNewNew] = useState(true);
    const titleChangeHandler = (event)=>{
        setEnteredTitle(event.target.value);

 };
 const amountChangeHandler = (event)=>{
    setEnteredAmount(event.target.value);

};
const dateChangeHandler = (event)=>{
    setEnteredDate(event.target.value);
};
const submitHandler =(event) =>{
    event.preventDefault();

    const ExpenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
};
   console.log(ExpenseData);
   props.onSaveExpenseData(ExpenseData);
   setEnteredTitle("");
   setEnteredAmount("");
   setEnteredDate("");
}

const AddNew = ()=>{
    
    SetisNew(true);
    SetisNewNew(false);

}
const AddCancel =()=>{
    SetisNew(false)
    SetisNewNew(true)

}
    return ( 
    <form  onSubmit={submitHandler}>
   {isNew &&<div className="new-expense__controls">
  
     <div className="new-expense__control">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
    </div>
    <div className="new-expense__control">
        <label >Amount</label>
        <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
    </div>
    <div className="new-expense__control">
        <label >Date</label>
        
        <input type="date" min="2021-01-01" max="2030-12-31" value={enteredDate} onChange={dateChangeHandler}/>
    </div>

    </div>
   }
     {isNew &&<div className="new-expense__actions">
         <button type="submit" onClick={AddCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
    </div> }
   
    {isNewNew && <div className="new-expense_button">
        <button  type="submit" onClick={AddNew}>Add  New Expense</button>
    </div>}


 </form>
   );

}
export default NewExpenseForm;