import { Item } from "./Item";

export interface Order {
  customer: string;
  items: (Partial<Item> & {
    price_per_unit: Number;
    quantity: Number;
  })[];
  payment_type: string;
  clarification: string;
  total: Number;
  order_date: Date;
  order_time_of_day: string;
  person_in_charge: string;
  id: string;
}
