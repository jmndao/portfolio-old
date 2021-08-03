import React, { useState } from "react";
import { Row, Col, Form, Input, Button, notification, Spin, Card, Space } from "antd";
import { SendOutlined, ContactsOutlined, AimOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { submitForm } from "../actions/contact.action";
import AppFooter from "../components/AppFooter";

const Contact = () => {

    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );

    const dispatch = useDispatch();

    const formSubmit = useSelector(state => state.formSubmit);
    const { loading, error, formMessage } = formSubmit;

    const openNotificationWithIcon = (type, fname, fmessage) => {
        notification[type]({
            message: fname ? (`Hi ${fname}`) : (`Hi X`),
            description: fmessage
        })
    };

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

    const [contactForm]  = Form.userForm();

    const formSubmitHandler = (values) => {
        if (values) {
            setName(values.name);
            setEmail(values.email);
            setMessage(values.message);

            dispatch(submitForm( values.name, values.email, values.message ));
            openNotificationWithIcon('success', values.name, formMessage.message);
            contactForm.resetFields();

            values = {};

        } else {
            const fmessage = "Please to complete the contact form.";
            openNotificationWithIcon('error', name, fmessage.message)
        }
    };

    return (
        <div className="contact-screen">
            <div className="contact-image">
                <div className="contact-wrapper">
                    <div className="container">
                        <Row gutter={[16, 8]} align='middle' justify='center'>
                            <Col sm={24} md={12}>
                                <Card className="contact-card-card">
                                    <IconText
                                        icon={ContactsOutlined}
                                        text="Contact"
                                        key="list-vertical-like-o"
                                    />
                                    <p className="contact-card-content">+221 77 xxx xx xx</p>
                                </Card>
                            </Col>
                            <Col sm={24} md={12}>
                                <Card className="contact-card-card">
                                    <IconText
                                        icon={AimOutlined}
                                        text="Address"
                                        key="list-vertical-like-o"
                                    />
                                    <p className="contact-card-content">Dakar/Senegal, Castor street 1 | Villa 2</p>
                                </Card>
                            </Col>
                        </Row>
                        <div className="contact-form-glass">
                            <div className="contact-form-glass-in">
                                <div className="contact-form-wrapper">
                                    {loading && <Spin tip='Loading...' size='large' />}
                                    {error && <div className="contact-error">{error}</div>}
                                    <Form
                                        form={contactForm}
                                        onFinish={formSubmitHandler}
                                        validateMessages={validateMessages}
                                        layout="vertical"
                                    >
                                        <Form.Item
                                            name="name"
                                            label="Name"
                                            rules={[
                                                { required: true },
                                            ]}
                                            value={name}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name="email"
                                            label="Email"
                                            rules={[
                                                { type: "email" },
                                            ]}
                                            value={email}
                                        >
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name="message"
                                            label="Message"
                                            value={message}
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
                            <AppFooter />

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Contact;
