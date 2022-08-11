import React from "react";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import SideMenu from "./SideMenu";
import Footer from "./Footer";

const { Content } = Layout;

const LayoutWithRoute = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideMenu />
      <Layout>
        <Content style={{ margin: "20px 16px" }}>
          <Outlet />
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default LayoutWithRoute;
