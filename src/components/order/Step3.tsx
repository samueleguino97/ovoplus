import useDb from "@hooks/useDb";
import {
  AutoComplete,
  Button,
  Card,
  Col,
  InputNumber,
  Row,
  Table,
  Typography,
} from "antd";
import { Form } from "antd";
import { useOrderState } from "context/OrderContext";
import { id } from "date-fns/locale";
import { useItemsQuery } from "generated/graphql";
import React, { useState } from "react";
import { StepProps } from "types/types";
import { sortBy } from "utils/sortBy";

function Step3({ onNextStep }: StepProps) {
  const [form] = Form.useForm();
  const orderForm = useOrderState();
  const [autocompleteValue, setValue] = useState<string>("");

  const [loading, setLoading] = useState<boolean>(false);
  const [res] = useItemsQuery();
  const items = res.data?.delivery_items || [];
  const [orderItems, setOrderItems] = useState<
    {
      name: string;
      price: number;
      quantity: number;
      total: number;
      id: string;
    }[]
  >([]);

  function addItem(item) {
    setOrderItems([
      {
        name: item.name,
        quantity: 1,
        price: orderForm.isDelivery ? item.delivery_price : item.store_price,
        total: orderForm.isDelivery ? item.delivery_price : item.store_price,
        id: item.id,
      },
      ...orderItems,
    ]);
    setValue("");
  }

  function modifyItem(itemId, field, value) {
    const oldItems = [...orderItems];
    const index = oldItems.findIndex((item) => item.id === itemId);
    oldItems[index] = { ...oldItems[index], [field]: value };
    setOrderItems(oldItems);
  }

  return (
    <Row
      style={{ width: "100%", height: "100%" }}
      justify="center"
      align="middle"
      gutter={12}
    >
      <Col md={8}>
        <Form layout="vertical" form={form}>
          <Typography.Title level={3}>Ingresa la Orden</Typography.Title>
          <Typography.Paragraph>
            Busca los items que quieras agregar a la orden
          </Typography.Paragraph>

          <AutoComplete
            options={items
              .filter(
                (i) =>
                  i.name
                    .toLowerCase()
                    .includes(autocompleteValue.toLowerCase()) &&
                  !orderItems.find((it) => +it.id === +i.id)
              )
              .sort(sortBy("id"))
              .map((item) => ({
                value: item.name,
                id: item.id,
                ...item,
              }))}
            onSelect={(value, option) => addItem(option)}
            placeholder="Items"
            disabled={loading}
            value={autocompleteValue}
            onChange={setValue}
            style={{ width: "100%" }}
          />
        </Form>
      </Col>
      <Col style={{ height: "100%", padding: 24 }} md={16}>
        <Row justify="center">
          <Typography.Title>Resumen de la orden</Typography.Title>
        </Row>
        <Table
          size="small"
          dataSource={orderItems}
          pagination={{ pageSize: 7 }}
          columns={[
            { title: "Nombre del Item", dataIndex: "name" },

            {
              title: "Precio\\U",
              key: "price",
              render: (item) => (
                <InputNumber
                  onChange={(v) => modifyItem(item.id, "price", v)}
                  value={item.price}
                />
              ),
            },
            {
              title: "Cant.",
              key: "quantity",
              render: (item) => (
                <InputNumber
                  onChange={(v) => modifyItem(item.id, "quantity", v)}
                  value={item.quantity}
                />
              ),
            },
            {
              title: "Precio Total",
              render: (item) => (
                <span>
                  {(item.quantity * item.price).toFixed(2)}{" "}
                  <span style={{ opacity: 0.5 }}>Bs.</span>
                </span>
              ),
            },
          ]}
          locale={{ emptyText: "Agrega items" }}
        />
        <Card>
          <Row justify="space-between" align="middle">
            <Typography.Title style={{ marginBottom: 0 }} level={2}>
              Total:{" "}
              <span style={{ opacity: 0.5 }}>
                {orderItems.reduce(
                  (map, next) => (map += next.price * next.quantity),
                  0
                )}{" "}
                Bs
              </span>
            </Typography.Title>
            <Button
              onClick={() => {
                setLoading(true);
                onNextStep(orderItems);
              }}
              loading={loading}
              size="large"
              type="primary"
            >
              {" "}
              Completar Order
            </Button>
          </Row>
        </Card>
      </Col>
    </Row>
  );
}

export default Step3;
