import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'

import {useState}  from 'react';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
  const [filteredYear,setFilteredYear] = useState('2020');

  const filterChangedHandler =  selectedYear =>{
   setFilteredYear(selectedYear);
  }
 
  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString()===filteredYear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangefilter={filterChangedHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}
export default Expenses;
