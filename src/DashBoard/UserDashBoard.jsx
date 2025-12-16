import React from "react";
import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider theme="dark">
        <div className="text-white text-xl text-center py-4 font-bold">
          🎟 ETB
        </div>

        <Menu
          theme="dark"
          mode="inline"
          onClick={({ key }) => navigate(key)}
          items={[
            { key: "/user/dashboard", icon: <AppstoreOutlined />, label: "Dashboard" },
            { key: "/user/dashboard/events", icon: <CalendarOutlined />, label: "Browse Events" },
            { key: "/user/dashboard/bookings", icon: <BookOutlined />, label: "My Bookings" },
            { key: "/user/dashboard/profile", icon: <UserOutlined />, label: "Profile" },
          ]}
        />
      </Sider>

      <Layout>
        <Header style={{ background: "#1677ff", color: "#fff", fontSize: 18 }}>
          Welcome to Event Ticket Booking 🎉
        </Header>

        <Content style={{ padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserDashboard;
