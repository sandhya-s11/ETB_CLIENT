import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  CalendarOutlined,
  UserOutlined,
  BookOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;

const AdminSidebar = ({ setPage }) => {
  return (
    <Sider collapsible theme="dark">
      <h2 style={{ color: "white", textAlign: "center", margin: "16px 0" }}>
        Admin Panel
      </h2>

      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["home"]}
        onClick={({ key }) => setPage(key)}
        items={[
          { key: "home", icon: <DashboardOutlined />, label: "Dashboard" },
          { key: "events", icon: <CalendarOutlined />, label: "Manage Events" },
          { key: "users", icon: <UserOutlined />, label: "Users" },
          { key: "bookings", icon: <BookOutlined />, label: "Bookings" },
        ]}
      />
    </Sider>
  );
};

export default AdminSidebar;
