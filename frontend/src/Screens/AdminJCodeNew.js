import React, { useEffect } from "react";
import Admin from "./Admin";
import { Form, Input, Button, Switch, Space, Upload, Spin, message } from "antd";
import { LoadingOutlined, MinusCircleOutlined, UploadOutlined, PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { firebaseRemove, firebaseUpload } from "../actions/about.action";
import { createJCode } from "../actions/jcode.action";


const AdminJCodeNew = ({ history }) => {

    const [createForm] = Form.useForm();
    const dispatch = useDispatch();

    const jcodeCreate = useSelector(state => state.jcodeCreate);
    const { loading, error, success } = jcodeCreate;

    const userLogin = useSelector(state => state.userLogin);
    const { userInfo } = userLogin;

    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        if (e.file.status === 'done') {
            return e.file.response;
        } else {
            return e && e.file
        }
    }

    const handleNewJCodeCreation = (values) => {
        dispatch(createJCode(values));
        createForm.resetFields();
    };

    const firebaseRemoveHandler = e => {
        dispatch(firebaseRemove(e));
    }

    const firebaseUploadHandler = e => {
        dispatch(firebaseUpload(e))
    }

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
        if (success) {
            message.success('JCode Created successfully');
        }
    }, [dispatch, success, history, userInfo]);

    const section = [{
        name: "",
        pseudo: "",
        image: "",
    }];

    const links = [{
        url: "",
        video: true,
    }];

    const mention = [{
        name: "",
    }];

    return (
        <>
            <div className="admin-page-display-section">
                <Admin />
                <div className="admin-page-wrapper">
                    <h1>Create new JCode</h1>
                    <Form form={createForm} onFinish={handleNewJCodeCreation}>
                        {loading && (<Spin tip='Creating...' indicator={<LoadingOutlined />} />)}
                        {error && (<div className="contact-error">{error}</div>)}
                        <>
                            <Form.Item label="Project" name="project">
                                <Input />
                            </Form.Item>
                            <fieldset>
                                <legend>Description</legend>
                                <Form.Item name="description">
                                    <Input.TextArea rows='10' />
                                </Form.Item>
                            </fieldset>
                            <Form.Item
                                name="image"
                                valuePropName="file"
                                getValueFromEvent={(e) => normFile(e)}
                            >
                                <Upload
                                    name="image"
                                    placeholder="Image"
                                    customRequest={(e) => firebaseUploadHandler(e)}
                                    onRemove={(e) => firebaseRemoveHandler(e)} 
                                >
                                    <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                </Upload>
                            </Form.Item>
                            <Form.Item label="Link" name="link">
                                <Input />
                            </Form.Item>
                            <fieldset>
                                <legend>Sections</legend>
                                <Form.List name="section" initialValue={section}>
                                    {(fields, { add, remove }) => {
                                        return (
                                            <>
                                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                    <Space key={key} style={{ display: 'block', marginBottom: 8 }}>
                                                        <Form.Item name={[name, "title"]} fieldKey={[fieldKey, "title"]}>
                                                            <Input placeholder='Title' />
                                                        </Form.Item>
                                                        <Form.Item name={[name, "mode"]} fieldKey={[fieldKey, "mode"]}>
                                                            <Input placeholder='Mode' />
                                                        </Form.Item>
                                                        <Form.Item name={[name, "text"]} fieldKey={[fieldKey, "text"]}>
                                                            <Input.TextArea placeholder='Text' rows='8' />
                                                        </Form.Item>
                                                        <Form.Item name={[name, "code"]} fieldKey={[fieldKey, "code"]}>
                                                            <Input.TextArea placeholder='Code' rows='8' />
                                                        </Form.Item>
                                                        <div className='inner-form-list-item'>
                                                            <fieldset>
                                                                <legend>Links</legend>
                                                                <Form.List name="links" initialValue={links}>
                                                                    {(fields, { add, remove }) => {
                                                                        return (
                                                                            <>
                                                                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                                                    <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                                                        <Form.Item name={[name, "url"]} fieldKey={[fieldKey, "url"]}>
                                                                                            <Input placeholder='Url' />
                                                                                        </Form.Item>
                                                                                        <Form.Item label="Video" name="video">
                                                                                            <Switch defaultChecked={true} />
                                                                                        </Form.Item>
                                                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                                                    </Space>
                                                                                ))}
                                                                                <Form.Item>
                                                                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                                                        Add field
                                                                                    </Button>
                                                                                </Form.Item>
                                                                            </>
                                                                        )
                                                                    }}
                                                                </Form.List>
                                                            </fieldset>
                                                        </div>
                                                        <DeleteOutlined onClick={() => remove(name)} />
                                                    </Space>
                                                ))}
                                                <Form.Item>
                                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                        Add field
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )
                                    }}
                                </Form.List>
                            </fieldset>
                            <fieldset>
                                <legend>Mentions</legend>
                                <Form.List name="mention" initialValue={mention}>
                                    {(fields, { add, remove }) => {
                                        return (
                                            <>
                                                {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                    <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                        <Form.Item name={[name, "name"]} fieldKey={[fieldKey, "name"]}>
                                                            <Input placeholder='Name' />
                                                        </Form.Item>

                                                        <MinusCircleOutlined onClick={() => remove(name)} />
                                                    </Space>
                                                ))}
                                                <Form.Item>
                                                    <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                        Add field
                                                    </Button>
                                                </Form.Item>
                                            </>
                                        )
                                    }}
                                </Form.List>
                            </fieldset>
                            <Form.Item>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Form.Item>
                        </>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default AdminJCodeNew;
