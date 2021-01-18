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

type OrderForm = Customer & Order & { order_hour: Date };
const orderFormSchema = yup.object().shape({});

const orderRegistrationSteps = [
  { title: "Busqueda del cliente", Content: Step1 },
  { title: "Verificacion de Datos", Content: Step2 },
  { title: "Añadir productos", Content: Step3 },
  { title: "Terminar Orden", Content: Step4 },
];

function OrderPage() {
  const [currentStep, setCurrentStep] = useState(0);

  const [customer, setCustomer] = useState<Customer>();

  const [orderItems, setOrderItems] = useState<Item[]>([]);
  const [orderSearch, setOrderSearch] = useState<string>("");

  const [items, setItems] = useState<Item[]>([]);
  const db = useDb();
  useEffect(() => {
    db.get<Item>("items").then(setItems);
  }, []);

  const onSubmit: SubmitHandler<OrderForm> = async (data) => {};

  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  function closeModal() {
    setModalIsOpen(false);
  }
  const { Content } = orderRegistrationSteps[currentStep];

  async function placeOrder(items, customer) {
    await db.create<Order>("orders", {
      customer,
      items,
      person_in_charge: "",
      payment_type: "cash",
      order_time_of_day: "morning",
      order_date: new Date(),
      clarification: "",
    });
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
        setOrderItems(value);
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

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Copia y Pega a Whatsapp"
        style={{
          content: {
            border: "1px solid black",
            borderRadius: "4px",
            bottom: "auto",
            minHeight: "10rem",
            left: "50%",
            padding: "2rem",
            position: "fixed",
            right: "auto",
            top: "50%",
            transform: "translate(-50%,-50%)",
            minWidth: "20rem",
            width: "80%",
            maxWidth: "60rem",
          },
        }}
      >
        <h2>Copia y Pega en Whatsapp</h2>
        <pre>{`
cbfh
sdg
s
gd
gsd
gsdg
sd
        `}</pre>
        <Button onClick={closeModal}>Cerrar y Guardar pedido</Button>
      </Modal>
    </div>
  );
}

export default OrderPage;
