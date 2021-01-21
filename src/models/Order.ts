import { Customer } from "./Customer";
import { Item } from "./Item";

export interface Order {
  customer: Customer;
  items: Partial<Item>[];
  payment_type: string;
  clarification: string;
  total: Number;
  order_date: Date;
  order_time_of_day: string;
  person_in_charge: string;
  id: string;
}
