import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, Row, Col, Spin, Form, Input, Button, Space, Upload } from "antd";
import { AppleOutlined, AndroidOutlined, MinusCircleOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { updateAbout, fetchAbout } from "../actions/about.action";


const Admin = () => {

    const [aboutForm] = Form.useForm();

    const formItemLayoutWithOutLabel = {
        wrapperCol: {
            xs: { span: 24, offset: 0 },
            sm: { span: 20, offset: 4 },
        },
    };

    const dispatch = useDispatch();

    const getAbout = useSelector(state => state.getAbout);
    const { loading: loadingAbout, error: errorAbout, profileInfo } = getAbout;

    const normFile = (e) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };

    aboutForm.setFieldsValue({ entry: profileInfo.entry });
    aboutForm.setFieldsValue({ about: profileInfo.about });
    aboutForm.setFields(profileInfo.education)
    //aboutForm.setFieldsValue({ profile: profileInfo.profile });
    //aboutForm.setFieldsValue({ entry: profileInfo.entry });
    //aboutForm.setFieldsValue({ entry: profileInfo.entry });

    useEffect(() => {
        dispatch(fetchAbout());
    }, [dispatch])

    const aboutSubmitHandler = (values) => {
        dispatch(updateAbout(values));
    }

    const { TabPane } = Tabs;

    return (
        <div className="admin-screen">
            <div className="admin-screen-wrapper">
                <Row gutter={[32, 8]}>
                    <Col sm={24} md={16}>
                        <Tabs defaultActiveKey="1" className="admin-screen-tabs">
                            <TabPane
                                tab={
                                    <span>
                                        <AppleOutlined />
                                        About
                                    </span>
                                }
                                key="about"
                            >
                                {loadingAbout && <Spin tip="Loading..." />}
                                {errorAbout && <div className='contact-error'>{errorAbout}</div>}
                                <Form name="dynamic_form_nest_item" form={aboutForm} {...formItemLayoutWithOutLabel} onFinish={aboutSubmitHandler} >
                                    <Form.Item
                                        name="entry"
                                        label="Entry"
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="about"
                                        label="About"
                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item
                                        name="profile"
                                        label="Profile"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                    >
                                        <Upload name="profile" action="/upload.do" listType="picture">
                                            <Button icon={<UploadOutlined />}>Click to upload</Button>
                                        </Upload>
                                    </Form.Item>

                                    <Form.List name="education" layout='inline'>
                                        {(fields, { add, remove }) => (
                                            <>
                                                {fields.map(({ key, name, fieldKey, ...restField }, index) => (
                                                    <Space key={key} align='start'>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'school']}
                                                            fieldKey={[fieldKey, 'school']}
                                                            label={index === 0 ? 'Education' : ''}
                                                        >
                                                            <Input placeholder="School" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'fromYear']}
                                                            fieldKey={[fieldKey, 'fromYear']}
                                                        >
                                                            <Input placeholder="From Year" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'toYear']}
                                                            fieldKey={[fieldKey, 'toYear']}
                                                        >
                                                            <Input placeholder="To Year" />
                                                        </Form.Item>
                                                        <Form.Item
                                                            {...restField}
                                                            name={[name, 'description']}
                                                            fieldKey={[fieldKey, 'description']}
                                                        >
                                                            <Input.TextArea placeholder="Description" />
                                                        </Form.Item>

                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                    </Space>
                                                ))}
                                                <Form.Item>
                                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                        Add Education
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )}
                                    </Form.List>


                                    <Form.Item>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <AndroidOutlined />
                                        Projects
                                    </span>
                                }
                                key="projects"
                            >
                                Projects
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <AndroidOutlined />
                                        Contacts
                                    </span>
                                }
                                key="contacts"
                            >
                                Contacts
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <AndroidOutlined />
                                        JCode
                                    </span>
                                }
                                key="jcode"
                            >
                                JCode
                            </TabPane>
                        </Tabs>
                    </Col>
                    <Col sm={12} md={8}>
                        <div className="admin-screen-panel">
                            Hello There
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Admin;
