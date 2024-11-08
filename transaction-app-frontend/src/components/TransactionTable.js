import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionTable = ({ month, onSearch, onPageChange, transactions }) => {
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        setSearch(e.target.value);
        onSearch(e.target.value);
    };

    const handlePageChange = (direction) => {
        onPageChange(direction);
    };

    return (
        <div>
            <h2>Transactions</h2>
            <input
                type="text"
                placeholder="Search transactions"
                value={search}
                onChange={handleSearch}
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Date of Sale</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction._id}>
                            <td>{transaction.title}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.price}</td>
                            <td>{new Date(transaction.dateOfSale).toLocaleDateString()}</td>
                            <td>{transaction.isSold ? "Sold" : "Not Sold"}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={() => handlePageChange('previous')}>Previous</button>
            <button onClick={() => handlePageChange('next')}>Next</button>
        </div>
    );
};

export default TransactionTable;
