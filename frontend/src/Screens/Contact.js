import React, { useState } from "react";
import { Row, Col, Form, Input, Button, notification, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../actions/contact.action";

const Contact = () => {

    const dispatch = useDispatch();

    const formSubmit = useSelector(state => state.formSubmit);
    const { loading, error, formMessage } = formSubmit;

    const openNotificationWithIcon = (type, fname, fmessage) => {
        notification[type]({
          message: fname ? (`Hi ${fname}`) : (`Hi X`),
          description: fmessage
    })};

    const notificationError = (type, error) => {
        notification[type]({
          message: 'An unexpected error has occurd ',
          description: error
    })};


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

    const formSubmitHandler = (values) => {
        if (values) {
            setName(values.name);
            setEmail(values.email);
            setMessage(values.message);

            dispatch(submitForm({ name, email, message }));
            openNotificationWithIcon('success', values.name, formMessage)

        } else {
            const fmessage = "Please to complete the contact form.";
            openNotificationWithIcon('error', name, fmessage)
        }
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
                                    {loading && <Spin tip='Loading...' size='large' />}
                                    { error && <div className="contact-error">{error}</div> }
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
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name="message"
                                            label="Message"
                                            value={message}
                                            onFinish={(e) => {
                                                setMessage(e.target.value);
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
