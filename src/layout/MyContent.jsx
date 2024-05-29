import { Content } from "antd/es/layout/layout";
import React from "react";
import { Outlet } from "react-router-dom";

const MyContent = () => {
  return (
    <Content style={{ padding: 24, background: "white", borderRadius: 12 }} >
      <Outlet />
    </Content>
  );
};

export default MyContent;
