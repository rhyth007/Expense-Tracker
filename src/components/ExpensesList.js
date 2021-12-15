import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

// const myStyle ={
//     color : "white",
//     textAlign: 'center'
// }
const ExpensesList = (props) => {

    if(props.items.length === 0)
    {
        return <div className ="expenses-list__fallback">No expenses Found!!</div>
    }
    
    return(
    <ul className="expenses-list">

     {props.items.map((exp)=>(
         <ExpenseItem 
           key = {exp.id}
           title ={exp.title}
           date = {exp.date}
           amount = {exp.amount}
         />

     ))}

    </ul>
    );

};
export default ExpensesList;
