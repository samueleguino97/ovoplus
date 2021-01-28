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
import {
  useCreateItemMutation,
  useDeleteItemMutation,
  useItemsQuery,
  useUpdateItemMutation,
  useIncrementItemMutation,
} from "generated/graphql";
import React, { useMemo, useState } from "react";
import { sortBy } from "utils/sortBy";

function ItemsPage() {
  const [, insertItem] = useCreateItemMutation();
  const [, removeItem] = useDeleteItemMutation();
  const [, update] = useUpdateItemMutation();
  const [, increment] = useIncrementItemMutation();
  const [{ data }] = useItemsQuery();
  const items = data ? data.delivery_items : [];

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [creatingItem, setCreatingItem] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingDelete, setLoadingDelete] = useState<boolean>(false);

  const [itemToEdit, setItemToEdit] = useState<string>("");
  const [itemToDelte, setItemToDelete] = useState<string>("");

  const [adding, setAdding] = useState<boolean>(false);

  const [form] = Form.useForm();

  async function createItem() {
    setLoading(true);
    insertItem(form.getFieldsValue()).then((res) => {
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
  function addItems() {
    setLoading(true);
    increment({ id: +itemToEdit, quantity: form.getFieldsValue().adding }).then(
      () => {
        // const oldItems = [...items];
        // const index = oldItems.findIndex((item) => item.id === +itemToEdit);
        // oldItems[index] = {
        //   ...oldItems[index],
        //   quantity:
        //     items.find((i) => i.id === +itemToEdit).quantity +
        //     form.getFieldsValue().adding,
        // };
        setLoading(false);
        setCreatingItem(false);
        // db.create("inventory_history", {
        //   type: "add",
        //   item: oldItems[index].id,
        //   quantity: form.getFieldsValue().adding,
        // });
        form.resetFields();
      }
    );
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
          {
            title: "Precio Delivery",
            dataIndex: "delivery_price",
            render: (value) => {
              return "Bs." + value;
            },
          },
          {
            title: "Precio Tienda",
            dataIndex: "store_price",
            render: (value) => {
              return "Bs." + value;
            },
          },
          { title: "Cantidad en Inventario", dataIndex: "quantity" },
          {
            title: "Action",
            key: "action",
            render: (_, record) => (
              <Space size="middle">
                <Button
                  onClick={() => {
                    setCreatingItem(true);
                    form.setFieldsValue({ ...record });
                    setItemToEdit(record.id.toString());
                  }}
                >
                  Editar
                </Button>
                <Button
                  loading={loadingDelete && record.id === +itemToDelte}
                  onClick={() => {
                    setLoadingDelete(true);
                    setItemToDelete(record.id.toString());
                    removeItem({ _eq: record.id }).then(() => {
                      setLoadingDelete(false);
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
                    setItemToEdit(record.id.toString());
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
        afterClose={() => {
          setAdding(false);
          form.resetFields();
        }}
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
