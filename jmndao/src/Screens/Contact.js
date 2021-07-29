import React, { useState } from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { SendOutlined } from "@ant-design/icons";

const Contact = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const validateMessages = {
        required: `This field is required!`,
        types: {
            email: "Please to enter you email.",
            name: "Please to enter your Full Name",
        },
    };

    const formSubmitHandler = () => {
        console.log("Form submitted");
    };

    return (
        <div className="contact-screen">
            <div className="contact-image">
                <div className="contact-wrapper">
                    <div className="container">
                        <Row gutter={[16, 8]} align='middle' justify='center'>
                            <Col sm={24} md={12}>
                                <ul><li>Contact</li></ul>
                            </Col>
                            <Col sm={24} md={12}>
                                <ul><li>Address</li></ul>
                            </Col>
                        </Row>
                        <div className="contact-form-glass">
                            <div className="contact-form-glass-in">
                                <div className="contact-form-wrapper">
                                    <Form
                                        onFinish={formSubmitHandler}
                                        validateMessages={validateMessages}
                                        layout="vertical"
                                    >
                                        <Form.Item
                                            name="name"
                                            label="Name"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                            value={name}
                                            onFinish={(e) => {
                                                setName(e.value);
                                            }}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            label="Email"
                                            rules={[
                                                {
                                                    type: "email",
                                                },
                                            ]}
                                            value={email}
                                            onFinish={(e) => {
                                                setEmail(e.name);
                                            }}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name="message"
                                            label="Message"
                                            value={message}
                                            onFinish={(e) => {
                                                setMessage(e.value);
                                            }}
                                        >
                                            <Input.TextArea />
                                        </Form.Item>
                                        <Form.Item className="center">
                                            <Button
                                                type="primary"
                                                htmlType="submit"
                                                icon={<SendOutlined />}
                                                shape="round"
                                                size="large"
                                            >
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
