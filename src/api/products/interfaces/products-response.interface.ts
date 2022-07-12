interface Category {
  id: string;
  title: string;
}

interface Price {
  set_at: Date;
  value: number;
}

interface Warehouse {
  id: string;
  title: string;
}

interface WarehouseForProducts {
  quantity: number;
  created_at: Date;
  updated_at: Date;
  warehouse_id: string;
  product_id: string;
  is_available: boolean;
  tenant_id: string;
  warehouse: Warehouse;
}

interface Property {
  id: string;
  title: string;
  value_primary: string;
  value_secondary?: string;
}

interface Product {
  id: string;
  title: string;
  description: string;
  attachments: string;
  sku: number;
  note?: string;
  created_at: Date;
  updated_at: Date;
  publish: boolean;
  old_price?: number;
  category_id: string;
  label: string;
  tenant_id: string;
  category: Category;
  prices: Price[];
  warehouses: WarehouseForProducts[];
  properties: Property[];
}

export interface ProductsResponse {
  products: Product[];
  count: number;
  page: number;
  limit: number;
}
