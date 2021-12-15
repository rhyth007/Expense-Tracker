import React, { useState } from "react";
import "./Expense.css";
import '../App.css';
import Card from "./Card";
import ExpenseChart from "./ExpensesChart";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
function Expense(props) {
	const [filteredYear, setfilteredYear] = useState("2021");
	const filterChangeHandler = (SelectedYear) => {
		console.log("Expense.js");
		setfilteredYear(SelectedYear);
	};
	const filteredExpenses = props.expenses.filter((expenses)=>{
		return expenses.date.getFullYear().toString() === filteredYear;

	});

	
	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					onSelect={filteredYear}
					onfilterChangeHandler={filterChangeHandler}
				/>
				<ExpenseChart expense={filteredExpenses}/>
				{/* {filteredExpenses.length === 0 ? <p>No Expenses Found.</p> : filteredExpenses.map((exp)=>(
					<ExpenseItem
					key={exp.id}
					title ={exp.title}
					amount = {exp.amount} date={exp.date}/>
				))} */}

				{/* { filteredExpenses.length === 0 &&  <p>No Expenses Found.</p> }
				{filteredExpenses.length > 0 && 
				    filteredExpenses.map((exp)=>(
						<ExpenseItem
					key={exp.id}
					title ={exp.title}
					amount = {exp.amount} date={exp.date}
						/>
					))
				 } */}
				 <ExpensesList items = {filteredExpenses}/>
				 
				
			
			</Card>
		</div>
	);
}
export default Expense;
