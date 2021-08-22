import moment, { defaultFormat } from "moment";
import 'moment/locale/zh-cn';
import locale from 'antd/lib/locale/en_US';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProject, updateProject } from "../actions/project.action";
import { Button, Form, Switch, DatePicker, Input, Space, Spin, Upload, message, ConfigProvider } from "antd";
import { LoadingOutlined, MinusCircleOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { firebaseRemove, firebaseUpload } from "../actions/about.action";
import Admin from "./Admin";

const AdminProjectEdit = ({ match }) => {

    const projectID = match.params.id;

    const [editForm] = Form.useForm();
    const dispatch = useDispatch();

    const projectGet = useSelector(state => state.projectGet)
    const { loading: loadingGet, error: errorGet, project } = projectGet;

    const projectUpdate = useSelector(state => state.projectUpdate);
    const { loading, error, success } = projectUpdate;

    const handleEditForm = (values) => {
        //console.log(values);
        dispatch(updateProject(values));
    }

    useEffect(() => {
        dispatch(getProject(projectID));
        if (success) {
            message.success('Project updated successfully!');
        }
    }, [dispatch, projectID, success]);

    const firebaseRemoveHandler = e => {
        dispatch(firebaseRemove(e));
    }

    const firebaseUploadHandler = e => {
        dispatch(firebaseUpload(e))
    }

    return (
        <div>
            <div className="admin-page-display-section">
                <Admin />
                <div className="admin-page-wrapper">
                    <h1>Update Project: {projectID} </h1>
                    {loadingGet ? <Spin indicator={<LoadingOutlined />} size='large' />
                        : errorGet ? (<div className='contact-error'>{errorGet}</div>)
                            : (
                                <Form form={editForm} onFinish={handleEditForm} initialValues={project && project}>
                                    {loading && (<Spin tip='Creating...' indicator={<LoadingOutlined />} />)}
                                    {error && (<div className="contact-error">{error}</div>)}
                                    <>
                                        <Form.Item label="Name" name="name">
                                            <Input />
                                        </Form.Item>
                                        <Form.Item
                                            name={"image"}
                                            label="Image"
                                        >
                                            <Upload
                                                name='image'
                                                customRequest={(e) => firebaseUploadHandler(e)}
                                                onRemove={(e) => firebaseRemoveHandler(e)}
                                            >
                                                <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                            </Upload>
                                        </Form.Item>
                                        <fieldset>
                                            <legend>Description</legend>
                                            <Form.Item name="description">
                                                <Input.TextArea />
                                            </Form.Item>
                                        </fieldset>
                                        <Form.Item label="Private" name="private">
                                            <Switch defaultChecked={true} />
                                        </Form.Item>
                                        <Form.Item label="Done" name="doneAt">
                                            <ConfigProvider locale={locale}>
                                                { project && <DatePicker  
                                                    defaultValue={moment(project.doneAt, defaultFormat)}
                                                    format={defaultFormat}
                                                /> }
                                            </ConfigProvider>;
                                        </Form.Item>
                                        <Form.Item label="Website Link" name="website">
                                            <Input />
                                        </Form.Item>
                                        <fieldset>
                                            <legend>Participant</legend>
                                            <Form.List name="participant" initialValue={project && project.participant}>
                                                {(fields, { add, remove }) => {
                                                    return (
                                                        <>
                                                            {fields.map(({ key, name, fieldKey, ...restField }) => (
                                                                <Space key={key} style={{ display: 'flex', marginBottom: 8, justifyContent: 'space-between' }} align='start'>
                                                                    <Form.Item name={[name, "name"]} fieldKey={[fieldKey, "name"]}>
                                                                        <Input placeholder='Name' />
                                                                    </Form.Item>
                                                                    <Form.Item name={[name, "pseudo"]} fieldKey={[fieldKey, "pseudo"]}>
                                                                        <Input placeholder='Pseudo' />
                                                                    </Form.Item>
                                                                    <Form.Item
                                                                        name={[name, "image"]}
                                                                        fieldKey={[fieldKey, "image"]}
                                                                    >
                                                                        <Upload
                                                                            name='image'
                                                                            customRequest={(e) => firebaseUploadHandler(e)}
                                                                            onRemove={(e) => firebaseRemoveHandler(e)}
                                                                        >
                                                                            <Button icon={<UploadOutlined />}>Click to Upload</Button>
                                                                        </Upload>
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
                                </Form>)
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminProjectEdit;
