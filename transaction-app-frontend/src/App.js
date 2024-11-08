import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';

const App = () => {
    const [month, setMonth] = useState('March');
    const [transactions, setTransactions] = useState([]);
    const [statistics, setStatistics] = useState({ totalSales: 0, soldItems: 0, unsoldItems: 0 });
    const [barData, setBarData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchTransactions();
        fetchStatistics();
        fetchBarChartData();
    }, [month, page]);

    const fetchTransactions = async (search = '') => {
        const response = await axios.get(`http://localhost:5000/api/transactions`, {
            params: { month, page, search },
        });
        setTransactions(response.data);
    };

    const fetchStatistics = async () => {
        const response = await axios.get(`http://localhost:5000/api/statistics`, {
            params: { month },
        });
        setStatistics(response.data);
    };

    const fetchBarChartData = async () => {
        const response = await axios.get(`http://localhost:5000/api/bar-chart`, {
            params: { month },
        });
        setBarData(response.data);
    };

    const handleSearch = (searchText) => {
        fetchTransactions(searchText);
    };

    const handlePageChange = (direction) => {
        setPage((prevPage) => (direction === 'next' ? prevPage + 1 : Math.max(prevPage - 1, 1)));
    };

    return (
        <div>
            <h1>Transaction Dashboard</h1>
            <select value={month} onChange={(e) => setMonth(e.target.value)}>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m) => (
                    <option key={m} value={m}>{m}</option>
                ))}
            </select>

            <TransactionTable
                month={month}
                onSearch={handleSearch}
                onPageChange={handlePageChange}
                transactions={transactions}
            />

            <Statistics
                totalSales={statistics.totalSales}
                soldItems={statistics.soldItems}
                unsoldItems={statistics.unsoldItems}
            />

            <BarChart data={barData} />
        </div>
    );
};

export default App;
