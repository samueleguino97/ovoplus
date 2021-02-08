import React from "react";
import Button from "../general/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import joinClasses from "utils/joinClasses";

import {
  FaGraduationCap,
  FaClipboardList,
  FaCogs,
  FaBoxOpen,
  FaPlusSquare,
  FaMoneyBill,
  FaMoneyCheck,
  FaTruck,
} from "react-icons/fa";
import { Col, Layout, Menu, Space, Typography } from "antd";
import {
  PlusSquareOutlined,
  DatabaseOutlined,
  ContainerOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { auth } from "config/firebase";
import SubMenu from "antd/lib/menu/SubMenu";
import Logo from "@components/Logo";

const { Header, Content, Sider } = Layout;

const sideLinks = [
  {
    path: "/order",
    label: "Nuevo Pedido",
    icon: <PlusSquareOutlined />,
  },
  { path: "/items", label: "Items", icon: <ContainerOutlined /> },
  {
    label: "Pedidos",
    sub: [
      {
        path: "/orders",
        label: "Pendientes",
        icon: <DatabaseOutlined />,
      },
      {
        path: "/completed_orders",
        label: "Completados",
        icon: <DatabaseOutlined />,
      },
    ],
  },
  {
    label: "Rutas",
    sub: [
      {
        path: "/routes",
        label: "Listado",
        icon: <FaTruck />,
      },
      {
        path: "/debt",
        label: "Deudas",
        icon: <FaMoneyBill />,
      },
      {
        path: "/comissions",
        label: "Comisiones",
        icon: <FaMoneyCheck />,
      },
    ],
  },
  { path: "/settings", label: "Settings", icon: <SettingOutlined /> },
];

type DashboardLayoutProps = {
  children: React.ReactElement;
  onLogout: Function;
};

function DashboardLayout({ children, onLogout }: DashboardLayoutProps) {
  const router = useRouter();
  const selectedIndex = sideLinks.findIndex((i) => router.pathname === i.path);
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider>
        <div className="logo" />

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          selectedKeys={[(selectedIndex + 1).toString()]}
          mode="inline"
        >
          <Menu.Item style={{ height: 80, marginTop: 16 }}>
            <Col>
              <Typography.Title level={5} style={{ color: "white" }}>
                {auth().currentUser.email.substring(
                  0,
                  auth().currentUser.email.lastIndexOf("@")
                )}
              </Typography.Title>
              <div
                onClick={() => {
                  auth().signOut();
                  onLogout();
                }}
              >
                <Typography.Paragraph
                  style={{ color: "white", opacity: 0.6, cursor: "pointer" }}
                >
                  Logout
                </Typography.Paragraph>
              </div>
            </Col>
          </Menu.Item>
          {sideLinks.map((link, index) =>
            link.sub ? (
              <SubMenu key={link.label} title={link.label}>
                {link.sub.map((s, newIn) => (
                  <Menu.Item key={s.path} icon={s.icon}>
                    <Link href={s.path}>
                      <a>{s.label}</a>
                    </Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item key={index + 1} icon={link.icon}>
                <Link href={link.path}>
                  <a>{link.label}</a>
                </Link>
              </Menu.Item>
            )
          )}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <div style={{ position: "absolute", top: 12, right: 48 }}>
          <Logo width={200} />
        </div>
        <Content style={{ margin: "0 16px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
