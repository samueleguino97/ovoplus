import useDb from "@hooks/useDb";
import useItems from "@hooks/useItems";
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

function HistoryPage() {
  const db = useDb();
  const [historyItems, setItems] = useState<Item[]>([]);

  const items = useItems();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [creatingItem, setCreatingItem] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

  const [itemToEdit, setItemToEdit] = useState<string>("");
  const [itemToDelte, setItemToDelete] = useState<string>("");

  const [adding, setAdding] = useState<boolean>(false);

  const [form] = Form.useForm();

  useEffect(() => {
    db.get("inventory_history").then(setItems);
  }, []);

  async function createItem() {
    setLoading(true);

    db.create<Item>("items", {
      ...form.getFieldsValue(),
    }).then(async (created) => {
      setItems([...historyItems, created]);
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
      const oldItems = [...historyItems];
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
        historyItems.find((i) => i.id === itemToEdit).quantity +
        form.getFieldsValue().adding,
    }).then(() => {
      const oldItems = [...historyItems];
      const index = oldItems.findIndex((item) => item.id === itemToEdit);
      oldItems[index] = {
        ...oldItems[index],
        quantity:
          historyItems.find((i) => i.id === itemToEdit).quantity +
          form.getFieldsValue().adding,
      };
      setItems(oldItems);
      setLoading(false);
      setCreatingItem(false);
      form.resetFields();
    });
  }
  const filteredItems = useMemo(
    () =>
      historyItems
        // .filter((item) => item.name.includes(searchTerm))
        .sort(sortBy("name", true)),
    [historyItems, searchTerm]
  );
  return (
    <div style={{ padding: 24 }}>
      <Typography.Title>Historial</Typography.Title>
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
        rowClassName={"table-row-green"}
        dataSource={filteredItems}
        pagination={{ pageSize: 6 }}
        columns={[
          { title: "Producto", dataIndex: "name" },
          { title: "Precio Delivery", dataIndex: "delivery_price" },
          { title: "Precio Tienda", dataIndex: "store_price" },
          { title: "Cantidad en Inventario", dataIndex: "quantity" },
          {
            title: "Action",
            key: "action",
            render: (text, record) => <Space size="middle"></Space>,
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

export default HistoryPage;
