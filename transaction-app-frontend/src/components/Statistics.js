// src/components/Statistics.js

import React from 'react';

const Statistics = ({ totalSales, soldItems, unsoldItems }) => {
    return (
        <div>
            <h2>Statistics</h2>
            <p>Total Sales: ${totalSales}</p>
            <p>Sold Items: {soldItems}</p>
            <p>Unsold Items: {unsoldItems}</p>
        </div>
    );
};

export default Statistics;
