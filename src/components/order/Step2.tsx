import useDb from "@hooks/useDb";
import { Button, Input, message, Modal, Row, Typography } from "antd";
import { Form } from "antd";
import { useOrderState } from "context/OrderContext";
import { useUpdateCustomerMutation } from "generated/graphql";
import { Customer } from "models/Customer";
import React, { useState } from "react";
import { StepProps } from "types/types";

function Step2({ onNextStep }: StepProps) {
  const [form] = Form.useForm();
  const db = useDb();
  const [loading, setLoading] = useState<boolean>(false);
  const [, updateCustomer] = useUpdateCustomerMutation();

  const orderForm = useOrderState();

  async function correctClient(values) {
    setLoading(true);
    await updateCustomer({ id: orderForm.id, ...values });
    setLoading(false);
    onNextStep(values);
  }

  return (
    <Row justify="center">
      <Form layout="vertical" form={form} onFinish={correctClient}>
        <Typography.Title>Verifica la informacion del cliente</Typography.Title>
        <Form.Item
          label="Numero de Celular"
          initialValue={orderForm.cellphone}
          name="cellphone"
        >
          <Input disabled placeholder="Numero de Celular" />
        </Form.Item>
        <Form.Item
          initialValue={orderForm.full_name}
          label="Nombre Completo"
          name="full_name"
        >
          <Input placeholder="Nombre Completo" disabled={loading} />
        </Form.Item>
        <Form.Item initialValue={orderForm.NIT} label="NIT/CI" name="NIT">
          <Input placeholder="NIT/CI" disabled={loading} />
        </Form.Item>
        <Form.Item
          initialValue={orderForm.address}
          label="Direccion"
          name="address"
        >
          <Input placeholder="Direccion" disabled={loading} />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          Todo Correcto
        </Button>
      </Form>
    </Row>
  );
}

export default Step2;
