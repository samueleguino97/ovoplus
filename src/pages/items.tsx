import useDb from "@hooks/useDb";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  Modal,
  Row,
  Space,
  Table,
  Typography,
} from "antd";
import { Item } from "models/Item";
import React, { useEffect, useMemo, useState } from "react";
import { sortBy } from "utils/sortBy";

function ItemsPage() {
  const db = useDb();
  const [items, setItems] = useState<Item[]>([]);

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [creatingItem, setCreatingItem] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

  const [itemToEdit, setItemToEdit] = useState<string>("");
  const [itemToDelte, setItemToDelete] = useState<string>("");

  const [adding, setAdding] = useState<boolean>(false);

  const [form] = Form.useForm();

  useEffect(() => {
    db.get<Item>("items").then(setItems);
  }, []);

  async function createItem() {
    setLoading(true);

    db.create<Item>("items", {
      ...form.getFieldsValue(),
    }).then(async (created) => {
      setItems([...items, created]);
      await db.create("inventory_history", {
        type: "initial",
        item: created.id,
        quantity: created.quantity,
      });
      setLoading(false);
      setCreatingItem(false);
    });
  }
  function updateItem() {
    setLoading(true);
    db.update<Item>("items", itemToEdit, {
      ...form.getFieldsValue(),
    }).then(() => {
      const oldItems = [...items];
      const index = oldItems.findIndex((item) => item.id === itemToEdit);
      oldItems[index] = { ...oldItems[index], ...form.getFieldsValue() };
      setItems(oldItems);
      setLoading(false);
      setCreatingItem(false);
    });
  }
  function addItems() {
    setLoading(true);
    db.update<Item>("items", itemToEdit, {
      quantity:
        items.find((i) => i.id === itemToEdit).quantity +
        form.getFieldsValue().adding,
    }).then(() => {
      const oldItems = [...items];
      const index = oldItems.findIndex((item) => item.id === itemToEdit);
      oldItems[index] = {
        ...oldItems[index],
        quantity:
          items.find((i) => i.id === itemToEdit).quantity +
          form.getFieldsValue().adding,
      };
      setItems(oldItems);
      setLoading(false);
      setCreatingItem(false);
      db.create("inventory_history", {
        type: "add",
        item: oldItems[index].id,
        quantity: form.getFieldsValue().adding,
      });
      form.resetFields();
    });
  }
  const filteredItems = useMemo(
    () =>
      items
        .filter((item) => item.name.includes(searchTerm))
        .sort(sortBy("name", true)),
    [items, searchTerm]
  );
  return (
    <div style={{ padding: 24 }}>
      <Typography.Title>Items e Inventario</Typography.Title>
      <Row gutter={10} style={{ marginBottom: 24 }}>
        <Col md={1}>
          <Button
            type="primary"
            size="large"
            onClick={() => {
              setItemToEdit("");
              setCreatingItem(true);
            }}
          >
            +
          </Button>
        </Col>
        <Col md={23}>
          <Input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Busca items"
            size="large"
          />
        </Col>
      </Row>
      <Table
        dataSource={filteredItems}
        pagination={{ pageSize: 6 }}
        columns={[
          { title: "Id", dataIndex: "id", key: "id" },
          { title: "Producto", dataIndex: "name" },
          { title: "Precio Delivery", dataIndex: "delivery_price" },
          { title: "Precio Tienda", dataIndex: "store_price" },
          { title: "Cantidad en Inventario", dataIndex: "quantity" },
          {
            title: "Action",
            key: "action",
            render: (text, record) => (
              <Space size="middle">
                <Button
                  onClick={() => {
                    setCreatingItem(true);
                    form.setFieldsValue({ ...record });
                    setItemToEdit(record.id);
                  }}
                >
                  Editar
                </Button>
                <Button
                  loading={loadingDelete && record.id === itemToDelte}
                  onClick={() => {
                    setItemToDelete(record.id);
                    setLoadingDelete(true);
                    db.delete<Item>("items", record.id).then(() => {
                      setLoadingDelete(false);
                      const oldItems = [...items];
                      oldItems.splice(
                        oldItems.findIndex((item) => item.id === record.id),
                        1
                      );
                      setItems(oldItems);
                      setItemToDelete("");
                    });
                  }}
                  danger
                >
                  Borrar
                </Button>
                <Button
                  type="primary"
                  onClick={() => {
                    form.setFieldsValue({ ...record });
                    setCreatingItem(true);
                    setAdding(true);
                    setItemToEdit(record.id);
                  }}
                >
                  Añadir
                </Button>
              </Space>
            ),
          },
        ]}
      />

      <Modal
        title={adding ? "Añadir items" : "Crear Item Nuevo"}
        visible={creatingItem}
        confirmLoading={loading}
        onOk={adding ? addItems : itemToEdit ? updateItem : createItem}
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
                <Form.Item name="name" label="Nombre del Item">
                  <Input placeholder="Nombre" />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col md={8}>
                {
                  <Form.Item name="quantity" initialValue={1} label="Cantidad">
                    <InputNumber disabled={!!itemToEdit} />
                  </Form.Item>
                }
              </Col>
              <Col md={8}>
                <Form.Item
                  initialValue={0}
                  name="store_price"
                  label="Precio Tienda"
                >
                  <InputNumber />
                </Form.Item>
              </Col>
              <Col md={8}>
                <Form.Item
                  initialValue={0}
                  name="delivery_price"
                  label="Precio Delivery"
                >
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </Modal>
    </div>
  );
}

export default ItemsPage;
