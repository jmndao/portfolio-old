import { Button, Divider, Input, Form, Checkbox } from "antd";
import React from "react";

const Login = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='login-screen'>
            <div className="login-header">
                <h3> JAdmin Space </h3>
                <Divider />
            </div>
            <div className="login-screen-wrapper">
                <div className="login-left-curly">{"{"}</div>
                <div className="login-form">
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <Form.Item
                            label="Email"
                            name="Email"
                            rules={[{
                                required: true,
                                message: 'Please input your username!',
                            }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{
                                    required: true,
                                    message: 'Please input your password!',
                                }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <div className="login-right-curly">{"}"}</div>
            </div>
        </div>
    )
}

export default Login;
