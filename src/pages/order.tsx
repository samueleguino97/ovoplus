import React, { useEffect, useState } from "react";
import FormInput from "@components/form/FormInput";
import { Col, Form, Row, Steps } from "antd";
import Card from "@components/general/Card";
import Button from "@components/general/Button";
import Modal from "react-modal";
import { Order } from "models/Order";
import { Customer } from "models/Customer";
import * as yup from "yup";
import { Item } from "models/Item";
import useDb from "@hooks/useDb";
import { format } from "date-fns";
import Step1 from "@components/order/Step1";
import Step2 from "@components/order/Step2";
import { OrderProvider } from "context/OrderContext";
import Step3 from "@components/order/Step3";
import Step4 from "@components/order/Step4";
import {
  useCreateOrderMutation,
  useCreateOrderItemsMutation,
  useIncrementItemMutation,
  useItemsQuery,
} from "generated/graphql";
import { auth } from "config/firebase";

const orderRegistrationSteps = [
  { title: "Busqueda del cliente", Content: Step1 },
  { title: "Verificacion de Datos", Content: Step2 },
  { title: "Añadir productos", Content: Step3 },
  { title: "Terminar Orden", Content: Step4 },
];

function OrderPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const [customer, setCustomer] = useState<Customer>();
  const [isDelivery, setIsDelivery] = useState(true);
  const [clarification, setClarification] = useState("");

  const [result] = useItemsQuery();
  const items = result.data?.delivery_items || [];
  const { Content } = orderRegistrationSteps[currentStep];
  const [, createOrder] = useCreateOrderMutation();
  const [, createOrderItems] = useCreateOrderItemsMutation();
  const [, incrementItemQuantity] = useIncrementItemMutation();

  const [completedOrder, setCompletedOrder] = useState<any>({});

  async function placeOrder(orderItems: any[], customer: Customer) {
    const res = await createOrder({
      clarification,
      order_date: new Date(),
      order_time_of_day: "",
      payment_type: "cash",
      person_in_charge: auth().currentUser.email,
      customer_id: +customer.id,
      total: orderItems.reduce((map, next) => {
        return map + +next.price;
      }, 0),
    });
    const newOrder = res.data.insert_delivery_order_one;
    await createOrderItems({
      objects: orderItems.map((i) => ({
        order_id: newOrder.id,
        item_id: i.id,
        price: i.price,
        quantity: i.quantity,
      })),
    });
    setCompletedOrder({
      ...newOrder,
      customer,
      items: orderItems.map((i) => ({
        order_id: newOrder.id,
        item_id: i.id,
        price: i.price,
        quantity: i.quantity,
        name: i.name,
      })),
    });

    for (let index = 0; index < orderItems.length; index++) {
      const item = orderItems[index];
      const orgItem = items.find((i) => i.id === item.id);
      await incrementItemQuantity({ id: +orgItem.id, quantity: item.quantity });
    }
  }

  async function handleNextStep(value: any, step1Delivery: boolean) {
    switch (currentStep) {
      case 0:
        setCustomer(value);
        setIsDelivery(step1Delivery);
        setCurrentStep((curr) => curr + 1);
        break;
      case 1:
        setClarification(value.clarification);
        setCustomer((curr) => ({ ...curr, ...value }));
        setCurrentStep((curr) => curr + 1);
        break;
      case 2:
        await placeOrder(value, customer);
        setCurrentStep((curr) => curr + 1);
        break;
      default:
        break;
    }
  }
  return (
    <div style={{ padding: 32 }}>
      <Steps current={currentStep}>
        {orderRegistrationSteps.map((step) => (
          <Steps.Step key={step.title} title={step.title} />
        ))}
      </Steps>
      <Row
        style={{ height: "calc(100vh - 120px)" }}
        justify="center"
        align="middle"
      >
        <OrderProvider orderForm={{ ...customer, isDelivery, completedOrder }}>
          <Content onNextStep={handleNextStep} />
        </OrderProvider>
      </Row>
    </div>
  );
}

export default OrderPage;
