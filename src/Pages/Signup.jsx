import { Form, Input, Button, Card } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await axios.post("http://localhost:5000/api/users/register", values);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="w-full flex justify-center items-center py-10 px-4 bg-linear-to-r from-purple-100 via-pink-100 to-blue-100 min-h-screen">
      <Card
        title="Create Account"
        className="w-[350px] shadow-lg rounded-xl"
      >
        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your name" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" }
            ]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please enter password" }]}
          >
            <Input.Password placeholder="Enter password" />
          </Form.Item>

          {/* New Age Field */}
          <Form.Item
            label="Age"
            name="age"
            rules={[{ required: true, message: "Please enter your age" }]}
          >
            <Input type="number" placeholder="Enter your age" />
          </Form.Item>

          <Button type="primary" htmlType="submit" block>
            Sign Up
          </Button>

          <p className="text-center mt-3">
            Already have an account?{" "}
            <span
              className="text-blue-600 cursor-pointer"
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
