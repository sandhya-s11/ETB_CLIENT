import { Form, Input, Button, Card } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await axios.post("https://etb-server-bj5o.onrender.com/api/users/register", values);
      alert("Signup successful! Please login.");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center px-4">

      {/* BACKGROUND IMAGE */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center opacity-20 -z-10"
        style={{
          backgroundImage:
            "url('https://wallpapercave.com/wp/wp7488230.jpg')",
        }}
      ></div>

      {/* SIGNUP CARD */}
      <div className="w-full flex justify-center items-center py-10">
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
                { type: "email", message: "Enter a valid email" },
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

            <Form.Item
              label="Age"
              name="age"
              rules={[{ required: true, message: "Please enter your age" }]}
            >
              <Input type="number" placeholder="Enter your age" />
            </Form.Item>

            <Button
              htmlType="submit"
              className="w-full rounded-full 
                         bg-blue-600 hover:bg-blue-700
                          border-none"
            >
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
    </div>
  );
};

export default Signup;
