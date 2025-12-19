import { Form, Input, Button } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/users/login",
        values
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      localStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-pink-100 via-violet-100 to-indigo-100 px-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        
        <div
          className="relative hidden md:flex items-end"
          style={{
            backgroundImage:
              "url('https://www.jonesaroundtheworld.com/wp-content/uploads/2019/09/Best-Music-Festivals-USA-2020.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0"></div>

          <div className="relative text-white p-10">
            <h2 className="text-4xl font-semibold mb-3">Welcome Back</h2>
            <p className="text-sm opacity-90">
              Login to continue accessing your dashboard and manage your account
              seamlessly.
            </p>
          </div>
        </div>

        
        <div className="p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-1">Login</h2>
          <p className="text-gray-500 mb-6">Please login to continue</p>

          <Form layout="vertical" onFinish={onFinish}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter email" },
                { type: "email", message: "Enter valid email" },
              ]}
            >
              <Input
                placeholder="type your email address"
                size="large"
              />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ required: true, message: "Please enter password" }]}
            >
              <Input.Password
                placeholder="type password"
                size="large"
              />
            </Form.Item>

            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-blue-600 cursor-pointer">
                Forgot Password?
              </span>
            </div>

            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="w-full rounded-full"
            >
              Login
            </Button>

            <p className="text-center mt-5 text-sm">
              Don’t have an account?{" "}
              <span
                className="text-blue-600 cursor-pointer font-medium"
                onClick={() => navigate("/signup")}
              >
                Create an Account
              </span>
            </p>

           

           
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
