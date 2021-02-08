import useDb from "@hooks/useDb";
import {
  AutoComplete,
  Button,
  Card,
  Col,
  Input,
  InputNumber,
  List,
  message,
  Modal,
  Result,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import { Form } from "antd";
import { useOrderState } from "context/OrderContext";
import { Customer } from "models/Customer";
import { Item } from "models/Item";
import React, { useEffect, useState } from "react";
import { StepProps } from "types/types";
import { SmileOutlined } from "@ant-design/icons";
import Link from "next/link";
import { sortBy } from "utils/sortBy";

function Step4({ onNextStep }: StepProps) {
  const { completedOrder, customer } = useOrderState();
  console.log(completedOrder);
  function copyMessage() {
    navigator.clipboard
      .writeText(
        `*No de Pedido* ${completedOrder.id}
${completedOrder.customer.full_name}
*Factura*
Nom:${completedOrder.customer.full_name}
Nit:${completedOrder.customer.NIT}
*Pedido*
${completedOrder.items
  .sort(sortBy("id"))
  .map((i) => `${i.quantity} ${i.name}: ${i.price * i.quantity}Bs`)
  .join("\n")}
*Total*
${completedOrder.items.reduce(
  (map, next) => map + next.price * next.quantity,
  0
)}Bs
*Cel:*
${completedOrder.customer.phone}
*Ubicacion:*
${completedOrder.customer.address}
`
      )
      .then(
        function () {
          message.info("Mensaje Copiado");
        },
        function () {
          /* clipboard write failed */
        }
      );
  }

  return (
    <Result
      icon={<SmileOutlined />}
      title="Perfecto! su pedido fue registrado exitosamente!"
      extra={
        <Space>
          <Link href="/orders">
            <a>
              <Button type="primary">Volver al principio</Button>
            </a>
          </Link>
          <Button onClick={copyMessage} type="ghost">
            Copiar pedido a whatsapp
          </Button>
        </Space>
      }
    />
  );
}

export default Step4;
