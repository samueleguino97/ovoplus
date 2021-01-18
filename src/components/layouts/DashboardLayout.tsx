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
} from "react-icons/fa";
import { Layout, Menu } from "antd";
import {
  PlusSquareOutlined,
  DatabaseOutlined,
  ContainerOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

const sideLinks = [
  {
    path: "/order",
    label: "Nuevo Pedido",
    icon: <PlusSquareOutlined />,
  },
  { path: "/items", label: "Items", icon: <ContainerOutlined /> },
  { path: "/orders", label: "H. de Pedidos", icon: <DatabaseOutlined /> },
  { path: "/settings", label: "Settings", icon: <SettingOutlined /> },
];

type DashboardLayoutProps = {
  children: React.ReactElement;
};

function DashboardLayout({ children }: DashboardLayoutProps) {
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
          {sideLinks.map((link, index) => (
            <Menu.Item key={index + 1} icon={link.icon}>
              <Link href={link.path}>
                <a>{link.label}</a>
              </Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: "0 16px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
}

export default DashboardLayout;
