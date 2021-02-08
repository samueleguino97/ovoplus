import { Customer } from "models/Customer";
import { Order } from "models/Order";
import { createContext, ReactNode, useContext } from "react";

type OrderForm = Customer & Order & { order_hour: Date };
const OrderContext = createContext<any>({});

type OrderProviderProps = {
  children: ReactNode;
  orderForm: Customer & { isDelivery?: boolean; completedOrder: any };
};

export function OrderProvider({ children, orderForm }: OrderProviderProps) {
  return (
    <OrderContext.Provider value={orderForm}>{children}</OrderContext.Provider>
  );
}

export function useOrderState(): OrderForm & {
  isDelivery?: boolean;
  completedOrder: any;
} {
  const orderContext = useContext(OrderContext);
  return orderContext;
}
