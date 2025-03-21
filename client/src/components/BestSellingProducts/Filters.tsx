import React from 'react';
import { TimeRange, SortBy } from './index';

interface FiltersProps {
  timeRange: TimeRange;
  sortBy: SortBy;
  categoryId: number | null;
  onTimeRangeChange: (value: TimeRange) => void;
  onSortByChange: (value: SortBy) => void;
  onCategoryChange: (value: number | null) => void;
}

export const Filters: React.FC<FiltersProps> = ({
  timeRange,
  sortBy,
  categoryId,
  onTimeRangeChange,
  onSortByChange,
  onCategoryChange,
}) => {
  return (
    <div className="filters">
      <div className="filter-group">
        <label>Time Range:</label>
        <select 
          value={timeRange} 
          onChange={(e) => onTimeRangeChange(e.target.value as TimeRange)}
        >
          <option value="week">Last Week</option>
          <option value="month">Last Month</option>
          <option value="year">Last Year</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Sort By:</label>
        <select 
          value={sortBy} 
          onChange={(e) => onSortByChange(e.target.value as SortBy)}
        >
          <option value="quantity">Quantity</option>
          <option value="revenue">Revenue</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Category:</label>
        <select 
          value={categoryId || ''} 
          onChange={(e) => onCategoryChange(e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">All Categories</option>
          {/* Category options will be populated from API */}
        </select>
      </div>
    </div>
  );
};