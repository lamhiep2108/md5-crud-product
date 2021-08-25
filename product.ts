import {Category} from '../category/category';

export interface Product {
  id?: number;
  name?: string;
  price?: number;
  quantity?: number;
  color?: string;
  description?: string;
  category: Category[];

}
