// import React, { useEffect } from "react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Divider, Input, Form, Checkbox, Spin, message } from "antd";
import { login } from "../actions/user.action";

// const Login = ({ location, history }) => {
const Login = ({ history }) => {
    const dispatch = useDispatch();

    // const redirect = location.search ? location.search.split("=")[1] : "/";

    const userLogin = useSelector(state => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    // useEffect(() => {
    //     if (userInfo) {
    //       history.push(redirect);
    //     }
    //   }, [history, userInfo, redirect]);

    const onFinish = (values) => {
        // DISPATCH LOGIN
        dispatch(login(values.email, values.password));
    };

    useEffect(() => {
        if (userInfo) {
            history.push('/admin');
        }
    }, [history, userInfo]);

    const onFinishFailed = (errorInfo) => {
        message.error(`Your connection has failed ${errorInfo}`);
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
                    {loading && <Spin tip='Loading...' size='small' />}
                    {error && <div className="contact-error">{error}</div>}
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
                            name="email"
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
