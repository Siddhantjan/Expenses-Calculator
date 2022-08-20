import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import NewExpense from "./components/createExpense/NewExpense";
import {useState} from 'react'
 const DUMMY_EXPENSES = [];
const App = ()=>{
 const [expenses,setExpenses] =  useState(DUMMY_EXPENSES);
  const addExpenseHandler = expense =>{
   setExpenses((prevExpenses)=>{
    return [expense,...prevExpenses];
   });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
