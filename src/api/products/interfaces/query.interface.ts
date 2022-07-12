export interface ProductsQuery {
  limit?: string;
  page?: string;
  category: string;
  price_min?: string;
  price_max?: string;
  sort?: string;
}
