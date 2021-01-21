import React, { useEffect, useState } from "react";
import FormInput from "@components/form/FormInput";
import { Col, Form, Row, Steps } from "antd";
import Card from "@components/general/Card";
import Button from "@components/general/Button";
import Modal from "react-modal";
import { Order } from "models/Order";
import { Customer } from "models/Customer";
import Autocomplete from "react-autocomplete";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Item } from "models/Item";
import useDb from "@hooks/useDb";
import { format } from "date-fns";
import Step1 from "@components/order/Step1";
import Step2 from "@components/order/Step2";
import { OrderProvider } from "context/OrderContext";
import Step3 from "@components/order/Step3";
import Step4 from "@components/order/Step4";

const orderRegistrationSteps = [
  { title: "Busqueda del cliente", Content: Step1 },
  { title: "Verificacion de Datos", Content: Step2 },
  { title: "Añadir productos", Content: Step3 },
  { title: "Terminar Orden", Content: Step4 },
];

function OrderPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const [customer, setCustomer] = useState<Customer>();

  const [items, setItems] = useState<Item[]>([]);
  const db = useDb();
  useEffect(() => {
    db.get<Item>("items").then(setItems);
  }, []);
  const { Content } = orderRegistrationSteps[currentStep];

  async function placeOrder(orderItems: Item[], customer: Customer) {
    await db.create<Order>("orders", {
      customer,
      items: orderItems,
      person_in_charge: "",
      payment_type: "cash",
      order_time_of_day: "morning",
      order_date: new Date(),
      clarification: "",
    });
    for (let index = 0; index < orderItems.length; index++) {
      const item = orderItems[index];
      const orgItem = items.find((i) => i.id === item.id);
      await db.update<Item>("items", item.id, {
        quantity: orgItem.quantity - item.quantity,
      });

      await db.create("inventory_history", {
        type: "taken",
        item: item.id,
        quantity: item.quantity,
      });
    }
  }

  async function handleNextStep(value: any) {
    switch (currentStep) {
      case 0:
        setCustomer(value);
        setCurrentStep((curr) => curr + 1);
        break;
      case 1:
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
        <OrderProvider orderForm={{ ...customer }}>
          <Content onNextStep={handleNextStep} />
        </OrderProvider>
      </Row>
    </div>
  );
}

export default OrderPage;
