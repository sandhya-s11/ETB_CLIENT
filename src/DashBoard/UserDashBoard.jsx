import React from "react";
import { Layout, Menu, Button } from "antd";
import {
  AppstoreOutlined,
  CalendarOutlined,
  UserOutlined,
  BookOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const UserDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* SIDEBAR */}
      <Sider theme="dark">
        <div className="text-white text-xl text-center py-4 font-bold">
          🎟 ETB
        </div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["/user/dashboard"]}
          onClick={({ key }) => navigate(key)}
          items={[
            {
              key: "/user/dashboard",
              icon: <AppstoreOutlined />,
              label: "Dashboard",
            },
            {
              key: "/user/dashboard/events",
              icon: <CalendarOutlined />,
              label: "Browse Events",
            },
            {
              key: "/user/dashboard/bookings",
              icon: <BookOutlined />,
              label: "My Bookings",
            },
            {
              key: "/user/dashboard/profile",
              icon: <UserOutlined />,
              label: "Profile",
            },
          ]}
        />
      </Sider>

      
      <Layout>
      
        <Header
          style={{
            background: "linear-gradient(90deg, #2563eb, #4f46e5, #7c3aed)",
            color: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 24px",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: 600 }}>
            Unlock experiences that make memories ✨
          </span>

          <Button
            danger
            icon={<LogoutOutlined />}
            className="bg-pink-600"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </Header>

        {/* PAGE CONTENT */}
        <Content
          style={{
            padding: "24px",
            background: "#f3f4f6",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default UserDashboard;
