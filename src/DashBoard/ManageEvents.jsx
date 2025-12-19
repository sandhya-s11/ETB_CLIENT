import { Table, Button, Modal, Form, Input, Card } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const ManageEvents = () => {
  const [events, setEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const loadEvents = async () => {
    const res = await axios.get("https://etb-server-bj5o.onrender.com/api/events");
    setEvents(res.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  const addEvent = async () => {
    await axios.post("https://etb-server-bj5o.onrender.com/api/events", form.getFieldsValue());
    form.resetFields();
    setOpen(false);
    loadEvents();
  };

  const deleteEvent = async (id) => {
    await axios.delete(`https://etb-server-bj5o.onrender.com/api/events/${id}`);
    loadEvents();
  };

  const columns = [
    { title: "Title", dataIndex: "title" },
    { title: "Date", dataIndex: "date" },
    { title: "Venue", dataIndex: "venue" },
    {
      title: "Action",
      render: (_, record) => (
        <Button danger onClick={() => deleteEvent(record._id)}>
          Delete
        </Button>
      ),
    },
  ];

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
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20 }}>
          <h2>Manage Events</h2>
          <Button type="primary" onClick={() => setOpen(true)}>
            Add New Event
          </Button>
        </div>

        <Table
          columns={columns}
          dataSource={events}
          rowKey="_id"
          pagination={{ pageSize: 6 }}
        />
      </Card>

      <Modal
  title="Add Event"
  open={open}
  onOk={addEvent}
  onCancel={() => setOpen(false)}
>
  <Form layout="vertical" form={form}>
    <Form.Item
      name="title"
      label="Title"
      rules={[{ required: true, message: "Title is required" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item name="description" label="Description">
      <Input />
    </Form.Item>

    <Form.Item
      name="date"
      label="Date"
      rules={[{ required: true, message: "Date is required" }]}
    >
      <Input type="date" />
    </Form.Item>

    <Form.Item
      name="time"
      label="Time"
      rules={[{ required: true, message: "Time is required" }]}
    >
      <Input type="time" />
    </Form.Item>

    <Form.Item
      name="venue"
      label="Venue"
      rules={[{ required: true, message: "Venue is required" }]}
    >
      <Input />
    </Form.Item>

    <Form.Item name="price" label="Price">
      <Input />
    </Form.Item>

    <Form.Item name="image" label="Image URL">
      <Input />
    </Form.Item>
  </Form>
</Modal>

    </div>
  );
};

export default ManageEvents;
