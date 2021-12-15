import './App.css';
import React,{useState} from 'react';
import Expense from './components/Expense';
import NewExpense from './components/NewExpense/NewExpenese';
function App() {
  const DUMMY_EXPENSES = [
   {
        id: 'e1',
        title: 'Tissue Paper',
        amount: 94.12,
        date: new Date(2021, 7, 14),
      },
      { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2020, 2, 12) },
      {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2022, 2, 28),
      },
      {
        id: 'e4',
        title: 'New Desk (Wooden)',
        amount: 450,
        date: new Date(2023, 5, 12),
      },
    ];
   
  const [exp, setExp] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense)=>{
    setExp(prevExp =>{
      return [expense,...prevExp];
    });

  };
  return (
    <div className="App">
    
    <NewExpense onAddExpense ={addExpenseHandler}/>
    <Expense expenses ={exp}></Expense>
  
   
    </div>
  );
}

export default App;
