import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { SortBy } from './index';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ProductData {
  name: string;
  quantity: number;
  revenue: number;
  category: string;
}

interface ChartProps {
  data: ProductData[];
  sortBy: SortBy;
}

export const Chart: React.FC<ChartProps> = ({ data, sortBy }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: `Best Selling Products by ${sortBy === 'quantity' ? 'Quantity' : 'Revenue'}`,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: sortBy === 'quantity' ? 'Units Sold' : 'Revenue ($)',
        },
      },
    },
  };

  const chartData = {
    labels: data.map(item => item.name),
    datasets: [
      {
        label: sortBy === 'quantity' ? 'Units Sold' : 'Revenue',
        data: data.map(item => sortBy === 'quantity' ? item.quantity : item.revenue),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div className="chart-container" style={{ height: '400px', width: '100%' }}>
      <Bar options={options} data={chartData} />
    </div>
  );
};