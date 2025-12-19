import { Table, Card } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then(res => setUsers(res.data));
  }, []);

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
          borderRadius: 16,
          boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: 20 }}>Manage Users</h2>

        <Table
          rowKey="_id"
          dataSource={users}
          pagination={{ pageSize: 6 }}
          columns={[
            { title: "Name", dataIndex: "name" },
            { title: "Email", dataIndex: "email" },
            { title: "Role", dataIndex: "role" },
          ]}
        />
      </Card>
    </div>
  );
};

export default ManageUsers;
