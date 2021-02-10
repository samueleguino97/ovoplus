import {
  Button,
  Col,
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
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useItemsQuery,
  useUpdateItemMutation,
  useIncrementItemMutation,
  useRoutesQuery,
  useCreateRouteMutation,
  useRouteOrdersQuery,
  useUpdateOrderMutation,
} from "generated/graphql";
import React, { useMemo, useState } from "react";
import { groupBy } from "utils/groupBy";
import { sortBy } from "utils/sortBy";

function RoutesPage() {
  const [, insertRoute] = useCreateRouteMutation();
  const [, updateOrder] = useUpdateOrderMutation();
  const [, update] = useUpdateItemMutation();
  const [, increment] = useIncrementItemMutation();
  const [{ data }] = useRoutesQuery();

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [creatingItem, setCreatingItem] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

  const [itemToEdit, setItemToEdit] = useState<string>("");
  const [itemToDelte, setItemToDelete] = useState<string>("");

  const [adding, setAdding] = useState<boolean>(false);

  const [form] = Form.useForm();
  const [selectForm] = Form.useForm();
  console.log(selectForm.getFieldValue("route_id"));

  const [{ data: routeOrders }] = useRouteOrdersQuery({
    variables: {
      route_id: +searchTerm,
      status: "completed",
    },
  });
  const items = data ? data.delivery_routes : [];
  async function createItem() {
    setLoading(true);
    insertRoute({ object: form.getFieldsValue() }).then((res) => {
      // res.data.insert_delivery_items_one;
      setLoading(false);
      setCreatingItem(false);
    });
  }
  function updateItem() {
    setLoading(true);
    const oldItems = [...items];
    const index = oldItems.findIndex((item) => item.id === +itemToEdit);
    update({
      ...oldItems[index],
      ...form.getFieldsValue(),
      id: +itemToEdit,
    }).then(() => {
      setLoading(false);
      setCreatingItem(false);
    });
  }
  const filteredItems = useMemo(
    () =>
      items
        .filter((item) =>
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .sort(sortBy("id")),
    [items, searchTerm]
  );
  return (
    <div style={{ padding: 24 }}>
      <Typography.Title>Deudas</Typography.Title>
      <Row gutter={10} style={{ marginBottom: 24 }}>
        <Col md={23}>
          <Form form={selectForm}>
            <Form.Item name="route_id">
              <Select
                onChange={(e) => setSearchTerm(e.toString())}
                style={{ width: "100%" }}
                placeholder="Selecciona una ruta"
                size="large"
              >
                {items?.map((i) => (
                  <Select.Option value={i.id}>{i.name}</Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <Table
        dataSource={
          routeOrders?.delivery_order?.filter((o) => o.status === "canceled") ||
          []
        }
        pagination={{ pageSize: 6 }}
        columns={[
          { title: "Id", dataIndex: "id", key: "id" },
          {
            title: "Total de la orden",
            dataIndex: "total",
            render: (v) => v + " Bs",
          },
          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <Space size="middle">
                <Button
                  type="primary"
                  onClick={() => {
                    updateOrder({
                      id: record.id,
                      status: "canceled",
                      route_id: record.route_id,
                      order_time_of_day: record.order_time_of_day,
                      programmed_date: record.programmed_date,
                    });

                    // setCreatingItem(true);
                    // form.setFieldsValue({ ...record });
                    // setItemToEdit(record.id.toString());
                  }}
                >
                  Cancelado
                </Button>
              </Space>
            ),
          },
        ]}
      />

      <Modal
        afterClose={() => {
          setAdding(false);
          form.resetFields();
        }}
        title={"Crear Ruta"}
        visible={creatingItem}
        confirmLoading={loading}
        onOk={itemToEdit ? updateItem : createItem}
        onCancel={() => {
          setCreatingItem(false);
          setAdding(false);
        }}
      >
        {adding ? (
          <Form layout="vertical" form={form}>
            {" "}
            <Row justify="center">
              <Col>
                <Form.Item name="adding" label="Cantidad a añadir">
                  <InputNumber placeholder="Cantidad" />
                </Form.Item>
              </Col>
            </Row>{" "}
          </Form>
        ) : (
          <Form layout="vertical" form={form}>
            <Row>
              <Col md={24}>
                <Form.Item name="name" label="Nombre de la ruta">
                  <Input placeholder="Nombre de la ruta" />
                </Form.Item>
              </Col>
            </Row>
            <Typography.Title level={3}>
              Informacion del Conductor
            </Typography.Title>
            <Row gutter={8}>
              <Col md={12}>
                {
                  <Form.Item name="driver_name" label="Nombre">
                    <Input placeholder="Nombre" disabled={!!itemToEdit} />
                  </Form.Item>
                }
              </Col>
              <Col md={12}>
                <Form.Item name="driver_last" label="Apellidos">
                  <Input placeholder="Apellidos" disabled={!!itemToEdit} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={8}>
              <Col md={12}>
                <Form.Item name="driver_ci" label="C.I.">
                  <Input placeholder="Cedula" disabled={!!itemToEdit} />
                </Form.Item>
              </Col>{" "}
              <Col md={12}>
                <Form.Item name="driver_plate" label="No. Placa Vehicular">
                  <Input placeholder="Placa" disabled={!!itemToEdit} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </Modal>
    </div>
  );
}

export default RoutesPage;
