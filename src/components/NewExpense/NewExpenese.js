import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';
const NewExpense = (props) =>{
    const onSaveExpenseDataHandler =(enteredExpenseData)=>{
        
        const ExpenseData={
            ...enteredExpenseData,
            id: Math.random().toString()

        };
        props.onAddExpense(ExpenseData);


    }

    return (
   <div className="new-expense">
   <NewExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>

   </div>
   );
}
export default NewExpense;