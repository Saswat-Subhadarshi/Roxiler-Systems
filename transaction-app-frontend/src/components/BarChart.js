import React, { useEffect } from 'react';
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
  useEffect(() => {
    console.log("Data received by BarChart component:", data);
  }, [data]);

  // Static data for testing purposes
  const testData = [50, 100, 150, 200, 250, 300, 350, 400, 450, 500];

  const chartData = {
    labels: ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901+'],
    datasets: [
      {
        label: 'Price Range',
        data: data && data.length === 10 ? data : testData,
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

  return (
    <div style={{ width: '100%', height: '400px' }}>
      {data && data.length ? (
        <Bar data={chartData} options={options} />
      ) : (
        <Bar data={{ ...chartData, datasets: [{ ...chartData.datasets[0], data: testData }] }} options={options} />
      )}
    </div>
  );
};

export default BarChart;