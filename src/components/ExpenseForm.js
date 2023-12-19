import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [item, setItem] = useState({
    name: '',
    amount: '',
    date: '',
    category: '',
  });
  const {myTotalPrice} = props;
  console.log(myTotalPrice);

  const handleNameChange = (e) => {
    setItem({ ...item, name: e.target.value });
  };

  const handleAmountChange = (e) => {
    setItem({ ...item, amount: e.target.value });
  };

  const handleDateChange = (e) => {
    setItem({ ...item, date: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setItem({ ...item, category: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(item));
  };

  return (
    <div id="expenseForm">
      <form onSubmit={onSubmit}>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="Enter Total Amount"
          value={myTotalPrice}
          onChange={handleAmountChange}
        />

        <label htmlFor="date">Spend Date</label>
        <input
          type="date"
          id="date"
          name="date"
          placeholder="Enter date"
          value={item.date}
          onChange={handleDateChange}
        />

        <label htmlFor="category">Category</label>
        <select
          id="category"
          name="category"
          value={item.category}
          onChange={handleCategoryChange}
        >
          <option value="">Select</option>
          <option value="Food">Food</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Academic">Academic</option>
        </select>

        <input type="submit" value="Submit" id="processed" />
      </form>
    </div>
  );
};

export default ExpenseForm;
