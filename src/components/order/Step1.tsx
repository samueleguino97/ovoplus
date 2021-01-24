import useDb from "@hooks/useDb";
import { Button, Input, message, Modal, Row, Typography } from "antd";
import { Form } from "antd";
import {
  CustomerDocument,
  CustomerQuery,
  CustomerQueryVariables,
  useCreateCustomerMutation,
} from "generated/graphql";
import { Customer } from "models/Customer";
import React, { useState } from "react";
import { StepProps } from "types/types";
import { useClient } from "urql";

function Step1({ onNextStep }: StepProps) {
  const [form] = Form.useForm();
  const [modalForm] = Form.useForm();
  const db = useDb();
  const [loading, setLoading] = useState<boolean>(false);
  const [creatingCustomer, setCreatingCustomer] = useState<boolean>(false);
  const [modalLoading, setModalLoading] = useState<boolean>(false);
  const [, insertCustomer] = useCreateCustomerMutation();

  const client = useClient();
  async function searchForClient(value) {
    setLoading(true);
    client
      .query<CustomerQuery, CustomerQueryVariables>(CustomerDocument, {
        phone: value.phone,
      })
      .toPromise()
      .then((result) => {
        const clientFound = result.data.delivery_customer[0];
        if (!!clientFound) {
          setLoading(false);
          onNextStep(clientFound);
        } else {
          message.warning("Porfavor registra la informacion del nuevo cliente");
          setCreatingCustomer(true);
        }
      });
  }

  async function createNewClient() {
    setModalLoading(true);
    const res = await insertCustomer({
      customer_info: modalForm.getFieldsValue(),
    });
    console.log(res);

    setModalLoading(false);
    onNextStep(res.data.insert_delivery_customer_one);
    setCreatingCustomer(false);
  }

  return (
    <Row justify="center">
      <Form form={form} onFinish={searchForClient}>
        <Typography.Title>
          Ingresa el numero de celular del cliente
        </Typography.Title>
        <Form.Item name="phone">
          <Input placeholder="Numero del cliente" disabled={loading} />
        </Form.Item>
        <Button htmlType="submit" loading={loading} type="primary" size="large">
          Buscar Cliente
        </Button>
      </Form>

      <Modal
        title="Crear Cliente Nuevo"
        visible={creatingCustomer}
        onOk={createNewClient}
        confirmLoading={modalLoading}
        onCancel={() => {
          setCreatingCustomer(false);
          setLoading(false);
        }}
      >
        <Form layout="vertical" form={modalForm}>
          <Form.Item
            label="Numero de Celular"
            initialValue={form.getFieldValue("phone")}
            name="phone"
          >
            <Input disabled placeholder="Numero de Celular" />
          </Form.Item>
          <Form.Item label="Nombre Completo" name="full_name">
            <Input placeholder="Nombre Completo" disabled={modalLoading} />
          </Form.Item>
          <Form.Item label="NIT/CI" name="NIT">
            <Input placeholder="NIT/CI" disabled={modalLoading} />
          </Form.Item>
          <Form.Item label="Direccion" name="address">
            <Input placeholder="Direccion" disabled={modalLoading} />
          </Form.Item>
        </Form>
      </Modal>
    </Row>
  );
}

export default Step1;
