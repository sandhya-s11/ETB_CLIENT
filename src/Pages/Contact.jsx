import React, { useState } from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
  message,
} from "antd";

const { TextArea } = Input;

const Contact = () => {
  const [form] = Form.useForm();

 
  const onFinish = () => {
    message.success({
      content: "🎉 Message sent successfully!",
      duration: 2.5,
    });

    form.resetFields(); 
  };

  return (
    <div className="w-full flex justify-center items-center py-10 px-4 bg-linear-to-r from-purple-100 via-pink-100 to-blue-100 min-h-screen">

      
      <div className="w-full max-w-2xl bg-white shadow-2xl rounded-2xl p-10 border border-violet-300">

        <h1 className="text-3xl font-bold text-center text-violet-600 mb-6">
          Event Booking / Contact Form
        </h1>

        <Form
          layout="vertical"
          form={form}
          onFinish={onFinish}
          className="space-y-4"
        >

         
          <Form.Item
            label="Full Name"
            name="fullName"
            rules={[{ required: true, message: "Please enter your name" }]}
          >
            <Input placeholder="Enter your full name" />
          </Form.Item>

          <Form.Item
            label="Email Address"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Invalid email format" },
            ]}
          >
            <Input placeholder="example@gmail.com" />
          </Form.Item>

          <Form.Item
            label="Phone Number"
            name="phone"
            rules={[{ required: true, message: "Please enter your phone number" }]}
          >
            <Input placeholder="9876543210" />
          </Form.Item>

          

       
          <Form.Item
            label="Message / Special Requests"
            name="message"
            rules={[{ required: true, message: "Please enter your message" }]}
          >
            <TextArea rows={3} placeholder="Write your message or queries..." />
          </Form.Item>

          
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-violet-600 hover:bg-violet-700"
            >
              Submit 
            </Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  );
};

export default Contact;
