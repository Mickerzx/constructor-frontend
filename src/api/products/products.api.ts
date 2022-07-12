// Core
import axios from 'axios';

// Interfaces
import { ProductsQuery } from './interfaces/query.interface';
import { ProductsResponse } from './interfaces/products-response.interface';

// Utils
import { getProtocol } from '../../utils/getProtocol';

export const fetchProducts = async (host: string, query: ProductsQuery): Promise<ProductsResponse> => {
  const { data } = await axios.get<ProductsResponse>(`${getProtocol()}://${host}/api/shop/public/products`, {
    params: query,
  });

  return data;
};
