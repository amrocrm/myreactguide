import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  return (
    <div className="expenses">
      <ExpenseItem
        date={props.expdate}
        title={props.description}
        amount={props.price}
      />
    </div>
  );
}
export default Expenses;
