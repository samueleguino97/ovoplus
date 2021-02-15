import useDb from "@hooks/useDb";
import useItems from "@hooks/useItems";
import {
  Button,
  Card,
  Col,
  DatePicker,
  Descriptions,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Select,
  Space,
  Table,
  Typography,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { Option } from "antd/lib/mentions";
import {
  useOrdersQuery,
  useRoutesQuery,
  useUpdateOrderMutation,
} from "generated/graphql";
import { Item } from "models/Item";
import { route } from "next/dist/next-server/server/router";
import React, { useEffect, useMemo, useState } from "react";
import { sortBy } from "utils/sortBy";

function OrderHistoryPage() {
  const [res] = useOrdersQuery();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [{ data }] = useRoutesQuery();
  const [form] = useForm();
  const [, completeOrder] = useUpdateOrderMutation();
  const routes = data ? data.delivery_routes : [];
  async function printAndSubmit(order_id: number) {
    const res = await completeOrder({
      ...form.getFieldsValue(),
      status: "completed",
      programmed_date: form.getFieldValue("programmed_date").toDate(),
      id: order_id,
    });
    console.log(res);
    window.print();
  }
  return (
    <div style={{ padding: 24 }}>
      <Typography.Title>Historial de Pedidos</Typography.Title>
      <Row gutter={10} style={{ marginBottom: 24 }}>
        <Col md={24}>
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Busca Pedidos"
            size="large"
          />
        </Col>
      </Row>

      <Table
        dataSource={
          res?.data?.delivery_order
            .filter((i) => i.status !== "completed")
            .sort(sortBy("id"))
            .map((i) => ({ ...i, key: i.id })) || []
        }
        pagination={{ pageSize: 6 }}
        expandable={{
          expandedRowRender: (record) => (
            <Row gutter={6}>
              <Col md={12}>
                <Card>
                  <Typography.Title level={3}>Productos</Typography.Title>
                  <Table
                    size="small"
                    pagination={{
                      hideOnSinglePage: true,
                      pageSize: record.items.length + 1,
                    }}
                    rowClassName={(item) =>
                      item.name === "Total" ? "bold" : ""
                    }
                    dataSource={[
                      ...record.items.map((i) => ({ ...i, name: i.item.name })),
                      {
                        name: "Total",
                        price: record.items.reduce(
                          (map, next) => map + +next.price,
                          0
                        ),
                        quantity: record.items.reduce(
                          (map, next) => map + +next.quantity,
                          0
                        ),
                        total: record.items.reduce(
                          (map, next) => map + +next.quantity * next.price,
                          0
                        ),
                      },
                    ]}
                    columns={[
                      {
                        title: "Nombre del Item",
                        dataIndex: "name",
                      },

                      {
                        title: "Precio\\U",
                        key: "price",
                        render: (_, record) => "Bs. " + record.price,
                      },
                      {
                        title: "Cant.",
                        key: "quantity",
                        dataIndex: "quantity",
                      },
                      {
                        title: "Precio Total",
                        render: (item) => (
                          <span>
                            {(
                              item.total || item.quantity * item.price
                            )?.toFixed(2)}{" "}
                            <span style={{ opacity: 0.5 }}>Bs.</span>
                          </span>
                        ),
                      },
                    ]}
                  />
                </Card>
              </Col>
              <Col md={12}>
                <Card>
                  <Typography.Title level={3}>
                    Informacion del Cliente
                  </Typography.Title>
                  <Typography.Title level={5}>
                    {record.customer.full_name}
                  </Typography.Title>
                  <Form onFinish={() => printAndSubmit(record.id)} form={form}>
                    <Form.Item label="Fecha de Entrega" name="programmed_date">
                      <DatePicker placeholder="Fecha de Entrega" />
                    </Form.Item>

                    <Form.Item label="Hora de Entrega" name="order_time_of_day">
                      <Select placeholder="Hora de Entrega">
                        <Select.Option value="morning">Mañana</Select.Option>
                        <Select.Option value="afternoon">Tarde</Select.Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Seleccionar Ruta" name="route_id">
                      <Select
                        placeholder="Seleccionar Ruta"
                        style={{ width: "100%" }}
                      >
                        {routes?.map((r) => (
                          <Select.Option value={r.id.toString()}>
                            {r.name}
                          </Select.Option>
                        ))}
                      </Select>
                    </Form.Item>
                    <Button htmlType="submit" type="primary">
                      Programar e Imprimir
                    </Button>
                  </Form>
                </Card>
              </Col>
            </Row>
          ),
          rowExpandable: (record) => !!record.items.length,
        }}
        columns={[
          { title: "Id", dataIndex: "id", key: "id" },
          { title: "Fecha", dataIndex: "order_date", key: "order_date" },

          {
            title: "A Cargo",
            dataIndex: "person_in_charge",
            key: "person_in_charge",
          },
          {
            title: "Total",
            dataIndex: "total",
            key: "total",
            render: (_, rec) => {
              return rec.items
                .reduce((map, next) => map + +next.quantity * next.price, 0)
                ?.toFixed(2);
            },
          },
        ]}
      />
    </div>
  );
}

export default OrderHistoryPage;
