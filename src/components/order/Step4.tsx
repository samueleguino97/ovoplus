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

function Step4({ onNextStep }: StepProps) {
  function copyMessage() {
    navigator.clipboard
      .writeText(
        `cbfh
sdg
s
gd
gsd
gsdg
sd`
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
