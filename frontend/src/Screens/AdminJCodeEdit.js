import React, { useEffect } from "react";
import Admin from "./Admin";
import { Form, Button, Upload, Input, Space, Switch, Spin, message } from "antd";
import { DeleteOutlined, LoadingOutlined, MinusCircleOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { firebaseRemove, firebaseUpload } from "../actions/about.action";
import { getJCode, updateJCode } from "../actions/jcode.action";

const AdminJCodeEdit = ({ match, history }) => {
    const jcodeID = match.params.id;
    const dispatch = useDispatch();

    const [editForm] = Form.useForm();

    const jcodeUpdate = useSelector(state => state.jcodeUpdate);
    const { loading: loadingUpdate, error: errorUpdate, success } = jcodeUpdate;

    const jcodeGet = useSelector(state => state.jcodeGet);
    const { loading, error, jcode } = jcodeGet;

    const firebaseRemoveHandler = e => {
        dispatch(firebaseRemove(e));
    }

    const firebaseUploadHandler = e => {
        dispatch(firebaseUpload(e))
    }
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

    useEffect(() => {
        if (!userInfo) {
            history.push('/login');
        }
        dispatch(getJCode(jcodeID));
        if (success) {
            message.success('JCode updated successfully.');
        }
    }, [dispatch, jcodeID, success, userInfo, history]);

    const handleUpdateJCode = (values) => {
        values = { ...values, jcodeID };
        dispatch(updateJCode(values));
    }

    return (
        <>
            <div className="admin-page-display-section" >
                <Admin />
                <div className="admin-page-wrapper" > {loading ? (<Spin tip='Updating...' indicator={<LoadingOutlined />} />)
                    : error ? (<div className="contact-error" > {error} </div>) :
                        (<div>
                            <h1> Update JCode: {jcodeID} </h1>
                            <Form form={editForm}
                                onFinish={handleUpdateJCode}
                                initialValues={jcode && jcode} > {
                                    loadingUpdate && (<Spin tip='Updating...' indicator={<LoadingOutlined />} />)} {
                                    errorUpdate && (<div className="contact-error" > {errorUpdate} </div>)} <
                                        >
                                    <Form.Item label="Project" name="project">
                                        <Input />
                                    </Form.Item>
                                    <fieldset>
                                        <legend> Description </legend>
                                        <Form.Item name="description">
                                            <Input.TextArea />
                                        </Form.Item>
                                    </fieldset>
                                    <Form.Item
                                        name="image"
                                        valuePropName="file"
                                        getValueFromEvent={(e) => normFile(e)}
                                    >
                                        <Upload name='image'
                                            placeholder='Image'
                                            customRequest={(e) => firebaseUploadHandler(e)}
                                            onRemove={(e) => firebaseRemoveHandler(e)}
                                        >
                                            <Button icon={<UploadOutlined />} > Click to Upload </Button>
                                        </Upload>
                                    </Form.Item>
                                    <Form.Item label="Link" name="link" >
                                        <Input />
                                    </Form.Item>
                                    <fieldset>
                                        <legend> Sections </legend>
                                        <Form.List name="section"
                                            initialValue={jcode && jcode.section}>
                                            {(fields, { add, remove }) => {
                                                return (
                                                    <>
                                                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                            <Space key={key} style={{ display: 'block', marginBottom: 8 }}>
                                                                <Form.Item
                                                                    name={[name, "title"]}
                                                                    fieldKey={[fieldKey, "title"]}
                                                                >
                                                                    <Input placeholder='Title' />
                                                                </Form.Item>
                                                                <Form.Item
                                                                    name={[name, "mode"]}
                                                                    fieldKey={[fieldKey, "mode"]}
                                                                >
                                                                    <Input placeholder='Mode' />
                                                                </Form.Item>
                                                                <Form.Item
                                                                    name={[name, "text"]}
                                                                    fieldKey={[fieldKey, "text"]}
                                                                >
                                                                    <Input.TextArea placeholder='Text' />
                                                                </Form.Item>
                                                                <Form.Item
                                                                    name={[name, "code"]}
                                                                    fieldKey={[fieldKey, "code"]}
                                                                >
                                                                    <Input.TextArea placeholder='Code' />
                                                                </Form.Item>
                                                                <div className='inner-form-list-item' >
                                                                    <fieldset>
                                                                        <legend> Links </legend>
                                                                        <Form.List name="links" initialValue={jcode && jcode.section.links}>
                                                                            {(fields, { add, remove }) => {
                                                                                return (
                                                                                    <>
                                                                                        {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                                                            <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start' >
                                                                                                <Form.Item
                                                                                                    name={[name, "url"]}
                                                                                                    fieldKey={[fieldKey, "url"]}
                                                                                                >
                                                                                                    <Input placeholder='Url' />
                                                                                                </Form.Item>
                                                                                                <Form.Item label="Video" name="video" >
                                                                                                    <Switch defaultChecked={true} />
                                                                                                </Form.Item>
                                                                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                                                                            </Space>
                                                                                        ))}
                                                                                        <Form.Item >
                                                                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}> Add field </Button>
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
                                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} > Add field </Button>
                                                        </Form.Item>
                                                    </>
                                                )
                                            }}
                                        </Form.List>
                                    </fieldset>
                                    <fieldset >
                                        <legend > Mentions </legend>
                                        <Form.List name="mention" initialValue={jcode && jcode.mention}>
                                            {(fields, { add, remove }) => {
                                                return (
                                                    <> {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                        <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start' >
                                                            <Form.Item name={[name, "name"]} fieldKey={[fieldKey, "name"]}>
                                                                <Input placeholder='Name' />
                                                            </Form.Item>
                                                            <MinusCircleOutlined onClick={() => remove(name)} />
                                                        </Space>))}
                                                        <Form.Item >
                                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}> Add field </Button>
                                                        </Form.Item>
                                                    </>
                                                )
                                            }}
                                        </Form.List>
                                    </fieldset>
                                    <Form.Item >
                                        <Button type="primary" htmlType="submit" > Submit </Button>
                                    </Form.Item>
                                </>
                            </Form>
                        </div>
                        )}
                </div>
            </div>
        </>
    )
}

export default AdminJCodeEdit;