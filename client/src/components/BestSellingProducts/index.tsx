import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { Chart } from './Chart';
import { Filters } from './Filters';
import { fetchBestSellingProducts } from '../../api/productSales';

export type TimeRange = 'week' | 'month' | 'year';
export type SortBy = 'quantity' | 'revenue';

export const BestSellingProducts: React.FC = () => {
  const [timeRange, setTimeRange] = useState<TimeRange>('month');
  const [sortBy, setSortBy] = useState<SortBy>('quantity');
  const [categoryId, setCategoryId] = useState<number | null>(null);

  const { data, isLoading, error } = useQuery(
    ['bestSellingProducts', timeRange, sortBy, categoryId],
    () => fetchBestSellingProducts({ timeRange, sortBy, categoryId })
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="best-selling-products">
      <h2>Best Selling Products</h2>
      <Filters
        timeRange={timeRange}
        sortBy={sortBy}
        categoryId={categoryId}
        onTimeRangeChange={setTimeRange}
        onSortByChange={setSortBy}
        onCategoryChange={setCategoryId}
      />
      {data && <Chart data={data} sortBy={sortBy} />}
    </div>
  );
};