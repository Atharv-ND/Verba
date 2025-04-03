import React from 'react';
import './Transaction.css';

const Transaction = ({ name, date, amount }) => {
  return (
    <div className="transaction">
      <h3 className="transaction-name">{name}</h3>
      <p className="transaction-date">{date}</p>
      <p className="transaction-amount">Rs. {amount}</p>
    </div>
  );
};

export default Transaction;