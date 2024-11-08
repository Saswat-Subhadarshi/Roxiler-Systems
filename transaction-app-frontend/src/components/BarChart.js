// src/components/BarChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({ data }) => {
    const chartData = {
        labels: ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901+'],
        datasets: [
            {
                label: 'Price Range',
                data: data,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Transactions by Price Range',
            },
        },
        scales: {
            x: {
                type: 'category',
                title: {
                    display: true,
                    text: 'Price Range',
                },
            },
            y: {
                type: 'linear',
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'Number of Items',
                },
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BarChart;
