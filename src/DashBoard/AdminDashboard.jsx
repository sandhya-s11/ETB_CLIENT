import { Layout, Button } from "antd";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminHome from "./AdminHome";
import ManageEvents from "./ManageEvents";
import ManageUsers from "./ManageUsers";
import AllBookings from "./AllBookings";

const { Header, Content } = Layout;

const AdminDashboard = () => {
  const [page, setPage] = useState("home");
  const navigate = useNavigate();

  // ✅ Logic fix: only allow admin role
  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role !== "admin") {
      navigate("/login"); // redirect non-admins
    }
  }, [navigate]);

  const renderPage = () => {
    switch (page) {
      case "events":
        return <ManageEvents />;
      case "users":
        return <ManageUsers />;
      case "bookings":
        return <AllBookings />;
      default:
        return <AdminHome />;
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login"); // redirect to login after logout
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <AdminSidebar setPage={setPage} />

      <Layout>
        <Header
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0 20px",
          }}
        >
          <h2 style={{ margin: 0 }}>Admin Dashboard</h2>
          <Button danger onClick={handleLogout}>
            Logout
          </Button>
        </Header>

        <Content style={{ margin: "16px", padding: "24px", background: "#f5f7fb" }}>
          {renderPage()}
        </Content>
      </Layout>
    </Layout>
  );
};

export default AdminDashboard;
