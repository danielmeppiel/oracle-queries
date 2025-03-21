import axios from 'axios';
import { TimeRange, SortBy } from '../components/BestSellingProducts';

interface FetchBestSellingProductsParams {
  timeRange: TimeRange;
  sortBy: SortBy;
  categoryId: number | null;
}

export const fetchBestSellingProducts = async ({
  timeRange,
  sortBy,
  categoryId,
}: FetchBestSellingProductsParams) => {
  const response = await axios.get('/api/best-selling-products', {
    params: {
      timeRange,
      sortBy,
      categoryId,
    },
  });
  return response.data;
};