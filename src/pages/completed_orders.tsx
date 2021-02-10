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
import { Option } from "antd/lib/mentions";
import { useOrdersQuery, useRoutesQuery } from "generated/graphql";
import { Item } from "models/Item";
import { route } from "next/dist/next-server/server/router";
import React, { useEffect, useMemo, useState } from "react";
import { sortBy } from "utils/sortBy";

function OrderHistoryPage() {
  const [res] = useOrdersQuery();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [{ data }] = useRoutesQuery();
  const routes = data ? data.delivery_routes : [];
  function printAndSubmit() {
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
            .filter((i) => i.status === "completed")
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
                            {(item.quantity * item.price).toFixed(2)}{" "}
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
                  <Descriptions title="Informacion de la Orden">
                    <Descriptions.Item>
                      {record.programmed_date}
                    </Descriptions.Item>
                    <Descriptions.Item>
                      {record.order_time_of_day}
                    </Descriptions.Item>
                    <Descriptions.Item>{record.route.name}</Descriptions.Item>
                  </Descriptions>
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
            title: "Estado",
            dataIndex: "status",
            key: "status",
          },
          {
            title: "A Cargo",
            dataIndex: "person_in_charge",
            key: "person_in_charge",
          },
          {
            title: "Total",
            dataIndex: "total",
            key: "total",
          },
        ]}
      />
    </div>
  );
}

export default OrderHistoryPage;
