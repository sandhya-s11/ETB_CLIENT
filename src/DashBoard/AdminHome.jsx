import { Card, Row, Col, Divider } from "antd";
import {
  CalendarOutlined,
  UserOutlined,
  BookOutlined,
  DollarOutlined,
  PlusOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const STATIC_EVENTS_COUNT = 6;

const AdminHome = ({ setPage }) => {
  const [stats, setStats] = useState({
    events: 0,
    users: 0,
    bookings: 0,
    revenue: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const eventsRes = await axios.get("https://etb-server-bj5o.onrender.com/api/events");
      const usersRes = await axios.get("https://etb-server-bj5o.onrender.com/api/users");
      const bookingsRes = await axios.get("https://etb-server-bj5o.onrender.com/api/bookings");

      const revenue = bookingsRes.data.reduce(
        (sum, b) => sum + b.totalAmount,
        0
      );

      setStats({
        events: eventsRes.data.length + STATIC_EVENTS_COUNT,
        users: usersRes.data.length,
        bookings: bookingsRes.data.length,
        revenue,
      });
    };

    fetchData();
  }, []);

  const statCard = (bg) => ({
    borderRadius: 16,
    background: bg,
    color: "#1f1f1f",
    boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
  });

  return (
    <div
      className="min-h-screen p-6 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('https://wallpaperaccess.com/full/11122227.jpg')",
      }}
    >
     
      <Card
        style={{
          marginBottom: 30,
          borderRadius: 18,
          background: "linear-gradient(135deg, #e0c3fc, #8ec5fc)",
        }}
      >
        <h1>Welcome back, Admin 👋</h1>
        <p style={{ fontSize: 16 }}>
          Manage your events, users and bookings all in one place.
        </p>
      </Card>

   
      <Row gutter={24}>
        <Col span={6}>
          <Card style={statCard("#f3e8ff")}>
            <CalendarOutlined style={{ fontSize: 30, color: "#722ed1" }} />
            <h3>Total Events</h3>
            <h1>{stats.events}</h1>
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statCard("#e6f4ff")}>
            <UserOutlined style={{ fontSize: 30, color: "#1890ff" }} />
            <h3>Users</h3>
            <h1>{stats.users}</h1>
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statCard("#fff0f6")}>
            <BookOutlined style={{ fontSize: 30, color: "#eb2f96" }} />
            <h3>Bookings</h3>
            <h1>{stats.bookings}</h1>
          </Card>
        </Col>

        <Col span={6}>
          <Card style={statCard("#f6ffed")}>
            <DollarOutlined style={{ fontSize: 30, color: "#52c41a" }} />
            <h3>Revenue</h3>
            <h1>₹{stats.revenue}</h1>
          </Card>
        </Col>
      </Row>

      <Divider style={{ margin: "40px 0" }} />

    
      <h2>Quick Actions</h2>

      <Row gutter={24}>
        <Col span={8}>
          <Card hoverable style={{ borderRadius: 16, background: "#f3e8ff" }}>
            <PlusOutlined style={{ fontSize: 28, color: "#722ed1" }} />
            <h3>Add / Manage Events</h3>
            <p>Create, update and delete events.</p>
            <button
              className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100"
              onClick={() => setPage("events")}
            >
              Go to Events
            </button>
          </Card>
        </Col>

        <Col span={8}>
          <Card hoverable style={{ borderRadius: 16, background: "#e6f4ff" }}>
            <TeamOutlined style={{ fontSize: 28, color: "#1890ff" }} />
            <h3>View Users</h3>
            <p>Monitor registered users.</p>
            <button
              className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100"
              onClick={() => setPage("users")}
            >
              View Users
            </button>
          </Card>
        </Col>

        <Col span={8}>
          <Card hoverable style={{ borderRadius: 16, background: "#fff0f6" }}>
            <ShoppingCartOutlined
              style={{ fontSize: 28, color: "#eb2f96" }}
            />
            <h3>View Bookings</h3>
            <p>Track bookings and payments.</p>
            <button
              className="mt-4 bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100"
              onClick={() => setPage("bookings")}
            >
              View Bookings
            </button>
          </Card>
        </Col>
      </Row>

      <Divider style={{ margin: "40px 0" }} />

      
      <Row gutter={24}>
        <Col span={12}>
          <Card style={{ borderRadius: 16 }}>
            <h3>Platform Status</h3>
            <p>✅ System running smoothly</p>
            <p>📊 Real-time data updates</p>
            <p>🔐 Secure admin access</p>
          </Card>
        </Col>

        <Col span={12}>
          <Card style={{ borderRadius: 16 }}>
            <h3>Admin Tips</h3>
            <ul>
              <li>Add new events weekly</li>
              <li>Monitor bookings on weekends</li>
              <li>Review user growth monthly</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default AdminHome;
