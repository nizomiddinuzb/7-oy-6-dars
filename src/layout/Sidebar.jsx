import { Menu } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const menu = [
  {
    path: "/home",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/products",
    label: "Products",
  },
  {
    path: "/cart",
    label: "Cart",
  },
  {
    path: "/orders",
    label: "Orders",
  },
  {
    path: "/logout",
    label: "LogOut",
    icon: <LogoutOutlined />,
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <Header trigger={null} collapsible className="sider-left">
      <Menu
        theme="dark"
        className="flex header-p"
        selectedKeys={location.pathname}
        items={menu.map((m, i) => ({
          ...m,
          key: m.path,
          label: <NavLink to={m.path}>{m.label}</NavLink>,
        }))}
      />
    </Header>
  );
};

export default Sidebar;
